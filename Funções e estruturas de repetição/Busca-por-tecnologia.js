const usuarios = [
    {
        nome: "Carlos",
        tecnologias:["HTML","CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript","CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML","Node.js"]
    }
]

function checaSeUsuarioUsaCSS(usuario) {
    for(let tecnologia of usuario.tecnologias){
        if(tecnologia === "CSS"){
            return true
        }
    }
    return false

}

for(let i=0; i < usuarios.length; i++){
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}