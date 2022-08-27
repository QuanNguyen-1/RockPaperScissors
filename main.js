const winners = [];
const choices = ["rock", "paper", "scissors"];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  document.querySelector("button").textContent = "Play Again";
  showWin();
}

function playRound(round) {
  const playerSelection = userChoice();
  const computerSelection = computerChoice();
  const win = winnerCheck(playerSelection, computerSelection);
  winners.push(win);
  showRound(playerSelection, computerSelection, win, round);
}

function userChoice() {
  let input = prompt("Type your choice");
  while (input == null) {
    input = prompt("Type your choice");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type in either rock, paper, or scissors");
    while (input == null) {
      input = prompt("Type your choice");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

function winnerCheck(player, com) {
  //console.log(player, com);
  if (player == com) {
    return "TIE";
  } else if (
    (player == "rock" && com == "scissors") ||
    (player == "scissors" && com == "paper") ||
    (player == "paper" && com == "rock")
  ) {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}

function showWin() {
  let computerWins = winners.filter((winner) => winner == "PLAYER").length;
  let playerWins = winners.filter((winner) => winner == "COMPUTER").length;
  let ties = winners.filter((winner) => winner == "TIE").length;
  console.log("The Results:");
  console.log("The player has won", playerWins, "times");
  console.log("The computer has won", computerWins, "times");
  console.log("There have been", ties, "ties");
}

function showRound(player, computer, winner, round) {
  console.log("Round:", round);
  console.log("Computer has chosen:", computer);
  console.log("Player has chosen:", player);
  console.log("The result of this round:", winner);
}
