// GAME

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let gameOver = false;

const decisions = document.querySelectorAll('.player_choice');

decisions.forEach(decision => decision.addEventListener('click', getPlayerChoice));

function getComputerChoice()
{
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0)
    {
        return "Rock";
    }
    else if (randomChoice === 1)
    {
        return "Paper";
    }
    return "Scissors";
}

function getPlayerChoice(){
    let playerChoice = this.alt;
    console.log(playRound(playerChoice, getComputerChoice()));
}

function playRound(playerChoice, computerChoice)
{
    roundWinner = "";

    if(gameOver == false) {
        let aux_CaseInsensitive = playerChoice;
        aux_CaseInsensitive = aux_CaseInsensitive.slice(1).toLowerCase();
        playerChoice = playerChoice.slice(0,1).toUpperCase();
        playerChoice = playerChoice.concat("", aux_CaseInsensitive);
    
        if (playerChoice === computerChoice)
        {
            roundWinner = "none";
            console.log("Tie");
        }
        else if (computerChoice == "Rock" && playerChoice == "Scissors" || 
                 computerChoice == "Paper" && playerChoice == "Rock" || 
                 computerChoice == "Scissors" && playerChoice == "Paper")
        {
            ++computerScore;
            roundWinner = "Computer";
            console.log("You Lose!, " + computerChoice + " Beats " + playerChoice);
        }
        else if (computerChoice == "Rock" && playerChoice == "Paper" || 
                 computerChoice == "Paper" && playerChoice == "Scissors" || 
                 computerChoice == "Scissors" && playerChoice == "Rock")
        {
            ++playerScore;
            roundWinner = "Player";
            console.log("You Win!, " + playerChoice + " Beats " + computerChoice);
        }
        else if (playerChoice == "Gun")
        {
            // Joke scenario - CHANGE THIS FOR LATER??
            console.log("Are you sure we are playing the same game?");
        }
    
        scoreboardUpdate();
    
        if (computerScore == 5 || playerScore == 5){
            isGameOver();
            toggleRestart();
        }   
    }
    else {
        alert("The game has finished, press restart to play again");
    }
}

// UI = User Interface (Interfaz de Usuario)

const scoreboard = Array.from(document.querySelectorAll('.points'));
const button = document.getElementById('restartButton');
button.style.display = 'none';

function isGameOver() {
    gameOver = true;
    if (computerScore > playerScore) {
        alert("You Lose");
    }
    else {
        alert("You Win");
    }
}

function scoreboardUpdate() {
    if (roundWinner == "Player") {
        scoreboard[0].textContent = `Player Points: ${playerScore}`;
    }
    else if (roundWinner == "Computer") {
        scoreboard[1].textContent = `Computer Points: ${computerScore}`;
    }
    else if (roundWinner == "RESTART"){
        scoreboard[0].textContent = `Player Points: ${playerScore}`;
        scoreboard[1].textContent = `Computer Points: ${computerScore}`;
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    button.style.display = "none";
    roundWinner = "RESTART";
    scoreboardUpdate();
}

function toggleRestart() {
    if (button.style.display == 'none') {
        button.style.display = 'block';
    } 
    else {
        button.style.display = 'none';
    }
}