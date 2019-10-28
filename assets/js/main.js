var Tittle = document.querySelector('.title')
var Text = document.querySelector('.paragraph')
var Photo = document.querySelector('.Photograph')

var RenTit = document.querySelector('.ins-title')
var RenTex = document.querySelector('.ins-text')
var RenImg = document.querySelector('.ins-photo')

function render (event) {
    event.preventDefault();

    RenTit.innerHTML = Tittle.value
    RenTex.innerHTML = Text.value
    RenImg.setAttribute('src', Photo.value)
} 