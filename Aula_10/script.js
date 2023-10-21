const NOME_INPUT = document.getElementById('nome_input')
const N1 = document.getElementById('n1_input')
const N2 = document.getElementById('n2_input')
const N3 = document.getElementById('n3_input')
const NOME = document.getElementById('nome')
const MED = document.getElementById('media')
const RESULTADO = document.getElementById('resultado')
const FORMULARIO = document.getElementById('formulario')

FORMULARIO.addEventListener('submit', (e) => {
    e.preventDefault()

    media()
})

function media(){
   let nome = NOME_INPUT.value
   let n1 = parseInt(N1.value)
   let n2 = parseInt(N2.value)
   let n3 = parseInt(N3.value)

   localStorage.setItem('nome', nome)
   localStorage.setItem('n1', n1)
   localStorage.setItem('n2', n2)
   localStorage.setItem('n3', n3)

    let resultado = (n1 + n2 + n3)

    NOME.innerHTML = localStorage.getItem('nome')
    MED.innerHTML = resultado

    if (resultado >= 7){
        RESULTADO.innerHTML = 'aprovado'
}
else if (resultado <= 4){
    RESULTADO.innerHTML = 'reprovado'
}
else{
    RESULTADO.innerHTML = 'recuperação'
}

}