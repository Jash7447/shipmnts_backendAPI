const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


router.get('/students/:studentId/classrooms', studentController.viewClassrooms);
router.get('/students/:studentId/classrooms/:classroomId/tasks', studentController.viewTasks);

