"use strict";

const computerSelectionDisplay = document.getElementById("computer_selection");
const userSelectionDisplay = document.getElementById("user-selection");
const userNameDisplay = document.getElementById("username");
const computerNameDisplay = document.getElementById("computer_name")
const possibleChoices = document.querySelectorAll(".btn");



let choices = ['rock', 'paper', 'scissors'];

let userSelection
let computerSelection
let userName
let result


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
    result = "paper beats rock! you lose";
  } if (userSelection === "rock" && computerSelection === "scissors") {
    result = "rock beats scissors! you win!";
  } if (userSelection === "paper" && computerSelection === "scissors") {
    result = "scissors beats paper! you lose";
  } if (userSelection === "paper" && computerSelection === "rock") {
    result = "paper beats rock! you win!";
  } if (userSelection === "scissors" && computerSelection === "paper") {
    result = "paper beats scissors! you win!";
  } if (userSelection === "scissors" && computerSelection === "rock") {
    result = "rock beats scissors! you lose";
  }
  result = document.querySelector("#displayMessage").innerText
}
