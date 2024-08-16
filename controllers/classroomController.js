const Classroom = require("../models/classroom.model");
const User = require("../models/user.model");

// Create Classroom
const createClassroom = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { classroomName } = req.body;
    // console.log(teacherId);
    // console.log(classroomName);

    //user shuld be a teacher
    const teacher = await User.findById(teacherId);
    if (!teacher || teacher.role !== "teacher") {
      return res
        .status(400)
        .json({ message: "Unauthorized: User must be a teacher" });
    }
    const newClassroom = await Classroom.create({
      classroomName,
      teacher: teacherId,
    });

    res.status(200).json({
      classroomId: newClassroom._id,
      classroomName: newClassroom.classroomName,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Add Student to Classroom
const addStudentToClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const { studentId } = req.body;
    
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // student already exists
    if (classroom.students.includes(studentId)) {
      return res.status(400).json({ message: "Student already added" });
    }

    classroom.students.push(studentId);
    await classroom.save();

    res.status(200).json({ message: "Student added successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Remove Student from Classroom
const removeStudentFromClassroom = async (req, res) => {
  try {
    const { classroomId, studentId } = req.params;

    // Find the classroom and remove the student
    const classroom = await Classroom.findById(classroomId);
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" });
    }

    // Check if the student exists in the classroom
    if (!classroom.students.includes(studentId)) {
      return res
        .status(400)
        .json({ message: "Student not found in the classroom" });
    }

    classroom.students = classroom.students.filter(
      (id) => id.toString() !== studentId
    );
    await classroom.save();

    res.status(200).json({ message: "Student removed successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = {
  createClassroom,
  addStudentToClassroom,
  removeStudentFromClassroom,
  
};
