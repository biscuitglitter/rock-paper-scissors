"use strict";

const computerSelectionDisplay = document.getElementById("computer-selection");
const userSelectionDisplay = document.getElementById("user-selection");
const userNameDisplay = document.getElementById("username");
const possibleChoices = document.querySelectorAll("button");
const u_scoreDisplay = document.getElementById("user_score");
const c_scoreDisplay = document.getElementById("computer_score");

let uScore = 0;
let cScore = 0;

let userSelection
let computerSelection

function userName() {
  var userName = prompt("Please enter your name:");
  return userName;
}

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];  
  computerSelectionDisplay.innerHTML = computerSelection 
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userSelection = e.target.id
  userSelectionDisplay.innerHTML = userSelection
  computerPlay();
}))

function playRound(userSelection, computerSelection) {
  if (userSelection === "rock" && computerSelection === "paper") {
    result = "Paper beats rock! You lose...";
    cScore++;
  } else if (userSelection === "rock" && computerSelection === "scissors") {
    result = "Rock beats scissors! You win!";
    uScore++;
  } else if (userSelection === "paper" && computerSelection === "scissors") {
    result = "Scissors beats paper! You lose...";
    cScore++;
  } else if (userSelection === "paper" && computerSelection === "rock") {
    result = "Paper beats rock! You win!";
    uScore++;
  } else if (userSelection === "scissors" && computerSelection === "paper") {
    result = "Paper beats scissors! You win!";
    uScore++;
  } else if (userSelection === "scissors" && computerSelection === "rock") {
    result = "Rock beats scissors! You lose...";
    cScore++;
  } else if (userSelection === computerSelection) {
    result = "It's a tie!";
  } else {
    result = "Please enter a valid choice.";
  }
  scoreDisplay.innerHTML = score
}



