const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

// Create 
router.post('/teachers/:teacherId/classrooms', classroomController.createClassroom);

module.exports = router;
