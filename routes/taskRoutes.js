const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/classrooms/:classroomId/tasks', taskController.assignTask);
router.get('/classrooms/:classroomId/tasks/:taskId/submissions', taskController.taskSubmissionStatus);

module.exports = router;
