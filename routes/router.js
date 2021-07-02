const express = require('express')
const route = express.Router() 
const ControllerTeacher = require('../controllers/controllerTeacher')
const ControllerStudent = require('../controllers/controllerStudent')
const ControllerSubject = require('../controllers/controllerSubject')
const { editStudentGet, editStudentPost } = require('../controllers/controllerStudent')

route.get('/', (req, res) => {
    res.render('home')
})

route.get('/teachers', ControllerTeacher.findAll)
route.get('/students', ControllerStudent.findAll)
route.get('/subjects', ControllerSubject.findAll)
route.get('/students/add', ControllerStudent.addStudentForm)
route.post('/students/add', ControllerStudent.addStudentPost)
route.get('/students/:id/delete', ControllerStudent.deleteStudent)
route.get('/students/:id/edit', ControllerStudent.editStudentGet)
route.post('/students/:id/edit', ControllerStudent.editStudentPost)
route.get('/teachers/:id', ControllerTeacher.findTeacherById)
route.get('/subjects/:id', ControllerSubject.findSubjectById)
route.get('/students/:email', ControllerStudent.findStudentByEmail)


module.exports = route