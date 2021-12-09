"use strict";

const computerchoicedisplay = document.getElementById("computer-selection");
const playerchoicedisplay = document.getElementById("user-selection");
const possiblechoices = document.querySelectorAll(".btn");
const usernamedisplay = document.getElementById("username");
const playerscoredisplay = document.getElementById("user_score");
const computerscoredisplay = document.getElementById("computer_score");

  
  let playerchoice
  let computerchoice
  
  function username() {
    var username = prompt("Please enter your name:");
    return username;
  }
  
  function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerchoice = choices[Math.floor(Math.random() * choices.length)];  
    computerchoicedisplay.innerHTML = computerchoice 
  }
  
  possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener("click", (e) => {
    playerchoice = e.target.id
    playerchoicedisplay.innerHTML = playerchoice
    computerPlay();
    game();
  }))

function game (playerchoice) {
  const computerchoice = computerPlay();

  switch (playerchoice + computerchoice) {
  case "scissorspaper":
  case "rockscissors":
  case "paperrock":
      gameresultdisplay.innerHTML = "you win"
    break
  case "paperscissors":
  case "scissorsrock":
  case "rockpaper":
      gameresultdisplay.innerHTML = "you lose"
  case "paperpaper":
  case "rockrock":
  case "scissorscissors":
      gameresultdisplay.innerHTML = "it's a draw"
  }
}
console.log(game());


function username() {
  var username = prompt("Please enter your name:");
  usernamedisplay.innerHTML = username;
  document.getElementById("computer_name").innerHTML = "robert";
  game();
}