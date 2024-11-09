let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  updateScores(result);
  displayResult(playerChoice, computerChoice, result);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  }
  return "computer";
}

function updateScores(result) {
  if (result === "player") {
    playerScore++;
  } else if (result === "computer") {
    computerScore++;
  }
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function displayResult(playerChoice, computerChoice, result) {
  const resultDiv = document.getElementById("result");

  if (result === "draw") {
    resultDiv.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (result === "player") {
    resultDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultDiv.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
