const options = ["rock", "paper", "scissors"];

const body = document.querySelector("body");
const container = document.createElement("div");
const rock = document.querySelector(".btn1");
const paper = document.querySelector(".btn2");
const scissors = document.querySelector(".btn3");

const playerTitle = document.createElement("div");
const computerTitle = document.createElement("div");
const playerCounter = document.createElement("div");
const computerCounter = document.createElement("div");

playerTitle.textContent = "Player";
computerTitle.textContent = "Computer";
playerCounter.textContent = 0;
computerCounter.textContent = 0;

body.appendChild(playerTitle);
body.appendChild(playerCounter);
body.appendChild(computerTitle);
body.appendChild(computerCounter);
body.appendChild(container);

function getComputerChoice() {
  const item = options[Math.floor(Math.random() * options.length)];
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    return "ROOOOOOCK";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    const counterNumber = parseInt(computerCounter.textContent);
    computerCounter.textContent = 1 + counterNumber;
    return "You lose! Paper beats rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    const counterNumber = parseInt(playerCounter.textContent);
    playerCounter.textContent = 1 + counterNumber;
    return "You win! Rock beats scissors";
  }

  if (playerSelection == "paper" && computerSelection == "paper") {
    return "PAAPEEEEER";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    const counterNumber = parseInt(computerCounter.textContent);
    computerCounter.textContent = 1 + counterNumber;
    return "You lose! Scissors beats paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    const counterNumber = parseInt(playerCounter.textContent);
    playerCounter.textContent = 1 + counterNumber;
    return "You win! Paper beats rock";
  }

  if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "SCISSOOOOOOORS";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    const counterNumber = parseInt(computerCounter.textContent);
    computerCounter.textContent = 1 + counterNumber;
    return "You lose! Rock beats scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    const counterNumber = parseInt(playerCounter.textContent);
    playerCounter.textContent = 1 + counterNumber;
    return "You win! Scissors beats paper";
  }
}

function game() {
  rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("rock", computerSelection);
    container.textContent = result;
    if (playerCounter.textContent == 5) {
      container.textContent = "THE WINNER IS YOU";
    } else if (computerCounter.textContent == 5) {
      container.textContent = "THE WINNER IS THE COMPUTER";
    }
  });

  paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("paper", computerSelection);
    container.textContent = result;
    if (playerCounter.textContent == 5) {
      container.textContent = "THE WINNER IS YOU";
    } else if (computerCounter.textContent == 5) {
      container.textContent = "THE WINNER IS THE COMPUTER";
    }
  });

  scissors.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("scissors", computerSelection);
    container.textContent = result;
    if (playerCounter.textContent == 5) {
      container.textContent = "THE WINNER IS YOU";
    } else if (computerCounter.textContent == 5) {
      container.textContent = "THE WINNER IS THE COMPUTER";
    }
  });
}

(function () {
  game();
})();
