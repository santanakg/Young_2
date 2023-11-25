const QUESTOES_QUIZ = [
    {
        questao:'Professor mais maneiro ?',
        a: 'Daniel',
        b: 'Rodrigo',
        c: 'Diego',
        D: 'Arthur',
        correta: 'c'
    },
    {
        questao:'Aluno mais mil grau ?',
        a: 'Leandro',
        b: 'Weverton',
        c: 'Heitor',
        D: 'Santana',
        correta: 'd'
    },
    {
        questao:'Puro entretenimento da sala ?',
        a: 'Leandro',
        b: 'Weverton',
        c: 'Heitor',
        D: 'Santana',
        correta: 'd'
    }
]

const TITULO_QUIZ = document.querySelector('.titulo-questao')
const ALTERNATIVA_A = document.getElementById('texto-a')
const ALTERNATIVA_B = document.getElementById('texto-b')
const ALTERNATIVA_C = document.getElementById('texto-c')
const ALTERNATIVA_D = document.getElementById('texto-d')
const BOTAO = document.getElementById('enviar')
const RESPOSTAS = document.querySelectorAll('.resposta')
const CONTEINER_QUIZ = document.querySelector('.conteiner-quiz')

let questao_atual = 0
let qtd_corretas = 0

function carregar_questoes(){
    desmarcar()
    const QUESTAO = QUESTOES_QUIZ[questao_atual]
    TITULO_QUIZ.innerHTML = QUESTAO.questao
    ALTERNATIVA_A.innerHTML = QUESTAO.a
    ALTERNATIVA_B.innerHTML = QUESTAO.b
    ALTERNATIVA_C.innerHTML = QUESTAO.c
    ALTERNATIVA_D.innerHTML = QUESTAO.D
}

function desmarcar() {
    RESPOSTAS.forEach((resp_elemento) => {
        resp_elemento.checked = false
    })
}

function pegar_resposta() {
    let resp = undefined

    RESPOSTAS.forEach((resposta) => {
        if (resposta.checked) {
            resp = resposta.id;
        }
    })

    return resp
}

BOTAO.addEventListener('click', () => {
    const RESP_PLAYER = pegar_resposta()
    const TOTAL_PERGUNTAS = QUESTOES_QUIZ.length
    console.log(RESP_PLAYER)

    if (RESP_PLAYER) {
        if (RESP_PLAYER === QUESTOES_QUIZ[questao_atual].correta){
        qtd_corretas++
       }
        questao_atual++ 
        if (questao_atual < TOTAL_PERGUNTAS){
            carregar_questoes()

        }
        else {
            CONTEINER_QUIZ.innerHTML = `<h1 class='resetar'>Você acertou ${qtd_corretas}/${TOTAL_PERGUNTAS} questoes </h1>
            <button button class='resetar-btn' onclick='location.reload()'> Resetar </button>`
        }
        
    }
})

carregar_questoes()
