const { Subject } = require('../models/index')

class ControllerSubject {
    static findAll(req, res) {
       Subject.findAll()
            .then(subjects => {
                res.render('subject', {subjects})
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static findSubjectById(req, res) {
        Subject.findAll({where: {id : req.params.id}})
            .then(subjects => {
                res.render('subject', {subjects})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ControllerSubject