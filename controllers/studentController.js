const Classroom = require('../models/classroom.model');
const Task = require('../models/task.model');
const Submission = require('../models/submission.model');
const User = require('../models/user.model');

const viewClassrooms = async (req, res) => {
    try {
      const { studentId } = req.params;
  
      const classrooms = await Classroom.find({ students: studentId });
      const response = classrooms.map(classroom => ({
        classroomId: classroom._id,
        classroomName: classroom.classroomName 
      }));
  
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };

  module.exports = {
    viewClassrooms
  };
  