const nome = "Heitor"
const sexo = "M"
const idade = 60
const contribuicao = 35
const ic = idade + contribuicao

if(sexo === "F") {
    if(ic >= 85 && contribuicao >= 30){
        console.log(`${nome}, você pode se aposentar!`)
    } else{
        console.log(`${nome}, você ainda nâo pode se aposentar!`)
    }
}else {
    if(ic >= 95 && contribuicao >= 35){
        console.log(`${nome}, você pode se aposentar!`)
    } else{
        console.log(`${nome}, você ainda nâo pode se aposentar!`)
    }
}