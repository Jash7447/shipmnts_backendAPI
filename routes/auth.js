const express = require('express');
const { registerUser } = require('../controllers/authController');
const { addStudentToClassroom, removeStudentFromClassroom } = require('../controllers/classroomController');

const router = express.Router();

// Register route
router.post('/register', registerUser);
router.post('/classrooms/:classroomId/students', addStudentToClassroom);
router.delete('/classrooms/:classroomId/students/:studentId', removeStudentFromClassroom);


module.exports = router;
