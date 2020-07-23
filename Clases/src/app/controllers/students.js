const { age, graduation, date } = require('../../lib/utils')
const Student = require('../models/student')
const student = require('../models/student')

module.exports = {
    index(req, res) {

        Student.all(function(students) {
            return res.render("students/students", {students})
        })
        
    },

    post(req, res) {
        const keys = Object.keys(req.body)

        for(let key of keys){
            if(req.body[key] == "")
                return res.send("Please, fill all inputs!")
        }

        Student.create(req.body, function(student) {
            return res.redirect(`/students/${student.id}`)
        })
    },

    show(req, res) {
        Student.find(req.params.id, function(student){
            if(!student) return reset.send("Student not found!")

            student.age = date(student.birth_date).birthDay
            student.materia = student.subjects_taught.split(",")
            

            return res.render("students/show", {student})
        })
    },

    edit(req, res) {
        Student.find(req.params.id, function(student){
            if(!student) return reset.send("Student not found!")

            student.age = date(student.birth_date).iso


            return res.render("students/edit", {student})
        })
    },

    put(req, res) {
        const keys = Object.keys(req.body)

        for(let key of keys){
            if(req.body[key] == "")
                return res.send("Please, fill all inputs!")
        }

        student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })
    },

    delete(req, res) {
        student.delete(req.body.id, function() {
            return res.redirect(`/students`)
        })
    }
}
