const win = []
const choices = ["rock", "paper", "scissors"];

function game() {
  for(let i = 1; i<= 5; i++)
}

function playRound() {
  const playerSelection = userChoice();
  const computerSelection = computerChoice();
  const win = winner(playerSelection, computerSelection);
  win.push(win);
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

function winner(player, com) {
    console.log(player,com)
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

function showWin(){
    console.log(win)

}
game();
