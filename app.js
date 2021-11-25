"use strict";
function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
    result = "Paper beats rock! You lose...";
  } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    result = "Rock beats scissors! You win!";
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
    result = "Scissors beats paper! You lose...";
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    result = "Paper beats rock! You win!";
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    result = "Paper beats scissors! You win!";
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
    result = "Rock beats scissors! You lose...";
  } else {
    result = "It's a tie!";
  }
  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound("rocK", computerPlay()));
  }
}
console.log(game());
