const corpo = document.getElementsByTagName('body')
const div = document.getElementById('area')

function clicar () {
    div.innerText = 'Clicou !'
    div.style.background = 'green'

}

div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)
div.addEventListener('dblclick', dois_click)
div.addEventListener('mouseup', soltar )

function entrar() {
    div.innerText = 'Entrou !'
    div.style.background = 'red'
}

function sair() {
    div.innerText = 'Saiu...'
    div.style.background = 'blue'
    div.style.fontSize = '60px'
}

function dois_click() {
    div.innerText = 'vish'
    div.style.background = 'magenta'
}

function soltar() {
    div.innerText = 'ala mane'
    div.style.background = 'brown'
}
