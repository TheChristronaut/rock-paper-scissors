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