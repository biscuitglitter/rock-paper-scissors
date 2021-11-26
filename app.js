"use strict";

var uScore = 0;
var cScore = 0;
function userPlay() {
  var userSelection = prompt("Please enter your choice");
  return userSelection;
}

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userSelection, computerSelection) {
  if (userSelection.toLowerCase() === "rock" && computerSelection === "paper") {
    result = "Paper beats rock! You lose...";
    cScore++;
  } else if (userSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    result = "Rock beats scissors! You win!";
    uScore++;
  } else if (userSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
    result = "Scissors beats paper! You lose...";
    cScore++;
  } else if (userSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    result = "Paper beats rock! You win!";
    uScore++;
  } else if (userSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    result = "Paper beats scissors! You win!";
    uScore++;
  } else if (userSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
    result = "Rock beats scissors! You lose...";
    cScore++;
  } else if (userSelection.toLowerCase() === computerSelection) {
    result = "It's a tie!";
  } else {
    result = "Please enter a valid choice.";
  }
  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(userPlay(), computerPlay()));
  }
}

function showScore() {
  if (cScore > uScore) {
    result = `"Computer wins with ${cScore} vs ${uScore}."`;
  } else {
    result = `"You win with ${uScore} against ${cScore}."`;
  }
  return result;
}

console.log(game());
console.log(showScore());