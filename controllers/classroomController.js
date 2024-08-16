const Classroom = require('../models/classroom.model');
const User = require('../models/user.model');

// Create Classroom
const createClassroom = async (req, res) => {
    try {
      const { teacherId } = req.params;
      const { classroomName } = req.body;
      
      const newClassroom = await Classroom.create({
        classroomName,
        teacher: teacherId
      });
      
      res.status(200).json({
        classroomId: newClassroom._id,
        classroomName: newClassroom.classroomName
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };

  module.exports = {
    createClassroom,
  };