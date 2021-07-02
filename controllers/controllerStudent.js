const { Student } = require('../models/index')
const ControllerTeacher = require('./controllerTeacher')

class ControllerStudent {
    static validate(fn, email, gender, bd) {
        let arr = []
        if(!fn) {
            arr.push('Nama Depan Tidak Boleh Kosong')
        } else if (!email) {
            arr.push('Email Tidak Boleh Kodong')
        } else if (!gender) {
            arr.push('Gender harus diisi')
        } else if (!bd) {
            arr.push('Tanggal Lahir harus diisi')
        }

        return arr
    }
    static findAll(req, res) {
        Student.findAll()
            .then(students => {
                res.render('student', {students})
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static findStudentByEmail(req, res) {
        let email = req.params.email
        Student.findAll({where: {email}})
            .then(students => {
                res.render('student', {students})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addStudentForm(req, res) {
        let err = req.query.error
        if(err) {
            res.render('addStudent', {err: err})
        } else {
            res.render('addStudent', {err: null})
        }
    }

    static addStudentPost(req, res) {
        let {first_name, last_name, email, gender, birth_date} = req.body;
        let obj = {first_name, last_name, email, gender, birth_date: new Date(birth_date)}
        console.log(obj)
        let error = ControllerStudent.validate(first_name, email, gender, birth_date)
        if(!error.length) {
            Student.create(obj)
                .then(req => {
                    res.redirect('/students')
                })
                .catch(err => {
                    console.log(err)
                    res.send(err)
                })
        } else {
            res.redirect(`/students/add/?error=${error.join(', ')}`)
        }
    }

    static editStudentGet(req, res) {
        let errMessege = req.query.error
            Student.findByPk(Number(req.params.id))
                .then(student => {
                    if(!errMessege) {
                        res.render('editStudent', {student, errMessege: null})
                    } else {
                        res.render('editStudent', {student, errMessege: errMessege})
                    }
                })
                .catch(err => {
                    res.send(err)
                })
    }

    static editStudentPost(req, res) {
        let id = req.params.id
        let {first_name, last_name, email, gender, birth_date} = req.body;
        let obj = {first_name, last_name, email, gender, birth_date: new Date(birth_date)}
        let error = ControllerStudent.validate(first_name, email, gender, birth_date)
        if(!error.length) {
            Student.update(obj, {where: {id}})
                .then(data => {
                    res.redirect('/students')
                })
                .catch(err => {
                    res.send(err)
                })
        } else {
            res.redirect(`/students/${id}/edit/?error=${error}`)
        }
    }

    static deleteStudent(req, res) {
        let id = req.params.id
        Student.destroy({where: {id}})
            .then(data => {
                res.redirect('/students')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ControllerStudent