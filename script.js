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

let playerScore = 0;
let computerScore = 0;

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
        (playerSelection == "paper" && computerSelection == "lizard")
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

function updateScores() {
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);

    const playerScoreResult = document.querySelector("#score-results");

    playerScoreResult.textContent = '';

    const playerScoreResultContent = document.createElement('li');
    playerScoreResultContent.classList.add("player-score");
    playerScoreResultContent.textContent = ("Player Score:" + (playerScore));
    playerScoreResult.style.color = "darkolivegreen";

    playerScoreResult.appendChild(playerScoreResultContent);

    const computerScoreResult = document.querySelector("#score-results");

    const computerScoreResultContent = document.createElement('li');
    computerScoreResultContent.classList.add("computer-score");
    computerScoreResultContent.textContent = ("Computer Score:" + (computerScore));
    computerScoreResultContent.style.color = "darkred";

    computerScoreResult.appendChild(computerScoreResultContent);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function checkGameEnd() {
    if (playerScore === 5) {

        resetGame();

        const gameResults = document.querySelector("#game-results");
        gameResults.textContent = '';

        const gameResultsContent = document.createElement("div");
        gameResultsContent.textContent = ("You Win! Congrats!");
        gameResultsContent.style.color = "forestgreen";

        gameResults.appendChild(gameResultsContent);
    }
    if (computerScore === 5) {

        resetGame();

        const gameResults = document.querySelector("#game-results");
        gameResults.textContent = '';

        const gameResultsContent = document.createElement("div");
        gameResultsContent.textContent = ("You Lose! Sorry!");
        gameResultsContent.style.color = "crimson";

        gameResults.appendChild(gameResultsContent);
    }
}

rockbtn.addEventListener("click", () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log("Player Selected:", playerSelection);
    console.log("Computer Selected:", computerSelection);

    const gameResults = document.querySelector("#game-results");
    gameResults.textContent = '';

    const roundResults = document.querySelector("#round-results");
    roundResults.textContent = '';

    const playerResult = document.createElement("div");
    playerResult.textContent = ("You selected:" + playerSelection);
    roundResults.appendChild(playerResult);

    const computerResult = document.createElement("div");
    computerResult.textContent = ("Computer selected:" + computerSelection);
    roundResults.appendChild(computerResult);

    const roundResultsContent = document.createElement("div");
    roundResultsContent.textContent = (playRound(playerSelection,computerSelection));
    roundResults.appendChild(roundResultsContent);

    updateScores();
    checkGameEnd();
})

paperbtn.addEventListener("click", () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    console.log("Player Selected:", playerSelection);
    console.log("Computer Selected:", computerSelection);

    const gameResults = document.querySelector("#game-results");
    gameResults.textContent = '';

    const roundResults = document.querySelector("#round-results");
    roundResults.textContent = '';

    const playerResult = document.createElement("div");
    playerResult.textContent = ("You selected:" + playerSelection);
    roundResults.appendChild(playerResult);

    const computerResult = document.createElement("div");
    computerResult.textContent = ("Computer selected:" + computerSelection);
    roundResults.appendChild(computerResult);

    const roundResultsContent = document.createElement("div");
    roundResultsContent.textContent = (playRound(playerSelection,computerSelection));
    roundResults.appendChild(roundResultsContent);

    updateScores();
    checkGameEnd();
})

scissorsbtn.addEventListener("click", () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    console.log("Player Selected:", playerSelection);
    console.log("Computer Selected:", computerSelection);

    const gameResults = document.querySelector("#game-results");
    gameResults.textContent = '';

    const roundResults = document.querySelector("#round-results");
    roundResults.textContent = '';

    const playerResult = document.createElement("div");
    playerResult.textContent = ("You selected:" + playerSelection);
    roundResults.appendChild(playerResult);

    const computerResult = document.createElement("div");
    computerResult.textContent = ("Computer selected:" + computerSelection);
    roundResults.appendChild(computerResult);

    const roundResultsContent = document.createElement("div");
    roundResultsContent.textContent = (playRound(playerSelection,computerSelection));
    roundResults.appendChild(roundResultsContent);

    updateScores();
    checkGameEnd();
})

lizardbtn.addEventListener("click", () => {
    const playerSelection = "lizard";
    const computerSelection = getComputerChoice();
    console.log("Player Selected:", playerSelection);
    console.log("Computer Selected:", computerSelection);

    const gameResults = document.querySelector("#game-results");
    gameResults.textContent = '';

    const roundResults = document.querySelector("#round-results");
    roundResults.textContent = '';

    const playerResult = document.createElement("div");
    playerResult.textContent = ("You selected:" + playerSelection);
    roundResults.appendChild(playerResult);

    const computerResult = document.createElement("div");
    computerResult.textContent = ("Computer selected:" + computerSelection);
    roundResults.appendChild(computerResult);

    const roundResultsContent = document.createElement("div");
    roundResultsContent.textContent = (playRound(playerSelection,computerSelection));
    roundResults.appendChild(roundResultsContent);

    updateScores();
    checkGameEnd();
})

spockbtn.addEventListener("click", () => {
    const playerSelection = "spock";
    const computerSelection = getComputerChoice();
    console.log("Player Selected:", playerSelection);
    console.log("Computer Selected:", computerSelection);

    const gameResults = document.querySelector("#game-results");
    gameResults.textContent = '';

    const roundResults = document.querySelector("#round-results");
    roundResults.textContent = '';

    const playerResult = document.createElement("div");
    playerResult.textContent = ("You selected:" + playerSelection);
    roundResults.appendChild(playerResult);

    const computerResult = document.createElement("div");
    computerResult.textContent = ("Computer selected:" + computerSelection);
    roundResults.appendChild(computerResult);

    const roundResultsContent = document.createElement("div");
    roundResultsContent.textContent = (playRound(playerSelection,computerSelection));
    roundResults.appendChild(roundResultsContent);

    updateScores();
    checkGameEnd();
})