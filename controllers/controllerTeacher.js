const { Teacher } = require('../models/index')

class ControllerTeacher {
    static findAll(req, res) {
        Teacher.findAll()
            .then(teachers => {
                res.render('teacher', {teachers})
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static findTeacherById(req, res) {
        Teacher.findAll({where: {id : req.params.id}})
            .then(teachers => {
                res.render('teacher', {teachers})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ControllerTeacher