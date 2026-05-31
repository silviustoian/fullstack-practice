let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
  console.log("You're still in the game!");
} else if (sum === 21) {
  console.log("Blackjack!");
  hasBlackjack = true;
} else {
  console.log("Game over!");
}

// CASH OUT !
console.log(hasBlackjack);
