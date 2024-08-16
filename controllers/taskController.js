// controllers/taskController.js
const Task = require('../models/task.model');
const Classroom = require('../models/classroom.model');
const User = require('../models/user.model');

const assignTask = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.classroomId);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    const { title, description, dueDate } = req.body;
    if (!title || !description || !dueDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newTask = await Task.create({
      title,
      description,
      dueDate,
      classroomId: classroom._id,
    });

    res.status(201).json({
      taskId: newTask._id,
      title: newTask.title,
      description: newTask.description,
      dueDate: newTask.dueDate.toISOString().split('T')[0],
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { assignTask };
