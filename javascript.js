let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    for (let i = 0; i < + 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Player score: ${humanScore} - Computer score: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");   
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");   
    } else {
        console.log("You tie the game!");   
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Choose rock, paper or scissors");
    while (true) {
        playerChoice = playerChoice.toLowerCase();
        switch (playerChoice) {
            case "rock":
            case "paper":
            case "scissors":
                console.log("Human choice is: " + playerChoice);
                return playerChoice;
            default:
                playerChoice = prompt("Invalid choice, try again");
                break;
        }
    }
}

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    let computerChoice = options[randomIndex];
    console.log("Computer choice is: " + computerChoice);
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose the round!");
                computerScore++;
            } else if (computerChoice == "scissors") {
                console.log("You win the round!");
                humanScore++;
            } else {
                console.log("You tie the round!");
            }
            break;

        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lose the round!");
                computerScore++;
            } else if (computerChoice == "rock") {
                console.log("You win the round!");
                humanScore++;
            } else {
                console.log("You tie the round!");
            }
            break;

        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose the round!");
                computerScore++;
            } else if (computerChoice == "paper") {
                console.log("You win the round!");
                humanScore++;
            } else {
                console.log("You tie the round!");
            }
            break;
    }
}