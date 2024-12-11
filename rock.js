document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;

    // Create the main game elements dynamicall
    const body = document.body;

    // Create a container for the game
    const gameContainer = document.createElement("div");
    gameContainer.classList.add("game-container");
    body.appendChild(gameContainer);

    // Create buttons for Rock, Paper and Scissors
    const rockButton = createButton("Rock");
    const paperButtton = createButton("Paper");
    const scissorsButton = createButton("Scissors");

    // Add buttons to the game containeer
    gameContainer.appendChild(rockButton);
    gameContainer.appendChild(paperButtton);
    gameContainer.appendChild(scissorsButton);

    // Create Score display
    const scoreBoard = document.createElement("div");
    scoreBoard.classList.add("score-board");
    gameContainer.appendChild(scoreBoard);

    // Create the result display
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    gameContainer.appendChild(resultDiv);

    // Function to create the buttons
    function createButton(choice) {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => playRound(choice.toLowerCase()));
        return button;
    }

    // Function to generate computer's choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    //  Function to play a round
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        //  Update scoere and result
        let roundResult = "";
        if (humanChoice === computerChoice) {
            roundResult = `It's a tie! You both chose ${humanChoice}.`;
        } else {
            const winner = checkWinner(humanChoice, computerChoice);
            if (winner === "human") {
                humanScore++;
                roundResult = `You win this round! You chose ${humanChoice} and Computer chose ${computerChoice}.`;
            } else {
                computerScore++;
                roundResult = `Computer wins this round! You chose ${humanChoice} and Computer chose ${computerChoice}.`;
            }
        }
        
        // Display Results
        scoreBoard.textContent = `Score - You: ${humanScore} | ${computerChoice}`;
        resultDiv.textContent = roundResult;

        // Check if someone reached 5 points and ende the game
        if (humanScore === 5 || computerScore === 5) {
            announceWinnwer();
        }
    }

    // Function to check the winner of a round
    function checkWinner(humanChoice, computerChoice) {
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
            
        ) {
            return "human";
        }
        return "computer";
    }

    // Function to announc the final winner of the game
    function announceWinnwer() {
        let finalResult = "";
        if (humanScore > computerScore) {
            finalResult = `Congratulations! You win the game! You: ${humanScore}, Computer: ${computerScore}`
        } else {
            finalResult = `Computer wins the game! You: ${humanScore}, Computer: ${computerScore}`;
        }
        resultDiv.textContent = finalResult;
        setTimeout(resetGame, 3000); // Reset game after 3 seconds
    }

    // Function to reset the game
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        scoreBoard.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
        resultDiv.textContent = "Game reset! Choose Rock, Paper, or Scissors.";
    }
})