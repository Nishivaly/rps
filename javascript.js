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

    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                console.log('You lose the round!');
                currentComputerScore++;
                computerScore.textContent = `Computer score: ${currentComputerScore}`;
            } else if (computerChoice == 'scissors') {
                console.log('You win the round!');
                currentPlayerScore++;
                playerScore.textContent = `Player score: ${currentPlayerScore}`;
            } else {
                console.log('You tie the round!');
            }
            break;

        case 'paper':
            if (computerChoice == 'scissors') {
                console.log('You lose the round!');
                currentComputerScore++;
                computerScore.textContent = `Computer score: ${currentComputerScore}`;
            } else if (computerChoice == 'rock') {
                console.log('You win the round!');
                currentPlayerScore++;
                playerScore.textContent = `Player score: ${currentPlayerScore}`;
            } else {
                console.log('You tie the round!');
            }
            break;

        case 'scissors':
            if (computerChoice == 'rock') {
                console.log('You lose the round!');
                currentComputerScore++;
                computerScore.textContent = `Computer score: ${currentComputerScore}`;
            } else if (computerChoice == 'paper') {
                console.log('You win the round!');
                currentPlayerScore++;
                playerScore.textContent = `Player score: ${currentPlayerScore}`;
            } else {
                console.log('You tie the round!');
            }
            break;
    }

    if (parseInt(playerScore.textContent.replace(/[^\d]/g, ""), 10) === 5) {
        alert('you win');
        playerScore.textContent = 'Player score: 0';
        computerScore.textContent = 'Computer score: 0';
    } else if (parseInt(computerScore.textContent.replace(/[^\d]/g, ""), 10) === 5) {
        alert('you lose');
        playerScore.textContent = 'Player score: 0';
        computerScore.textContent = 'Computer score: 0';
    }
}