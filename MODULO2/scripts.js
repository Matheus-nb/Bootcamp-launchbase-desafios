const modalOverlay = document.querySelector('.modalOverlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards){
    card.addEventListener("click",function(){
        const idValue = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${idValue}`
    })
}

document.querySelector('.closeModal').addEventListener("click",function(){
    modalOverlay.classList.remove('active')
    if(modal.classList.contains('maximizar')) {
        modal.classList.remove('maximizar')
    }
})

document.querySelector('.maximizar').addEventListener("click",function(){
    modal.classList.toggle('maximizar')
})


