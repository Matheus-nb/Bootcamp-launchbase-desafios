const usuario = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}


console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)