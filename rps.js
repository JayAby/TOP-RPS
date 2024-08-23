// This is a rps game
// Player has to enter either rock, paper or scissors
// Computer has to choose randomly between rock, paper or scissors
// If playerChoice isequal to computerChoice, no point, it's a tie
// Rock beats scissors
// Scissors beats paper
// paper beats rock

// const prompt = require('prompt-sync')();
const options = ["Rock", "Paper","Scissors"];
let computerScore = 0;
let playerScore = 0;

// This function generates a random choice for the computer
function getComputerChoice(){
    const random = options[Math.floor(Math.random()*options.length)];
    return random;
}

// This function gets the player choice
function getPlayerChoice(){
    while(true){
        let userChoice = prompt("Make a choice: Rock, Paper or Scissors");
        if(options.includes(userChoice)){
            return userChoice;
        } else{
            window.alert("Invalid Choice! Try again.")
        }
    }
}

// Game
function playGame(computerChoice , playerChoice){
    if(computerChoice == "Rock" && playerChoice == "Scissors"){
        window.alert("Computer gets a point, Rock beats Scissors");
        computerScore++;
    }else if(computerChoice == "Scissors" && playerChoice == "Paper"){
        window.alert("Computer gets a point!, Scissors beats Paper");
        computerScore++;
    }else if(computerChoice == "Paper" && playerChoice == "Rock"){
        window.alert("Computer gets a point, Paper beats Rock");
        computerScore++;
    }else if(playerChoice == "Rock" && computerChoice == "Scissors"){
        window.alert("Player gets a point, Rock beats Scissors");
        playerScore++;
    }else if(playerChoice == "Scissors" && computerChoice == "Paper"){
        window.alert("Player gets a point!, Scissors beats Paper");
        playerScore++;
    }else if(playerChoice == "Paper" && computerChoice == "Rock"){
        window.alert("Player gets a point, Paper beats Rock");
    }else{
        window.alert("It's a tie, Computer chose " + computerChoice +", You chose " + playerChoice);
    }
}

function playRound(){
    // used a while loop to check the score
    while (playerScore < 3 && computerScore < 3) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        playGame(computerChoice,playerChoice);
        window.alert("PlayerScore " + playerScore + " : " + "ComputerScore " + computerScore)
        if(playerScore === 3){
            window.alert("Player Wins");
        } else if(computerScore === 3){
            window.alert("Computer Wins");
        }
    }
}


// const computerChoice = getComputerChoice();
// const playerChoice = getPlayerChoice();

// playGame(computerChoice,playerChoice);
window.alert("It's case sensitive, so please use Rock, Paper or Scissors. Thank you")
playRound();


// console.log(computerChoice);
// console.log(playerChoice);



// ---------------------------------------------
// case_one = computerChoice.toUpperCase();
// case_two = computerChoice.toLowerCase();
// case_three = playerChoice.toUpperCase();
// case_four = playerChoice.toLowerCase();