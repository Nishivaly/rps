// playGame();

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < + 5; i++) {
//         const playerChoice = getplayerChoice();
//         const computerChoice = getComputerChoice();
//         [humanScore, computerScore] = playRound(playerChoice, computerChoice, humanScore, computerScore);
//         console.log(`Player score: ${humanScore} - Computer score: ${computerScore}`);
//     }
//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (humanScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("You tie the game!");
//     }
// }

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
    let currentPlayerScore = parseInt(playerScore.textContent);

    let computerScore = document.querySelector('#computer-score')
    let currentComputerScore = parseInt(computerScore.textContent);

    switch (playerChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose the round!");
                currentComputerScore++;
                computerScore.textContent = currentComputerScore;
            } else if (computerChoice == "scissors") {
                console.log("You win the round!");
                currentPlayerScore++;
                playerScore.textContent = currentPlayerScore;
            } else {
                console.log("You tie the round!");
            }
            break;

        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lose the round!");
                currentComputerScore++;
                computerScore.textContent = currentComputerScore;
            } else if (computerChoice == "rock") {
                console.log("You win the round!");
                currentPlayerScore++;
                playerScore.textContent = currentPlayerScore;
            } else {
                console.log("You tie the round!");
            }
            break;

        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose the round!");
                currentComputerScore++;
                computerScore.textContent = currentComputerScore;
            } else if (computerChoice == "paper") {
                console.log("You win the round!");
                currentPlayerScore++;
                playerScore.textContent = currentPlayerScore;
            } else {
                console.log("You tie the round!");
            }
            break;
    }
    // return [humanScore, computerScore];
}