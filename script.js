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

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <5; i++) {
        function playRound(playerSelection, computerSelection) {
            if (
                (playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "rock")
                ) {
                    computerScore++;
                    return ("You lose! " + computerSelection + " beats " + playerSelection)
            }
            if (
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")
                ) {
                    playerScore++;
                    return ("You win! " + playerSelection + " beats " + computerSelection)
            }
            if (
                (playerSelection == "rock" && computerSelection == "rock") ||
                (playerSelection == "paper" && computerSelection == "paper") ||
                (playerSelection == "scissors" && computerSelection == "scissors")) {
                    return ("It's a tie!")
            }
        }
        const playerSelection = prompt ("Please type rock, paper or scissors").toLowerCase();
        console.log("Player Selected:", playerSelection)
        const computerSelection = getComputerChoice();
        console.log("Computer Selected:", computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score:", playerScore)
        console.log("Computer Score:", computerScore)
    }
    if (playerScore > computerScore) {
        alert ("You Win! Congrats!")
    }
    if (computerScore > playerScore) {
        alert ("You Lose! Sorry!")
    }
}

playGame();