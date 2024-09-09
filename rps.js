// This is a rps game
// Player has to enter either rock, paper or scissors
// Computer has to choose randomly between rock, paper or scissors
// If playerChoice is equal to computerChoice, no point, it's a tie
// Rock beats scissors
// Scissors beats paper
// Paper beats rock

const options = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

// This function generates a random choice for the computer
function getComputerChoice() {
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    if (computerChoice === "rock" && playerChoice === "scissors") {
        computerScore++;
        updateResult(`Computer gets a point, Rock beats Scissors`);
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        computerScore++;
        updateResult(`Computer gets a point!, Scissors beats Paper`);
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        computerScore++;
        updateResult(`Computer gets a point, Paper beats Rock`);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        updateResult(`Player gets a point, Rock beats Scissors`);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        updateResult(`Player gets a point!, Scissors beats Paper`);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        updateResult(`Player gets a point, Paper beats Rock`);
    } else {
        updateResult(`It's a tie, Computer chose ${computerChoice}, You chose ${playerChoice}`);
    }

    updateScore();
}

// Function to update score
function updateScore(){
    const playerScoreDiv = document.getElementById("playerScore");
    const computerScoreDiv = document.getElementById("computerScore");

    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    

    if(playerScore === 5){
        updateResult(`Player Wins the Game`);
        document.getElementById("resetBtn").style.display = "block";
    } else if(computerScore === 5){
        updateResult(`Computer Wins the Game`);
        document.getElementById("resetBtn").style.display = "block";
    }

}

// Function to reset the game when someone wins
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    updateResult("Make your choice");
    document.getElementById("resetBtn").style.display = "none";
}

// Function to update the message results
function updateResult(message){
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
}

// Adding Ui, using Javascript DOM manipulations
window.onload = function(){
    // Creating button containers using flexbox
    const container = document.createElement("div");
    container.id = "container";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.gap = "20px";
    container.style.marginTop = "20px";
    document.body.appendChild(container);

    // Creating the RPS buttons with images
    const rockButton = document.createElement("button");
    const rockImage = document.createElement("img");
    rockImage.src = "./Images/rock.png";
    rockImage.style.height = "50px";
    rockImage.style.width = "50px";
    rockButton.appendChild(rockImage);
    container.appendChild(rockButton);

    const paperButton = document.createElement("button");
    const paperImage = document.createElement("img");
    paperImage.src = "./Images/paper.png";
    paperImage.style.height = "50px";
    paperImage.style.width = "50px";
    paperButton.appendChild(paperImage);
    container.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    const scissorsImage = document.createElement("img");
    scissorsImage.src = "./Images/scissors.png";
    scissorsImage.style.height = "50px";
    scissorsImage.style.width = "50px";
    scissorsButton.appendChild(scissorsImage);
    container.appendChild(scissorsButton);

    // Adding event Listeners to the buttons
    rockButton.addEventListener("click", () => playGame("rock"));
    paperButton.addEventListener("click", () => playGame("paper"));
    scissorsButton.addEventListener("click", () => playGame("scissors"))

    // Creating Scores and Result Display
    const scoreContainer = document.createElement("div");
    scoreContainer.style.textAlign = "center";
    scoreContainer.style.marginTop = "20px";
    document.body.appendChild(scoreContainer);

    const playerScoreDiv = document.createElement("div");
    playerScoreDiv.id = "playerScore";
    playerScoreDiv.textContent = "Player Score: 0";
    document.body.appendChild(playerScoreDiv);

    const computerScoreDiv = document.createElement("div");
    computerScoreDiv.id = "computerScore";
    computerScoreDiv.textContent = "Computer Score: 0";
    document.body.appendChild(computerScoreDiv);

    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    resultDiv.textContent = "Make your choice";
    resultDiv.style.fontSize = "20px";
    resultDiv.style.marginTop = "10px";
    scoreContainer.appendChild(resultDiv);

    // Creating a reset button that shows up when the game is won
    const resetBtn = document.createElement("button");
    resetBtn.id = "resetBtn";
    resetBtn.textContent = "Reset Game";
    resetBtn.style.marginTop = "20px";
    resetBtn.style.padding = "10px";
    resetBtn.style.backgroundColor = "grey";
    resetBtn.style.color = "white";
    resetBtn.style.border = "none";
    resetBtn.style.borderRadius = "5px";
    resetBtn.style.cursor = "pointer";
    resetBtn.style.display = "none";
    document.body.appendChild(resetBtn);

    // Event listener for the reset button
    resetBtn.addEventListener("click", () => resetGame())

}

;

