const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.render("index")
})

routes.get('/teachers',function(req, res){
    return res.render("teachers/teachers")
})


module.exports = routes