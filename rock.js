// START
   function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1;

    let computerChoice;
    if (randomNumber === 1){
        computerChoice = "rock";
    }
    else if(randomNumber === 2){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
   }


   function getHumanChoice(){
    let availabeChoices = "1: Rock\n2: Paper\n3: Scissors";
    console.log(availabeChoices);
    let humanChoice = Number(prompt("Enter a number that represents your choice(1, 2 or 3):"));
    
    // Validade input
    if (isNaN(humanChoice) || humanChoice > 3 || humanChoice < 0){
        console.log("Please enter a valid choice(1 , 2 or 3)");
        return;
    }
    // Assign choice
    let choice;
    if (humanChoice === 1) {
        choice = "rock";
    }
    else if (humanChoice === 2) {
        choice = "paper";
    }
    else{
        choice = "scissors";
    }


    return choice;
   }


 // STEP 5
 function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // tie
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    // Winning conditions for human player
    if (
        (humanChoice === "rock" && computerChoice == "scissors") ||
        (humanChoice === "scissors" && computerChoice == "paper") ||
        (humanChoice === "paper" && computerChoice == "rock")
    ){
        //humanScore += 1;
        return "human";
    }
    //computerScore += 1;
    return "computer" ;  
 }
 

 // STEP 6
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome to Rock, Paper, Scissors! Let's play 5 rounds.");

    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round}---`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === "human"){
            console.log("You win this round!");
            humanScore += 1;
        }
        else if (roundResult === "computer"){
            console.log("Computer wins this round!");
            computerScore += 1;
        }
        else {
            console.log("This round is a tie!")
        }
        console.log(`Scorwes for far - You: ${humanScore}, Computer: ${computerScore}`)

    }
  //  Final result
  console.log("\n ---Game Over---");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  }
  else if (computerScore > humanScore) {
    console.log(`Computer wins! Final score - You: ${humanScore}, Computer: ${computerScore}`);
  }
  else {
    console.log(`It's a tied! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  }
}
playGame()