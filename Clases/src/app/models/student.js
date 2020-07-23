const { date, age, graduation } = require("../../lib/utils")
const db = require('../../config/db')

module.exports = {

    all(callback) {

        db.query(`SELECT * FROM students ORDER BY name ASC`,function(err,results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },

    create(data, callback) {
        const query = `INSERT INTO students (
            avatar_url,
            name,
            email,
            birth_date,
            education_level,
            class_hour,
            subjects_taught
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.escolaridade,
            data.class_hour,
            data.materia
        ]

        db.query(query,values,function(err,results) {
            if(err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },

    find(id, callback) {
        db.query(
        `SELECT * 
        FROM students 
        WHERE id = $1`, [id], function(err,results) {
            if(err) throw `Database Error! ${err}`
            callback(results.rows[0])
        })
    },

    update(data,callback) {
        const query = `
        UPDATE students SET
            avatar_url=($1),
            name=($2),
            email=($3),
            birth_date=($4),
            education_level=($5),
            class_hour=($6),
            subjects_taught=($7)
        WHERE id = $8
        `

        const values= [
            data.avatar_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.escolaridade,
            data.class_hour,
            data.materia,
            data.id
        ]

        db.query(query,values,function(err,results) {
            if(err) throw `Database Error! ${err}`

            callback()
        })
    },

    delete(id,callback) {
        db.query(`DELETE FROM students WHERE id = $1`,[id],function(err,results) {
            if(err) throw `Database Error! ${err}`

            return callback()
        })
    }
}