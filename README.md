# ClassConnect Backend API

## Overview

ClassConnect is a platform designed for classroom management, providing functionalities for both teachers and students. This API allows teachers to create and manage classrooms, assign tasks, and handle student enrollment, while students can view their classrooms and tasks, and submit their assignments.

###APIs
From the list of API given:

API Endpoint: POST api/teachers/{teacherId}/classrooms
API Endpoint (Add Student): POST api/classrooms/{classroomId}/students
API Endpoint (Remove Student): DELETE api/classrooms/{classroomId}/students/{studentId}
API Endpoint: POST api/classrooms/{classroomId}/tasks
API Endpoints:
View Classrooms: GET api/teachers/{teacherId}/classrooms
Edit Classroom: PUT api/classrooms/{classroomId}
Delete Classroom: DELETE api/classrooms/{classroomId}
API Endpoint: GET api/classrooms/{classroomId}/tasks/{taskId}/submissions
API Endpoint: GET api/students/{studentId}/classrooms
API Endpoint: GET api/students/{studentId}/classrooms/{classroomId}/tasks


## To Run The Project
Clone the repository:
git clone https://github.com/your-username/shipmnts_backendAPI.git

Navigate to the project directory:
cd shipmnts_backendAPI

Install dependencies:
npm install

Start the server:
npm run dev

There you go!
