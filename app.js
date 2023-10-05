const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice() {
    let randomNum = Math.floor(Math.random() * possibleChoices.length) // generates a random number between 1-3 that corresponds with rock, paper, scissors
    let choices = ['rock', 'paper', 'scissors'] //different from tutorial, I use indexing to generate the computer's choice
    computerChoice =  choices[randomNum]
    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResult() {
    if (computerChoice === userChoice) {
        result = 'Tie!'
      }
      if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You win!'
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lost!'
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You win!'
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win!'
      }
      if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lose!'
      }
      resultDisplay.innerHTML = result
}
