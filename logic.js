// 0 - rock
// 1 - paper
// 2 - scissors

/* Randomly generates number between 0-2 and depending on it return game choice in String format */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    }
    else if (choice === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function displayState(result) {
    switch (result) {
        case 0:
            node = document.createTextNode("Player win.");
            break;
        case 1:
            node = document.createTextNode("Tie!");
            break;
        case 2:
            node = document.createTextNode("Computer win.");
            break;
    }
    roundResult.innerHTML = '';
    roundResult.appendChild(node);
}

function displayScore() {
    matchResult.innerHTML = '';
    let userScoreElement = document.createElement('p');
    userScoreElement.textContent = "Player: " + userScore;
    let computerScoreElement = document.createElement('p');
    computerScoreElement.textContent = "Computer: " + computerScore;
    matchResult.appendChild(userScoreElement);
    matchResult.appendChild(computerScoreElement);
}

function checkStateOfGame() {
    if (userScore >= 5) {
        let endGame = document.createElement('p');
        document.body.style.backgroundColor = "Green";
        matchResult.style.backgroundColor = '';
        endGame.textContent = "You win!";
        matchResult.appendChild(endGame);
        document.addEventListener('click', function () {
            location.reload();
        });
    } else if (computerScore >= 5) {
        let endGame = document.createElement('p');
        document.body.style.backgroundColor = "Red";
        matchResult.style.backgroundColor = '';
        endGame.textContent = "Computer win!";
        matchResult.appendChild(endGame);
        document.addEventListener('click', function () {
            location.reload();
        });
    }
}

function addReloadListener() {
    document.addEventListener('click', () => {
        location.reload();
    });
}


/* compare choices of player and computer, return 0 - player win, 1 - draw, 2 - computer win */
function playRound(buttonId) {
    let computerChoice = getComputerChoice();
    let playerChoice = buttonId;
    let result; // display state 0, 1, 2
    console.log(computerChoice + " " + playerChoice);
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            result = 1;
        }
        else if (computerChoice === 'Paper') {
            result = 2;
            computerScore++;
        }
        else {
            result = 0;
            userScore++;
        }
    }
    else if (playerChoice === 'Paper') {
        if (computerChoice === 'Paper') {
            result = 1;
        }
        else if (computerChoice === 'Scissors') {
            result = 2;
            computerScore++;
        }
        else {
            result = 0;
            userScore++;
        }
    }
    else { // Scissors
        if (computerChoice === 'Scissors') {
            result = 1;
        }
        else if (computerChoice === 'Rock') {
            result = 2;
            computerScore++;
        }
        else {
            result = 0;
            userScore++;
        }
    }

    console.log(result);
    displayState(result);
    displayScore();

    checkStateOfGame();
}


/* Main Logic goes here */

let userScore = 0;
let computerScore = 0;
let flag = false;
const roundResult = document.querySelector("#round-result");
const matchResult = document.querySelector("#match-result");
let node;
const choiceButtons = document.querySelectorAll('.choice');

choiceButtons.forEach(button => button.addEventListener('click',
    () => playRound(button.id)));

if (flag) {
    document.addEventListener('click', () => {
        location.reload();
    });
}
/* Main Logic ends here */

