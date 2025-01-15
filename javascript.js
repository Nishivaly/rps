let humanChoice = getHumanChoice();

let computerChoice = getComputerChoice();

decideWinner(humanChoice, computerChoice);

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

function decideWinner(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose");
            } else if (computerChoice == "scissors") {
                console.log("You win");
            } else {
                console.log("You tie");
            }
            break;

        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lose");
            } else if (computerChoice == "rock") {
                console.log("You win");
            } else {
                console.log("You tie");
            }
            break;

        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose");
            } else if (computerChoice == "paper") {
                console.log("You win");
            } else {
                console.log("You tie");
            }
            break;
    }
}