// Computer intelligence - Get 1 of the random options it has
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

// Play round function = Adds the round of game
function playRound(playerChoice, computerChoice)
{
    /* To make player choice case insensitive we grab what the player typed
       compare it to what the computer chose*/
    let aux_Variable = playerChoice;
    aux_Variable = aux_Variable.slice(1).toLowerCase();
    playerChoice = playerChoice.slice(0,1).toUpperCase();
    playerChoice = playerChoice.concat("", aux_Variable);

    // Get the different scenarios for the win/lose/tie
    if (playerChoice === computerChoice)
    {
        // Tie scenario
        return "Tie";
    }
    else if (computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Paper" && playerChoice == "Rock" || computerChoice == "Scissors" && playerChoice == "Paper")
    {
        // Lose scenario
        return "You Lose!, " + computerChoice + " Beats " + playerChoice;
    }
    else if (computerChoice == "Rock" && playerChoice == "Paper" || computerChoice == "Paper" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Rock")
    {
        // Win scenario
        return "You Win!, " + playerChoice + " Beats " + computerChoice;
    }
    else if (playerChoice == "Gun")
    {
        // Joke scenario
        return "Are you sure we are playing the same game?";
    }
    else if (playerChoice != "Rock" || playerChoice != "Paper" || playerChoice != "Scissors")
    {
        // Default scenario, where the name is not an actual object of the game
        return "C'mon, add a valid name here";
    }
}

// Do this 5 times
function game(playerSelection)
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
    /* while (win != true)
    {
        // Insert Stuff here

        // Victory condition = First to 5 points Wins
        if (computer_wins == 5 || player_wins == 5)
        {
            win = true;
        }

        // To add to the round
        rounds++;
    }*/

    // Stuff START
    //const playerSelection = prompt(`IT'S ROUND ${rounds} OF ROCK PAPER SCISSORS, WHAT DO YOU CHOOSE? `);
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

    // Stuff ENDS

    // Return the winner of the match
    if (player_wins == 5)
    {
        return "Player Wins! GAME OVER";
    }
    else
    {
        return "Computer Wins! GAME OVER";
    }
}

const decisions = document.querySelectorAll('.game_decision > img');
decisions.forEach(decision => decision.addEventListener('click', console.log(decision.alt)));