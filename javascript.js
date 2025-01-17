const playerChoices = document.querySelector('#player-choices');

playerChoices.addEventListener('click', event => {
    if (event.target.id != 'player-choices') {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice(event);
        playRound(playerChoice, computerChoice);
    }
});

function getPlayerChoice(event) {
    console.log(event.target.id);
    switch (event.target.id) {
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper'
        case 'scissors':
            return 'scissors'
    }
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    let computerChoice = options[randomIndex];
    console.log('Computer choice is: ' + computerChoice);
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    let playerScore = document.querySelector('#player-score')
    let currentPlayerScore = parseInt(playerScore.textContent.replace(/[^\d]/g, ""), 10);

    let computerScore = document.querySelector('#computer-score')
    let currentComputerScore = parseInt(computerScore.textContent.replace(/[^\d]/g, ""), 10);

    let roundResult = document.querySelector('#round-result');

    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                roundResult.textContent = 'Computer picks paper! You lose!';
                currentComputerScore++;
                computerScore.textContent = `Computer score: ${currentComputerScore}`;
            } else if (computerChoice == 'scissors') {
                roundResult.textContent = 'Computer picks scissors! You win!';
                currentPlayerScore++;
                playerScore.textContent = `Player score: ${currentPlayerScore}`;
            } else {
                roundResult.textContent = 'You tie the round!';
            }
            break;

        case 'paper':
            if (computerChoice == 'scissors') {
                roundResult.textContent = 'Computer picks scissors! You lose!';
                currentComputerScore++;
                computerScore.textContent = `Computer score: ${currentComputerScore}`;
            } else if (computerChoice == 'rock') {
                roundResult.textContent = 'Computer picks rock! You win!';
                currentPlayerScore++;
                playerScore.textContent = `Player score: ${currentPlayerScore}`;
            } else {
                roundResult.textContent = 'You tie the round!';
            }
            break;

        case 'scissors':
            if (computerChoice == 'rock') {
                roundResult.textContent = 'Computer picks rock! You lose!';
                currentComputerScore++;
                computerScore.textContent = `Computer score: ${currentComputerScore}`;
            } else if (computerChoice == 'paper') {
                roundResult.textContent = 'Computer picks paper! You win!';
                currentPlayerScore++;
                playerScore.textContent = `Player score: ${currentPlayerScore}`;
            } else {
                roundResult.textContent = 'You tie the round!';
            }
            break;
    }

    if (parseInt(playerScore.textContent.replace(/[^\d]/g, ""), 10) === 5) {
        alert('you win');
        playerScore.textContent = 'Player score: 0';
        computerScore.textContent = 'Computer score: 0';
        roundResult.textContent = 'Make your choice!';
    } else if (parseInt(computerScore.textContent.replace(/[^\d]/g, ""), 10) === 5) {
        alert('you lose');
        playerScore.textContent = 'Player score: 0';
        computerScore.textContent = 'Computer score: 0';
        roundResult.textContent = 'Make your choice!';
    }
}