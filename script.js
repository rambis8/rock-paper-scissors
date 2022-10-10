let playerScore = 0;
let computerScore = 0;

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
    playerSelection.toLowerCase();
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
    return result;
}

function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = 
            prompt("Make your play (rock, paper, scissors):");
        if (playerSelection == null) {
            alert('You have to make a play!');
            return;
        }
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === computerScore) {
        console.log('Draw! There is no winner after 5 rounds.')
    } else if (playerScore > computerScore) {
        console.log('Congratulations, you won!')
    } else {
        console.log('You lost! Better luck next time.')
    }
}

game();