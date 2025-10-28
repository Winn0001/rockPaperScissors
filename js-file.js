const roundWinnerDiv = document.querySelector(".roundWinnerDiv");
const roundWinner = roundWinnerDiv.querySelector(".roundWinner");
toggleVisibility(roundWinnerDiv, "none");

const winnerDiv = document.querySelector(".winnerDiv");
const winner = winnerDiv.querySelector(".winner");
toggleVisibility(winnerDiv, "none");

const ruleMessageDiv = document.querySelector(".ruleMessageDiv");

const scores = document.querySelector(".scoresDiv");
const playerScore = scores.querySelector(".playerScore");
const computerScore = scores.querySelector(".computerScore");

const selectMessage = document.querySelector(".selectMessage");

const playerChoicesDiv = document.querySelector(".playerChoicesDiv");
const [computerChoice, playerChoice] = playerChoicesDiv.querySelectorAll(
  ".computerChoice, .playerChoice"
);
toggleVisibility(playerChoicesDiv, "none");

const choicesDiv = document.querySelector(".choicesDiv");

const playAgainDiv = document.querySelector(".playAgainDiv");
const playAgainBtn = playAgainDiv.querySelector(".playAgainBtn");
toggleVisibility(playAgainDiv, "none");

function displayWinner() {
  if (gameState.playerScore > gameState.computerScore) {
    winner.textContent = "You Win!";
  } else {
    winner.textContent = "Computer Wins!";
  }
}

function displayRoundWinner() {
  gameState.roundWinner === "Tie"
    ? (roundWinner.textContent = `${gameState.roundWinner}!`)
    : (roundWinner.textContent = `${gameState.roundWinner} won this round!`);
}

function displayScoreContent() {
  playerScore.textContent = `${gameState.playerScore}`;
  computerScore.textContent = `${gameState.computerScore}`;
}

function displayChoices() {
  playerChoice.textContent = `You picked ${gameState.playerChoice}`;
  computerChoice.textContent = `Computer picked ${gameState.computerChoice}`;
}

function resetTextContents() {
  winner.textContent = "";
  roundWinner.textContent = "";
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  playerChoice.textContent = "";
  computerChoice.textContent = "";
}

const gameState = {
  playerChoice: "",
  computerChoice: "",
  roundWinner: "",
  playerScore: 0,
  computerScore: 0,
  maxScore: 5,
  winner: "",
};

function resetGameState() {
  Object.assign(gameState, {
    playerChoice: "",
    computerChoice: "",
    roundWinner: "",
    playerScore: 0,
    computerScore: 0,
    maxScore: 5,
    winner: "",
  });
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  gameState.computerChoice = choices[Math.floor(Math.random() * 3)];
}

function handleChoices(event) {
  if (isMaxScore()) return;
  ~getComputerChoice();
  switch (true) {
    case event.target.classList.contains("rock"):
      gameState.playerChoice = "Rock";
      break;
    case event.target.classList.contains("paper"):
      gameState.playerChoice = "Paper";
      break;
    case event.target.classList.contains("scissors"):
      gameState.playerChoice = "Scissors";
      break;
  }
  compareChoices(gameState.playerChoice, gameState.computerChoice);
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameState.roundWinner = "Tie";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    gameState.roundWinner = "Player";
  } else {
    gameState.roundWinner = "Computer";
  }
  updateScores(gameState.roundWinner);
}

function updateScores(winner) {
  switch (winner) {
    case "Player":
      gameState.playerScore++;
      break;
    case "Computer":
      gameState.computerScore++;
  }
  showResult();
  checkIfEndGame();
}

function showResult() {
  displayRoundWinner();
  displayChoices();
  displayScoreContent();
}

function toggleVisibility(element, display) {
  element.style.display = display;
}

function isMaxScore() {
  return (
    gameState.playerScore === gameState.maxScore ||
    gameState.computerScore === gameState.maxScore
  );
}

function checkIfEndGame() {
  if (isMaxScore()) {
    toggleVisibility(winnerDiv, "");
    toggleVisibility(ruleMessageDiv, "none");
    toggleVisibility(playAgainDiv, "");
    displayWinner();
  }
}

choicesDiv.addEventListener("click", (e) => {
  handleChoices(e);
  toggleVisibility(selectMessage, "none");
  toggleVisibility(playerChoicesDiv, "");
  toggleVisibility(roundWinnerDiv, "");
});

playAgainBtn.addEventListener("click", (e) => {
  toggleVisibility(winnerDiv, "none");
  toggleVisibility(playAgainDiv, "none");
  toggleVisibility(ruleMessageDiv, "");
  toggleVisibility(selectMessage, "");
  resetGameState();
  resetTextContents();
  toggleVisibility(playerChoicesDiv, "none");
  toggleVisibility(roundWinnerDiv, "none");
});
