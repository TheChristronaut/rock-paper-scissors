const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");
const lizardbtn = document.querySelector("#lizardbtn");
const spockbtn = document.querySelector("#spockbtn");

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 5)
    if (computerNumber == 0) {
        return "rock";
    }
    if (computerNumber == 1) {
        return "paper";
    }
    if (computerNumber == 2) {
        return "scissors";
    }
    if (computerNumber == 3) {
        return "lizard";
    }
    if (computerNumber == 4) {
        return "spock";
    }
}

//function playGame(){
    let playerScore = 0;
    let computerScore = 0;
//    for (let i = 0; i < 5; i++) {
        function playRound(playerSelection, computerSelection) {
            if (
                (playerSelection == "paper" && computerSelection == "scissors")
                ) {
                    computerScore++;
                    return ("You lose! Scissors cuts Paper")
            }
            if (
                (playerSelection == "rock" && computerSelection == "paper")
                ) {
                    computerScore++;
                    return ("You lose! Paper covers Rock")
            }
            if (
                (playerSelection == "lizard" && computerSelection == "rock")
                ) {
                    computerScore++;
                    return ("You lose! Rock crushes Lizard")
            }
            if (
                (playerSelection == "spock" && computerSelection == "lizard")
                ) {
                    computerScore++;
                    return ("You lose! Lizard poisons Spock")
            }
            if (
                (playerSelection == "scissors" && computerSelection == "spock")
                ) {
                    computerScore++;
                    return ("You lose! Spock smashes Scissors")
            }
            if (
                (playerSelection == "lizard" && computerSelection == "scissors")
                ) {
                    computerScore++;
                    return ("You lose! Scissors decapitates Lizard")
            }
            if (
                (playerSelection == "paper" && computerSelection == "Lizard")
                ) {
                    computerScore++;
                    return ("You lose! Lizard eats Paper")
            }
            if (
                (playerSelection == "spock" && computerSelection == "paper")
                ) {
                    computerScore++;
                    return ("You lose! Paper disproves Spock")
            }
            if (
                (playerSelection == "rock" && computerSelection == "spock")
                ) {
                    computerScore++;
                    return ("You lose! Spock vaporizes Rock")
            }
            if (
                (playerSelection == "scissors" && computerSelection == "rock")
                ) {
                    computerScore++;
                    return ("You lose! Rock crushes Scissors")
            }
            if (
                (playerSelection == "scissors" && computerSelection == "paper")
                ) {
                    playerScore++;
                    return ("You win! Scissors cuts Paper")
            }
            if (
                (playerSelection == "paper" && computerSelection == "rock")
                ) {
                    playerScore++;
                    return ("You win! Paper covers Rock")
            }
            if (
                (playerSelection == "rock" && computerSelection == "lizard")
                ) {
                    playerScore++;
                    return ("You win! Rock crushes Lizard")
            }
            if (
                (playerSelection == "lizard" && computerSelection == "spock")
                ) {
                    playerScore++;
                    return ("You win! Lizard poisons Spock")
            }
            if (
                (playerSelection == "spock" && computerSelection == "scissors")
                ) {
                    playerScore++;
                    return ("You win! Spock smashes Scissors")
            }
            if (
                (playerSelection == "scissors" && computerSelection == "lizard")
                ) {
                    playerScore++;
                    return ("You win! Scissors decapitates Lizard")
            }
            if (
                (playerSelection == "lizard" && computerSelection == "paper")
                ) {
                    playerScore++;
                    return ("You win! Lizard eats Paper")
            }
            if (
                (playerSelection == "paper" && computerSelection == "spock")
                ) {
                    playerScore++;
                    return ("You win! Paper disproves Spock")
            }
            if (
                (playerSelection == "spock" && computerSelection == "rock")
                ) {
                    playerScore++;
                    return ("You win! Spock vaporizes Rock")
            }
            if (
                (playerSelection == "rock" && computerSelection == "scissors")
                ) {
                    playerScore++;
                    return ("You win! Rock crushes Scissors")
            }
            if (
                (playerSelection == "rock" && computerSelection == "rock") ||
                (playerSelection == "paper" && computerSelection == "paper") ||
                (playerSelection == "scissors" && computerSelection == "scissors") ||
                (playerSelection == "lizard" && computerSelection == "lizard") ||
                (playerSelection == "spock" && computerSelection == "spock")) {
                    return ("It's a tie!")
            }
        }

        rockbtn.addEventListener("click", () => {
            const playerSelection = "rock";
            const computerSelection = getComputerChoice();
            console.log("Player Selected:", playerSelection)
            console.log("Computer Selected:", computerSelection)
            console.log(playRound(playerSelection, computerSelection));
            console.log("Button works");
        })

        paperbtn.addEventListener("click", () => {
            const playerSelection = "paper";
            const computerSelection = getComputerChoice();
            console.log("Player Selected:", playerSelection);
            console.log("Computer Selected:", computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            console.log("Button works");
        })

        scissorsbtn.addEventListener("click", () => {
            const playerSelection = "scissors";
            const computerSelection = getComputerChoice();
            console.log("Player Selected:", playerSelection);
            console.log("Computer Selected:", computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            console.log("Button works");
        })

        lizardbtn.addEventListener("click", () => {
            const playerSelection = "lizard";
            const computerSelection = getComputerChoice();
            console.log("Player Selected:", playerSelection);
            console.log("Computer Selected:", computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            console.log("Button works");
        })

        spockbtn.addEventListener("click", () => {
            const playerSelection = "spock";
            const computerSelection = getComputerChoice();
            console.log("Player Selected:", playerSelection);
            console.log("Computer Selected:", computerSelection);
            console.log(playRound(playerSelection, computerSelection));
            console.log("Button works");
        })

        console.log("Player Score:", playerScore)
        console.log("Computer Score:", computerScore)
//    }
//    if (playerScore > computerScore) {
//        alert ("You Win! Congrats!")
//    }
//    if (computerScore > playerScore) {
//        alert ("You Lose! Sorry!")
//    }
//}

//playGame();