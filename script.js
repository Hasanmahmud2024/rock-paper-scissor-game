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
    alert(`computer chose: ${computerChoice}`);
    
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")    
    ) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        
    }else if (humanChoice === computerChoice) {
        alert(`It's a tie!`);
    }else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        
    }
}

// declare the players score variables
let computerScore = 0;
let humanScore = 0;

// logic to play the entire game
function playgame() {
    //reset scores at the begining
    computerScore = 0;
    humanScore = 0;

    // play 5 rounds
    for (let i = 1; i < 5; i++) {
        alert(`\nRound ${i}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playSingleRound(humanChoice, computerChoice);
    }

    // final scores
    alert(`\nFinal Scores: \nYou: ${humanScore}  \nComputer: ${computerScore}`);

    if (humanScore > computerScore) {
        alert("CONGRATULATIONS! YOU WIN THE GAME.");
    }else if (computerScore > humanScore) {
        alert("Sorry, you lose the game.");
    }else {
        alert("It's a tie game!");
    }
}

// call the play function
playgame();