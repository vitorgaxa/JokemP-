// Obtendo a jogada do player
function playerChoice(choice) {
    const yourChoice = choice.value
    aiChoiceGenerator(yourChoice)
}

// Criando uma joga para a IA
const aiAnswer = document.querySelector('.aichoice')

function aiChoiceGenerator(yourChoice) {
    const aiPossibilities = ["rock", "paper", "scissor"];
    const aiChoice = aiPossibilities[Math.floor(Math.random() * aiPossibilities.length)]
    aiAnswer.innerHTML = aiChoice
    resultGame(yourChoice, aiChoice)
}

// Verificação do resultado
const result = document.querySelector('.result')

function resultGame(yourChoice, aiChoice) {
    if (yourChoice === 'rock' && aiChoice === 'scissor' ||
        yourChoice === 'paper' && aiChoice === 'rock'||
        yourChoice === 'scissor' && aiChoice === 'paper') {
        result.innerHTML = 'Você ganhou'
        points('victory')
        botton('Você ganhou')
    } else if (yourChoice === aiChoice){
        result.innerHTML = 'Deu empate'
        botton('empate')
    } else {
        result.innerHTML = 'Você perdeu'
        points('loses')
        botton('Você perdeu')
    }
}

// Estilizando botton
function botton(resultGame) {
    result.className = 'result' // limpa classes antigas

    if (resultGame === 'Você ganhou') {
        result.classList.add('win')
    } else if (resultGame === 'Você perdeu') {
        result.classList.add('lose')
    } else if (resultGame === 'empate') {
        result.classList.add('draw')
    }
}

// Pontos
const yourPoints = document.querySelector('.your-points')
const aiPoints = document.querySelector('.ai-points')
let yourPointsValue = 0
let aiPointsValue = 0

function points(resultGame) {
    if (resultGame === 'victory') {
        yourPointsValue++
        yourPoints.innerHTML = yourPointsValue
        
    } else if (resultGame === 'loses') {
        aiPointsValue++
        aiPoints.innerHTML = aiPointsValue
    }
}