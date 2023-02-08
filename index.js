function getComputerChoice() {
  let randomNumber = Math.round(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function gamelogic(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    return `you win ${player} beat ${computer}`;
  } else {
    return ` you lose ${computer} beat ${player}`;
  }
}

function playRound(playerSelection, computerSelection) {
  const playerValue = playerSelection.toLowerCase();

  return gamelogic(playerSelection, computerSelection);
}

const playerSelect = "rock";
const computerSelection = getComputerChoice();

function game() {
  let round = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}
