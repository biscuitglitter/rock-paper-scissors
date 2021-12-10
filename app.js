"use strict";

const computerchoicedisplay = document.getElementById("computerselection")
const playerchoicedisplay = document.getElementById("playerselection")
const possiblechoices = document.querySelectorAll(".btn")
const usernamedisplay = document.getElementById("username")
const gameresultdisplay = document.getElementById("resultdisplay")
const playerscoredisplay = document.getElementById("playerscore")
const computerscoredisplay = document.getElementById("computerscore")

let playerchoice 
let computerchoice 

let pscore = 0;
let cscore = 0;

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  computerchoice = choices[Math.floor(Math.random() * choices.length)];  
  computerchoicedisplay.innerHTML = computerchoice 
}
 
  possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener("click", (e) => {
    playerchoice = e.target.id
    playerchoicedisplay.innerHTML = playerchoice
    computerPlay();
    game();
    playerscoredisplay.innerHTML = pscore;
    computerscoredisplay.innerHTML = cscore;

  }))

const game = () => {
  switch (playerchoice + computerchoice) {
  case "scissorspaper":
  case "rockscissors":
  case "paperrock":
    gameresultdisplay.innerHTML = "you win";
  pscore++;
    break
  case "paperscissors":
  case "scissorsrock":
  case "rockpaper":
    gameresultdisplay.innerHTML = "you lose";
  cscore++;
    break
  case "paperpaper":
  case "rockrock":
  case "scissorscissors":
    gameresultdisplay.innerHTML = "it's a draw";
    break
  }
}

function username() {
  var username = prompt("Please enter your name:");
  usernamedisplay.innerHTML = username;
  typer();
}

let i = 0
let text = "robert"
let speed = 160

function typer() {
  if (i < text.length) {
    document.getElementById("computername").innerHTML += text.charAt(i);
    i++;
    setTimeout(typer, speed);
  }
}



