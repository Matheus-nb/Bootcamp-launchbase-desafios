const ModalOverlay = document.querySelector('.modalOverlay')
const Cards = document.querySelectorAll('.card')
const Modal = document.querySelector('.modal')
const link = document.querySelector('#link')

for(let card of Cards){
    card.addEventListener("click", function(){
        ModalOverlay.classList.add('active')
        const idValue = card.getAttribute('id')
        ModalOverlay.querySelector('iframe').src = `https://matheus-nb.github.io/${idValue}`
        link.href = `https://github.com/Matheus-nb/${idValue}`
    })
}

document.querySelector('.closeModal').addEventListener("click",function(){
    ModalOverlay.classList.remove('active')
    if(Modal.classList.contains('full')){
        Modal.classList.remove('full')
    }
})

document.querySelector('.fullModal').addEventListener("click",function(){
    Modal.classList.toggle('full')
})

