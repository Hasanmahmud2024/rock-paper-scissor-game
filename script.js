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
    let userChoice = prompt("Enter your choice: rock, paper or scissors").toLowerCase();
    // ask for a valid choice
    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Invalid choice! Please enter rock, paper or scissor").toLowerCase();
    }
    return userChoice;
}

// logic to play a single round
function playSingleRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`computer chose: ${computerChoice}`);
    
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")    
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        
    }else if (humanChoice === computerChoice) {
        console.log(`It's a tie!`);
    }else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        
    }
}