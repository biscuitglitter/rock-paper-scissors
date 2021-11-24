function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "scissors") {
    result = "You win! Rock beats scissors!";
  } else if (computerSelection === "paper") {
    result = "You lose! Paper beats rock!";
  } else {
    result = "It's a tie... Try again!";
  }
  return result;
}

computerSelection = computerPlay().toLowerCase();
playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));