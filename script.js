let playerChoice = prompt("Please type rock, paper, or scissors").toLowerCase();

/* function getPlayerChoice () {
    let playerChoice = prompt("Please type rock, paper, or scissors").toLowerCase();
    if (playerChoice == "rock") {
        return "rock";
    }
    if (playerChoice == "paper") {
        return "paper";
    }
    if (playerChoice == "scissors") {
        return "scissors";
    } else if (playerChoice != "rock" || "paper" || "scissors") {
        return "YOU FOOL!"
    }
}

console.log("Player Selected:", getPlayerChoice()) */

console.log("Player Selected:", playerChoice)

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3)
    if (computerNumber == 0) {
        return "rock";
    }
    if (computerNumber == 1) {
        return "paper";
    }
    if (computerNumber == 2) {
        return "scissors";
    }
}

console.log("Computer Selected:", getComputerChoice())

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {
            return ("You lose! " + computerSelection + " beats " + playerSelection)
    }
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            return ("You win! " + playerSelection + " beats " + computerSelection)
    }
    if (
        (playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")) {
            return ("It's a tie!")
    }
  }
  
const playerSelection = playerChoice;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));