const playerGuess = 3;
const correctAnswer = 3;

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

let message =
  playerGuess === correctAnswer
    ? "Correct!"
    : playerGuess < correctAnswer
      ? "Too low!"
      : "Too high!";

console.log(message);
