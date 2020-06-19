const cards = document.querySelectorAll('.card')


for(let card of cards){
    card.addEventListener("click",function(){
        const idValue = card.getAttribute("id")
        window.location.href = `/courses/${idValue}`
    })
}

