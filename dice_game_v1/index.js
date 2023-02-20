//* ROLL DICE GAME - WHO SCORES 5 FIRST?

// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll
// PLAYER scores one point
// otherwise, COMPUTER scores one point

// If a player reaches 5 points, they win the game.

//* First way
// My attempt

// function rollDice() {
//   return Math.ceil(Math.random() * 6);
// }

// let playerScore = 0;
// let computerScore = 0;
// let rollNumber = 0;

// while (playerScore < 5 && computerScore < 5) {
//     const playerRoll = rollDice();
//     const computerRoll = rollDice();
//     rollNumber++
//     if (playerRoll > computerRoll) {
//         console.log(`%cRoll number ${rollNumber}:`, `color: red;`);
//         console.log(`Player roll: ${playerRoll} | Computer roll: ${computerRoll} --> PLAYER wins this round.`);
//         playerScore++
//         console.log(`%c/// Player score: ${playerScore}`, `color: blue;`);
//     } else if (computerRoll > playerRoll) {
//         console.log(`%cRoll number ${rollNumber}:`, `color: red;`);
//         console.log(`Player roll: ${playerRoll} | Computer roll: ${computerRoll} --> COMPUTER wins this round.`);
//         computerScore++
//         console.log(`%c/// Computer score: ${computerScore}`, `color:blue;`);
//     } else {
//         console.log(`%cRoll number ${rollNumber}:`, `color: red;`);
//         console.log(`Player roll: ${playerRoll} | Computer roll: ${computerRoll} --> This round is a tie.`);
//         console.log("%c/// Nobody scores this round.", "color:blue;");
//     }
// }

// if (playerScore === 5) {
//     console.log("%cGame Outcome:", "color: red;");
//     console.log("%cPLAYER WINS THE GAME!!!", "color: green;");
//     console.log(`%cIt took ${rollNumber} rolls to end the game.`, `color: green;`);
// } else if (computerScore === 5) {
//     console.log("%cGame Outcome:", "color: red;");
//     console.log("%cCOMPUTER WINS THE GAME!!!", "color:green;");
//     console.log(`%cIt took ${rollNumber} rolls to end the game.`, `color:green;`);
// }

//* Second way - inside the function
// Abraham's Example

// let playerScore = 0;
// let computerScore = 0;

// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// while(playerScore < 5 && computerScore < 5) {
//     const playerRoll = rollDice();
//     const computerRoll = rollDice();

//     console.log("Player Roll: " + playerRoll);
//     console.log("Computer Roll: " + computerRoll);
//     checkDices(playerRoll, computerRoll)

// }

// function checkDices(playerRoll, computerRoll) {
//     if (playerRoll > computerRoll) {
//         playerScore += 1;
//         if (playerScore === 5) console.log("P1 WINNER");

//         console.log("Player Score: " + playerScore);

//     } else if (computerRoll > playerRoll)  {
//         computerScore += 1;
//         if (computerScore === 5) console.log("PC WINNER");

//         console.log("Computer Score: " + computerScore);

//     } else if (computerRoll === playerRoll) {
//         console.log("It's a draw!");
//     }
// }

//* ROCK PAPER SCISSORS!
//* My solution

// Function to choose rock, paper, or scissors
// function chooseShape() {
//   let choice = Math.ceil(Math.random() * 3);
//   if (choice === 1) {
//     return "rock";
//   } else if (choice === 2) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// // Function to play one round of rock, paper, scissors
// function playRockPaperScissors() {
//   let playerChoice = chooseShape();
//   let computerChoice = chooseShape();
//   console.log("%cPlay rock paper scissors -->", "color: red;");
//   console.log(`Player choice: ${playerChoice}`);
//   console.log(`Computer choice: ${computerChoice}`);
//   if (playerChoice === "rock" && computerChoice == "rock") {
//     console.log("// It's a tie.");
//     winner = "none";
//   } else if (playerChoice === "rock" && computerChoice == "paper") {
//     console.log("// Computer wins!");
//     winner = "computer";
//   } else if (playerChoice === "rock" && computerChoice == "scissors") {
//     console.log("// Player wins!");
//     winner = "player";
//   } else if (playerChoice === "paper" && computerChoice == "rock") {
//     console.log("// Player wins!");
//     winner = "player";
//   } else if (playerChoice === "paper" && computerChoice == "paper") {
//     console.log("// It's a tie.");
//     winner = "none";
//   } else if (playerChoice === "paper" && computerChoice == "scissors") {
//     console.log("// Computer wins!");
//     winner = "computer";
//   } else if (playerChoice === "scissors" && computerChoice == "rock") {
//     console.log("// Computer wins!");
//     winner = "computer";
//   } else if (playerChoice === "scissors" && computerChoice == "paper") {
//     console.log("// Player wins!");
//     winner = "player";
//   } else if (playerChoice === "scissors" && computerChoice == "scissors") {
//     console.log("// It's a tie.");
//     winner = "none";
//   }
//   return winner;
// }

// // Function to play three rounds of rock, paper, scissors (best of 3)
// function bestOfThree() {
//   playerScore = 0;
//   computerScore = 0;
//   // play three rounds
//   for (i = 1; i <= 3; i++) {
//     playRockPaperScissors();
//     if (winner === "player") {
//       playerScore++;
//     } else if (winner === "computer") {
//       computerScore++;
//     }
//   }
//   // decide who won best of 3
//   console.log("%cBEST OF THREE WINNER -->", "color: red;");
//   if (playerScore > computerScore) {
//     console.log("%cPlayer wins best of three!", "color: blue;");
//   } else if (computerScore > playerScore) {
//     console.log("%cComputer wins best of three!", "color: blue;");
//   } else {
//     console.log("%cIt's a tie.", "color: blue;");
//   }
// }

// bestOfThree();

//* Rock Paper Scissors
//* Abraham's code
console.log("%c--- Same game, different code ---", "color: green;");

const choices = ["rock", "paper", "scissors"];
const randomNum = Math.floor(Math.random()*3);
const computerChoice = choices[randomNum];

let userChoice = "";
let isNotValid = true;

while (isNotValid) {
  userChoice = prompt("Please choose rock, paper, or scissors.")
  userChoice = userChoice.trim().toLowerCase();

  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    isNotValid = false;
  }
}

console.log(`User choice: ${userChoice} || Computer choice: ${computerChoice}`);

if (userChoice === computerChoice) {
  console.log("It's a tie!");
} else if (userChoice === "rock" && computerChoice === "scissors") {
  console.log("You score!");
} else if (userChoice === "paper" && computerChoice === "rock") {
  console.log("You score!");
} else if (userChoice === "scissors" && computerChoice === "paper") {
  console.log("You score!");
} else {
  console.log("Computer scores.");
}
