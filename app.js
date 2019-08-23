let computerScore = 0;
let playerScore = 0;
const playerPicksDisplaySection = document.getElementById("player-pick");
const computerPicksDisplaySection = document.getElementById("computer-pick");
const resultsMessageDisplaySection = document.getElementById("results-message");
const scoreDisplaySection = document.getElementById("score");
const playerSelectionButtons = document.querySelectorAll("button");

scoreDisplaySection.innerHTML = ` ${playerScore} - ${computerScore}`;

let options = ["rock", "paper", "scissors"];
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function resultMessage(result) {
  let resultMessageText = "";
  if (result == "game over") {
    console.log("winner");
  } else if (result == "win") {
    resultMessageText = `
    You won this round!
    `;
  } else if (result == "loss") {
    resultMessageText = `
    You lost this round!
    `;
  } else {
    resultMessageText = `
    That round was a draw.
    `;
  }
  resultsMessageDisplaySection.innerHTML = `${resultMessageText}`;
}

function updateScoreboard(winner) {
  if (winner == "player") {
    playerScore++;
  } else if (winner == "computer") {
    computerScore++;
  }
  scoreDisplaySection.innerText = `${playerScore} - ${computerScore}`;
}

function checkForWinner() {
  if (playerScore == 5 || computerScore == 5) {
    declareWinner();
    // } else {
    //   resultMessage(result);
  }
}

function declareWinner() {
  let winnerName;
  if (playerScore > computerScore) {
    winnerName = `Player`;
  } else {
    winnerName = `Computer`;
  }
  resultsMessageDisplaySection.innerHTML = `Game Over. ${winnerName.toUpperCase()} wins!`;
}

function resetGame() {
  playerPicksDisplaySection.innerHTML = "";
  computerPicksDisplaySection.innerHTML = "";
  resultsMessageDisplaySection.innerHTML = "";
  computerScore = 0;
  playerScore = 0;
  updateScoreboard();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerPicksDisplaySection.innerHTML = playerSelection;
  computerPicksDisplaySection.innerHTML = computerSelection;
  if (playerSelection == "reset") {
    resetGame();
  } else if (playerSelection == computerSelection) {
    resultMessage("tie");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    updateScoreboard("computer");
    resultMessage("loss");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    updateScoreboard("player");
    resultMessage("win");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    updateScoreboard("computer");
    resultMessage("loss");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    updateScoreboard("player");
    resultMessage("win");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    updateScoreboard("computer");
    resultMessage("loss");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    updateScoreboard("player");
    resultMessage("win");
  }
  checkForWinner(playerScore, computerScore);
}
playerSelectionButtons.forEach(function(button) {
  button.addEventListener("click", function(el) {
    playRound(el.target.innerHTML.toLowerCase());
  });
});
