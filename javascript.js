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

let humanChoice = getHumanChoice();
console.log(humanChoice);