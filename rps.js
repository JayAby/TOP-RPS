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
    let userChoice = prompt("Make a choice: Rock, Paper or Scissors");
    if(userChoice === "Rock"){
        return userChoice;
    }else if(userChoice === "Paper"){
        return userChoice;
    }else if(userChoice === "Scissors"){
        return userChoice;
    }else{
        console.log("Invalid Choice! Try again.")
    }
}

// Game
function playGame(computerChoice , playerChoice){
    if(computerChoice == playerChoice){
        console.log("It's a tie");
    }else if(computerChoice == "Rock" && playerChoice == "Scissors"){
        console.log("Computer Wins, Rock beats Scissors");
    }else if(computerChoice == "Scissors" && playerChoice == "Paper"){
        console.log("Computer Wins!, Scissors beats Paper");
    }else if(computerChoice == "Paper" && playerChoice == "Rock"){
        console.log("Computer Wins, Paper beats Rock");
    }else if(playerChoice == "Rock" && computerChoice == "Scissors"){
        console.log("Player Wins, Rock beats Scissors");
    }else if(playerChoice == "Scissors" && computerChoice == "Paper"){
        console.log("Player Wins!, Scissors beats Paper");
    }else if(playerChoice == "Paper" && computerChoice == "Rock"){
        console.log("Computer Wins, Paper beats Rock");
    }else{
        console.log("Computer chose " + computerChoice +", You chose " + playerChoice);
    }
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

playGame(computerChoice,playerChoice);
// console.log(computerChoice);
// console.log(playerChoice);



// ---------------------------------------------
// case_one = computerChoice.toUpperCase();
// case_two = computerChoice.toLowerCase();
// case_three = playerChoice.toUpperCase();
// case_four = playerChoice.toLowerCase();