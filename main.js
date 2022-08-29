const winners = [];
const choices = ["rock", "paper", "scissors"];

function restart() {
  winners = [];
  document.querySelector(".playerScore").textContent = "Score: 0";
  document.querySelector(".computerScore").textContent = "Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
  document.querySelector(".winner").textContent = "";
}

function startGame() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      if (button.id) {
        playRound(button.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerSelection = computerChoice();
  const win = winnerCheck(playerChoice, computerSelection);
  winners.push(win);
  countWins();
  displayRound(playerChoice, computerSelection, win);
  wins = checkWins();
  if (wins == 5) {
    displayFinish();
  }
  //showRound(playerSelection, computerSelection, win, round);
}

function displayFinish() {
  let playerWins = winners.filter((winner) => winner == "PLAYER").length;
  if (playerWins == 5) {
    document.querySelector(".winner").textContent = "You have won 5 games";
  } else {
    document.querySelector(".winner").textContent = "You have lost 5 games";
  }
  document.querySelector(".reset").getElementsByClassName.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You Chose ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `The Computer Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "PLAYER") {
    document.querySelector(".winner").textContent = "You won";
  } else if (winner == "COMPUTER") {
    document.querySelector(".winner").textContent = "You lost";
  } else {
    document.querySelector(".winner").textContent = "You tied";
  }
}

function countWins() {
  let computerWins = winners.filter((winner) => winner == "COMPUTER").length;
  let playerWins = winners.filter((winner) => winner == "PLAYER").length;
  let ties = winners.filter((winner) => winner == "TIE").length;
  document.querySelector(
    ".playerScore"
  ).textContent = `Your Score: ${playerWins}`;
  document.querySelector(
    ".computerScore"
  ).textContent = `Computer's Score: ${computerWins}`;
  document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWins() {
  let computerWins = winners.filter((winner) => winner == "COMPUTER").length;
  let playerWins = winners.filter((winner) => winner == "PLAYER").length;
  return Math.max(computerWins, playerWins);
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
  let computerWins = winners.filter((winner) => winner == "COMPUTER").length;
  let playerWins = winners.filter((winner) => winner == "PLAYER").length;
  let ties = winners.filter((winner) => winner == "TIE").length;
}

startGame();
