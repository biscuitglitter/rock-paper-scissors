"use strict";

const computerSelectionDisplay = document.getElementById("computer_selection");
const userSelectionDisplay = document.getElementById("user-selection");
const userNameDisplay = document.getElementById("username");
const computerNameDisplay = document.getElementById("computer_name");
const possibleChoices = document.querySelectorAll(".btn");
const displayResult = document.getElementById("user_score");

let userSelection
let computerSelection
let userName
let choices



function getName() {
  let userName = prompt("enter your name: ");
  userNameDisplay.innerHTML = userName;
  computerNameDisplay.innerHTML = "robert";
}


function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  computerSelectionDisplay.innerHTML = computerSelection
}
computerPlay()

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userSelection = e.target.id
  userSelectionDisplay.innerHTML = userSelection
  computerPlay();
  playRound();

}))

const playRound = () => {
  let computerSelection = computerPlay();
  switch (userSelection + computerSelection) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      document.getElementById("user_score").innerHTML = "you win";
      break
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      document.getElementById("user_score").innerHTML = "you lose";
      break
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      document.getElementById("user_score").innerHTML = "it's a tie";
      break
  }
}
