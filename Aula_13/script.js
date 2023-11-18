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
const CONTEINER_QUIZ = document.querySelector('conteiner-quiz')

let questao_atual = 0
let qtd_corretas = 0

function carregar_questoes(){
    const QUESTAO = QUESTOES_QUIZ[questao_atual]
    TITULO_QUIZ.innerHTML = QUESTAO.questao
    ALTERNATIVA_A.innerHTML = QUESTAO.a
    ALTERNATIVA_B.innerHTML = QUESTAO.b
    ALTERNATIVA_C.innerHTML = QUESTAO.c
    ALTERNATIVA_D.innerHTML = QUESTAO.d
}

carregar_questoes()