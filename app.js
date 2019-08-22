let computerScore, playerScore;
let resultsDisplaySection = document.getElementById("results");

let options = ["rock", "paper", "scissors"];
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function resultMessage(result, playerSelection, computerSelection) {
  if (result == "win") {
    return `
    You won this round!
    You drew: ${playerSelection}.
    Computer drew: ${computerSelection}.
    `;
  } else if (result == "loss") {
    return `
    You lost this round!
    You drew: ${playerSelection}.
    Computer drew: ${computerSelection}.
    `;
  } else {
    return `
    That round was a draw.
    You drew: ${playerSelection}.
    Computer drew: ${computerSelection}.
    `;
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  console.log(`${playerSelection} and ${computerSelection}`);
  if (playerSelection == computerSelection) {
    return (resultsDisplaySection.innerHTML = resultMessage(
      "tie",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return (resultsDisplaySection.innerHTML = resultMessage(
      "loss",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return (resultsDisplaySection.innerHTML = resultMessage(
      "win",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return (resultsDisplaySection.innerHTML = resultMessage(
      "loss",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return (resultsDisplaySection.innerHTML = resultMessage(
      "win",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return (resultsDisplaySection.innerHTML = resultMessage(
      "loss",
      playerSelection,
      computerSelection
    ));
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return (resultsDisplaySection.innerHTML = resultMessage(
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

let playerSelectionButtons = document.querySelectorAll("button");

playerSelectionButtons.forEach(function(button) {
  button.addEventListener("click", function(el) {
    playRound(el.target.innerHTML.toLowerCase());
  });
});
