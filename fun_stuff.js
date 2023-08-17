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
function game()
{
    for (let rounds = 0; rounds < 5; rounds++)
    {
        const playerSelection = prompt(`IT'S ROUND ${rounds + 1} OF ROCK PAPER SCISSORS, WHAT DO YOU CHOOSE? `);
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));   
    }
    return "GAME OVER";
}