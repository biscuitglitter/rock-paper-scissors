"use strict";

const computerSelectionDisplay = document.getElementById("computer_selection");
const userSelectionDisplay = document.getElementById("user-selection");
const userNameDisplay = document.getElementById("username");
const computerNameDisplay = document.getElementById("computer_name")
const possibleChoices = document.querySelectorAll(".btn");
const scoresDisplay = document.getElementById("displaymessage");


let choices = ['rock', 'paper', 'scissors'];

let userSelection
let computerSelection
let userName

function getName() {
  let userName = prompt("enter your name: ");
  userNameDisplay.innerHTML = userName;
  computerNameDisplay.innerHTML = "robert";
}


function computerPlay() {
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  computerSelectionDisplay.innerHTML = computerSelection
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userSelection = e.target.id
  userSelectionDisplay.innerHTML = userSelection
  computerPlay();
  playRound();
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
  return result;
}

console.log(playRound());