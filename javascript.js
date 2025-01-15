playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < + 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        [humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);
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
    let humanChoice = prompt("Choose rock, paper or scissors");
    while (true) {
        humanChoice = humanChoice.toLowerCase();
        switch (humanChoice) {
            case "rock":
            case "paper":
            case "scissors":
                console.log("Human choice is: " + humanChoice);
                return humanChoice;
            default:
                humanChoice = prompt("Invalid choice, try again");
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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
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
    return [humanScore, computerScore];
}