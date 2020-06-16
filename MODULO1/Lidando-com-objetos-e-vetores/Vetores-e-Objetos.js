const Programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        {
            nome: "C++",
            especialidade:"Desktop"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        }
    ]
}

console.log(`O usuário ${Programador.nome} tem ${Programador.idade} e usa a tecnologia ${Programador.tecnologias[0].nome} com especialidade em ${Programador.tecnologias[0].especialidade}`)