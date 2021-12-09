"use strict";

const computerchoicedisplay = document.getElementById("computerselection");
const playerchoicedisplay = document.getElementById("playerselection");
const possiblechoices = document.querySelectorAll(".btn");
const usernamedisplay = document.getElementById("username");
const gameresultdisplay = document.getElementById("resultdisplay");

let playerchoice 
let computerchoice

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



const game = () => {
  
  switch (playerchoice + computerchoice) {
  case "scissorspaper":
  case "rockscissors":
  case "paperrock":
    h2.innerHTML  += "you win";
    break
  case "paperscissors":
  case "scissorsrock":
  case "rockpaper":
    h2.innerHTML += "you lose";
    break
  case "paperpaper":
  case "rockrock":
  case "scissorscissors":
    h2.innerHTML += "it's a draw";
      break
  }
}

function username() {
  var username = prompt("Please enter your name:");
  document.innerHTML = username;
  typer();
}

let i = 0
let text = "robert"
let speed = 240

function typer() {
  if (i < text.length) {
    document.getElementById("computername").innerHTML += text.charAt(i);
    i++;
    setTimeout(typer, speed);
  }
}



