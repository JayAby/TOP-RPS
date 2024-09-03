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

// // This function gets the player choice and makes it case-insensitive
// function getPlayerChoice() {
//     while (true) {
//         let userChoice = prompt("Make a choice: Rock, Paper, or Scissors").toLowerCase(); // Convert to lowercase
//         if (options.includes(userChoice)) {
//             return userChoice;
//         } else {
//             window.alert("Invalid Choice! Try again.");
//         }
//     }
// }

// Game


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
        resetGame();
    } else if(computerScore === 5){
        updateResult(`Computer Wins the Game`);
        resetGame();
    }

}

// Function to reset the game when someone wins
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

// Function to update the message results
function updateResult(message){
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = message;
}



// Adding Ui, using DOM manipulations
// Addign the container for the buttons
const container = document.querySelector("body");
const div_one = document.createElement("div");
div_one.id = "container";
// div_one.style.border = "4px solid black";
// Creating and Adding the rock button to the container
const rock_button = document.createElement("button");
rock_button.textContent = "Rock";
// 
const paper_button = document.createElement("button");
paper_button.textContent = "Paper";
// 
const scissors_button = document.createElement("button");
scissors_button.textContent = "Scissors";

// Adding event Listeners to the buttons
rock_button.addEventListener("click", () => playGame("rock"));
paper_button.addEventListener("click", () => playGame("paper"));
scissors_button.addEventListener("click", () => playGame("scissors"));

// Adding the score and result display
const playerScoreDiv = document.createElement("div");
playerScoreDiv.id = "playerScore";
playerScoreDiv.textContent = "Player Score : 0";

const computerScoreDiv = document.createElement("div");
computerScoreDiv.id = "computerScore";
computerScoreDiv.textContent = "Computer Score : 0";

const resultDiv = document.createElement("div");
resultDiv.id = "result";
resultDiv.textContent = "Make your choice";




// Append buttons to the container
div_one.appendChild(rock_button);
div_one.appendChild(paper_button);
div_one.appendChild(scissors_button);

// Adding the containers to the body
container.appendChild(div_one);
container.appendChild(playerScoreDiv);
container.appendChild(computerScoreDiv);
container.appendChild(resultDiv);

