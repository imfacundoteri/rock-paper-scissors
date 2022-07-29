const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const item = options[Math.floor(Math.random() * options.length)];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
    return "ROOOOOOCK";
  }
  if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock";
  }
  if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    return "You win! Rock beats scissors";
  }

  if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "paper"
  ) {
    return "PAAPEEEEER";
  }
  if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "scissors"
  ) {
    return "You lose! Scissors beats paper";
  }
  if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock";
  }

  if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "scissors"
  ) {
    return "SCISSOOOOOOORS";
  }
  if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "rock"
  ) {
    return "You lose! Rock beats scissors";
  }
  if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    return "You win! Scissors beats paper";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Remember to open the Console & reload");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

(function () {
  game();
})();
