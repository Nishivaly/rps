let humanChoice = getHumanChoice();
console.log("Human choice is: " + humanChoice);

let computerChoice = getComputerChoice();
console.log("Computer choice is: " + computerChoice);

function getHumanChoice() {
    let playerChoice = prompt("Choose rock, paper or scissors");
    while (true) {
        switch (playerChoice.toLowerCase()) {
            case "rock":
            case "paper":
            case "scissors":
                return playerChoice.toLowerCase();
            default:
                playerChoice = prompt("Invalid choice, try again");
                break;
        }
    }
}

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}