// logic to get the computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
            
    }
}
// logic to get the human choice
function getHumanChoice() {
    let userChoice = prompt("Enter your choice: rock, paper or scissors");
    return userChoice.toLowerCase();
}