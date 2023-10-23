// GAME

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

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

function playRound(playerChoice, computerChoice)
{
    let aux_CaseInsensitive = playerChoice;
    aux_CaseInsensitive = aux_CaseInsensitive.slice(1).toLowerCase();
    playerChoice = playerChoice.slice(0,1).toUpperCase();
    playerChoice = playerChoice.concat("", aux_CaseInsensitive);

    if (playerChoice === computerChoice)
    {
        return "Tie";
    }
    else if (computerChoice == "Rock" && playerChoice == "Scissors" || 
             computerChoice == "Paper" && playerChoice == "Rock" || 
             computerChoice == "Scissors" && playerChoice == "Paper")
    {
        computerScore++;
        roundWinner = "Computer";
        return "You Lose!, " + computerChoice + " Beats " + playerChoice;
    }
    else if (computerChoice == "Rock" && playerChoice == "Paper" || 
             computerChoice == "Paper" && playerChoice == "Scissors" || 
             computerChoice == "Scissors" && playerChoice == "Rock")
    {
        playerScore++;
        roundWinner = "Player";
        return "You Win!, " + playerChoice + " Beats " + computerChoice;
    }
    else if (playerChoice == "Gun")
    {
        // Joke scenario - CHANGE THIS FOR LATER??
        return "Are you sure we are playing the same game?";
    }
}

// Do this 5 times - CHANGE THIS -> TRASH IT (Unused code / Codigo sin usar)
/* function game()
{
    let win = false;

    // Regular expression (RegEx) use to check if the conditional word is in the sentence.
    const round_pattern = /You/;
    
    // Stats from the match saved in variables
    let round_result;
    let player_wins = 0;
    let computer_wins = 0;
    let rounds = 1;

    // Game Loop
    while (win != true)
    {
        // Insert Stuff here
        const playerSelection = prompt(`IT'S ROUND ${rounds} OF ROCK PAPER SCISSORS, WHAT DO YOU CHOOSE? `);
        const computerSelection = getComputerChoice();

        round_result = playRound(playerSelection, computerSelection);
        console.log(`============== ROUND ${rounds} RESULTS ============== \n` + round_result);
        
        // Check if it's a Win/Lose Scenario otherwise not add points
        if (round_pattern.test(round_result) == true)
        {
            // Check the character at the index position to get a Win or Lose scenario
            if (round_result.charAt(4) == 'W')
            {
                player_wins += 1;
            }
            else
            {
                computer_wins += 1;
            }
            // To check the player stats versus the computer
            console.log("Player count: " + player_wins + "\nComputer count: " + computer_wins);
        }

        // Victory condition = First to 5 points Wins
        if (computer_wins == 5 || player_wins == 5)
        {
            win = true;
        }

        // To add to the round
        rounds++;
    }

    // Return the winner of the match
    if (player_wins == 5)
    {
        return "Player Wins! GAME OVER";
    }
    else
    {
        return "Computer Wins! GAME OVER";
    }
}*/

const decisions = document.querySelectorAll('.player_choice');
decisions.forEach(decision => decision.addEventListener('click', getPlayerChoice));

function getPlayerChoice(){
    let playerChoice = this.alt;
    console.log("You selected the option " + playerChoice); // Gets the value "Alter" value
    console.log(playRound(playerChoice, getComputerChoice()));
}