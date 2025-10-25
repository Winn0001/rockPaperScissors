const playBtn = document.querySelector(".playBtn")
const startScreen = document.querySelector(".start-screen")

playBtn.addEventListener('click', displayChoices)

function displayChoices() {
    startScreen.remove()

    const divForChoices = document.createElement('div')
    document.body.appendChild(divForChoices)

    const rock = document.createElement('button')
    rock.textContent = 'Rock'
    divForChoices.appendChild(rock)

    const paper = document.createElement('button')
    paper.textContent = 'Paper'
    divForChoices.appendChild(paper)

    const scissors = document.createElement('button')
    scissors.textContent = 'Scissors'
    divForChoices.appendChild(scissors)
}


function getComputerChoice() {
        randomNumber = Math.floor(Math.random() * 3);
        return randomNumber;
      }

      function getHumanChoice() {
        let humanChoice = prompt("Rock, Paper or Scissors?", "");
        humanChoice = humanChoice.toLowerCase();
        switch (humanChoice) {
          case "rock":
            return 0;
            break;
          case "paper":
            return 1;
            break;
          case "scissors":
            return 2;
            break;
        }
      }

      let humanScore = 0;
      let computerScore = 0;

      function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
          console.log("TIEE");
          console.log(
            "Your score:",
            ++humanScore,
            "Computer score",
            ++computerScore
          );
        } else if (
          (humanChoice === 1 && computerChoice === 0) ||
          (humanChoice === 2 && computerChoice === 1) ||
          (humanChoice === 0 && computerChoice === 2)
        ) {
          console.log("YOU WIN!");
          console.log(
            "Your score",
            ++humanScore,
            "COmputer score",
            computerScore
          );
        } else {
          console.log("YOU LOSE!");
          console.log(
            "Your score",
            humanScore,
            "Computer score",
            ++computerScore
          );
        }
      }

      function playGame() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
      }