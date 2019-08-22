let computerScore, playerScore;
const playerPicksDisplaySection = document.getElementById("player-pick");
const computerPicksDisplaySection = document.getElementById("computer-pick");
const resultsMessageDisplaySection = document.getElementById("results-message");
const scoreDisplaySection = document.getElementById("score");
const playerSelectionButtons = document.querySelectorAll("button");

let options = ["rock", "paper", "scissors"];
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function resultMessage(result, playerSelection, computerSelection) {
  if (result == "win") {
    return `
    You won this round!
    `;
  } else if (result == "loss") {
    return `
    You lost this round!
    `;
  } else {
    return `
    That round was a draw.
    `;
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerPicksDisplaySection.innerHTML = playerSelection;
  computerPicksDisplaySection.innerHTML = computerSelection;
  if (playerSelection == computerSelection) {
    return (resultsMessageDisplaySection.innerHTML = resultMessage(
      "tie",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return (resultsMessageDisplaySection.innerHTML = resultMessage(
      "loss",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return (resultsMessageDisplaySection.innerHTML = resultMessage(
      "win",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return (resultsMessageDisplaySection.innerHTML = resultMessage(
      "loss",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return (resultsMessageDisplaySection.innerHTML = resultMessage(
      "win",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return (resultsMessageDisplaySection.innerHTML = resultMessage(
      "loss",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return (resultsMessageDisplaySection.innerHTML = resultMessage(
      "win",
      playerSelection,
      computerSelection
    ));
  }
  console.log(`Computer: ${computerScore}. Player: ${playerScore}`);
}
function game() {
  let round = 1;
  computerScore = 0;
  playerScore = 0;
  // while (round <= 5) {
  // let computerSelection = computerPlay();
  // let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
  round++;
  // }
  if (playerScore > computerScore) {
    console.log(`You won! Player: ${playerScore}. Computer: ${computerScore}.`);
  } else if (playerScore == computerScore) {
    console.log(
      `It's a tie! Player: ${playerScore}. Computer: ${computerScore}.`
    );
  } else {
    console.log(
      `You lost. Player: ${playerScore}. Computer: ${computerScore}.`
    );
  }
}

playerSelectionButtons.forEach(function(button) {
  button.addEventListener("click", function(el) {
    playRound(el.target.innerHTML.toLowerCase());
  });
});
