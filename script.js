let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const restartButton = document.getElementById('restart');

const resultDiv = document.getElementById('result');
const scoreP = document.getElementById('score');
const winnerP = document.getElementById('winnerP');

restartButton.addEventListener('click', restart);

const playerButtons = [rockButton, paperButton, scissorsButton];
playerButtons.forEach((button) => {
    button.addEventListener('click', function () {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    });
});

function getComputerChoice() {
    let computerChoice = '';
    let number = Math.floor(Math.random() * 3) + 1
    switch (number) {
        case 1: computerChoice = 'rock'; break;
        case 2: computerChoice = 'paper'; break;
        case 3: computerChoice = 'scissors'; break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        alert('The game is over.');
        restart();
        return;
    }
    let result = '';
    if (playerSelection === computerSelection) {
        result = 'Draw. There is no winner.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        result = `You win, ${playerSelection} beats ${computerSelection}!`
        playerScore++;
    } else {
        result = `You lose, ${computerSelection} beats ${playerSelection}!`
        computerScore++;
    }
    const pResult = document.createElement('p');
    pResult.textContent = result;
    resultDiv.appendChild(pResult);
    this.updateScore();
    if (playerScore == 5 ) {
        displayWinner('you');
    } else if (computerScore == 5) {
        displayWinner('computer');
    }
}

function displayWinner(winner) {
    winnerP.textContent = `The winner is: ${winner}!`;
}

function updateScore() {
    scoreP.textContent = `Current score: 
                    Player: ${playerScore}
                    Computer: ${computerScore}`;
}

function restart() {
    location.reload();
}