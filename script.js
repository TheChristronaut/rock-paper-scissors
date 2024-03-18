function getPlayerChoice () {
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

console.log("Player Selected:", getPlayerChoice())

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