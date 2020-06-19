const express = require('express')
const nunjucks = require('nunjucks')

const courses = require("./data")

const server = express()

server.use(express.static('public'))

server.set('view engine',"njk")

nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false
})

server.get('/', function (req,res){
    return res.render("courses", {courses} )
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
    return res.render("course", {id})
});



server.get('/about', function (req, res) {
    const about = {
        img:"https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        title:"Rocketseat",
        description:"Mais do que uma plataforma de educação em tecnologia, uma comunidade incrível de programadores em busca do próximo nível 🚀",
        tecs:["JavaScript", "ReactJS", "React Native", "NodeJS"],
        links: [
            { name:"Github", url:"https://github.com/Rocketseat"},
            { name:"Twitter", url:"https://twitter.com/rocketseat"},
            { name:"Facebook", url:"https://www.facebook.com/rocketseat/"},
        ]
    }
    return res.render("about",{about})
})






server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen('5000',function(){
    console.log("PAI TA ONLINE")
})
