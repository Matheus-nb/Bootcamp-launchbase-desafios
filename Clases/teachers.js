const fs = require('fs')
const data = require('./data.json')
const { age, graduation, date } = require('./utils')




exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    let {avatar_url, name, birth, escolaridade, tipo_aula, materia} = req.body

    for(let key of keys){
        if(req.body[key] == "")
            return res.send("Please, fill all inputs!")
    }

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)
    

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        escolaridade,
        tipo_aula,
        materia,
        created_at
    })

    fs.writeFile("data.json",JSON.stringify(data,null,2), function(err){
        if(err) return res.send ("Write file error!")


        return res.redirect("/teachers")
    })
} 

exports.show = function(req, res) {
    const { id } = req.params


    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher not found")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        escolaridade:graduation(foundTeacher.escolaridade),
        materia:foundTeacher.materia.split(", "),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
    }

    return res.render("teachers/show", { teacher })
}

exports.edit = function(req,res) {
    const { id } = req.params


    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher not found")

    const teacher = {
        ...foundTeacher,
        age: date(foundTeacher.birth)
    }

    return res.render("teachers/edit", { teacher })
}

