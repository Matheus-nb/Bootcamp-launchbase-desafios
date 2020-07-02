const fs = require('fs')
const data = require('../data.json')
const { age, graduation, date } = require('../utils')



exports.index = function(req, res){
    return res.render("students/students", {students:data.students})
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for(let key of keys){
        if(req.body[key] == "")
            return res.send("Please, fill all inputs!")
    }

    birth = Date.parse(req.body.birth)
    let id = 1
    const lastID =  data.students[data.students.length - 1]

    if(lastID) {
        id = lastID.id + 1
    }
    

    data.students.push({
        id,
        ...req.body,
        birth
    })

    fs.writeFile("data.json",JSON.stringify(data,null,2), function(err){
        if(err) return res.send ("Write file error!")


        return res.redirect("/students")
    })
} 

exports.show = function(req, res) {
    const { id } = req.params

    
    const foundstudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundstudent) return res.send("student not found")

    const student = {
        ...foundstudent,
        materia:foundstudent.materia.split(", "),
        birth: date(foundstudent.birth).birthDay
    }

    return res.render("students/show", { student })
}

exports.edit = function(req,res) {
    const { id } = req.params


    const foundstudent = data.students.find(function(student){
        return student.id == id
    })

    if(!foundstudent) return res.send("student not found")

    const student = {
        ...foundstudent,
        age: date(foundstudent.birth).iso
    }

    return res.render("students/edit", { student })
}

exports.put = function(req, res) {
    const { id } = req.body
    let index = 0

    const foundstudent = data.students.find(function(student,foundIndex){
        if (student.id == id) {
            index = foundIndex
            return true
        }
    })

    if(!foundstudent) return res.send("student not found")

    const student = {
        ...foundstudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number (req.body.id)
    }

    data.students[index] = student

    fs.writeFile("data.json",JSON.stringify(data,null,2), function(err){
        if(err) return res.send ("Write file error!")


        return res.redirect(`/students/${id}`)
    })
}

exports.delete = function(req,res) {
    const { id } = req.body


    const filterstudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filterstudents

    fs.writeFile("data.json",JSON.stringify(data,null,2), function(err){
        if(err) return res.send ("Write file error!")


        return res.redirect(`/students`)
    })
}

