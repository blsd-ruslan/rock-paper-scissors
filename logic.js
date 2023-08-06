// 0 - rock
// 1 - paper
// 2 - scissors

/* Main Logic goes here */
let userScore = 0;
let computerScore = 0;
const symbols = ["Rock", "Paper", "Scissors"];

while (userScore < 3 && computerScore < 3) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    if (userChoice > computerChoice) {
        ++userScore;
        singleRound(0);
    }
    else if (userChoice === computerChoice) {
        singleRound(1);
    }
    else {
        ++computerScore;
        singleRound(2);
    }

    if (userChoice === 3) {
        console.log("You win the game.");
    }
    else {
        console.log("Computer win the game.");
    }
}
/* Main Logic ends here */

function getUserChoice() {
    return parseInt(prompt("Choose 0,1,2 for Rock, Paper or Scissors."));
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

/* num: 0 - player, 1 - draw, 2 - computer */
function singleRound(num) {
    if (num === 0) {
        alert("You Win the round!");
    }
    else if (num === 1) {
        alert("Draw in this round!");
    }
    else if (num === 2) {
        alert("You Lose in this round!");
    }
}
