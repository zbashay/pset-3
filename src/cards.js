const readlineSync = require("readline-sync");

const card = readlineSync.question("\nEnter a playing card: ").toLowerCase();

let firstRank = card.charAt(0);
let firstSuit = card.charAt(1);
let secondRank = 0;

if (firstRank <=2 || firstRank >= 9) {
  console.log("\nInvalid.")
} else if (firstRank ==! "t" && firstRank ==! "j" && firstRank ==! "q" && firstRank ==! "k" && firstRank ==! "a") {
  console.log("\nInvalid.")
}else if (firstSuit ==! "s" && firstSuit ==! "c" && firstSuit ==! "d" && firstSuit ==! "h") {
  console.log("\nInvalid.")
}
else{
  switch (firstRank) {
  case "2":
        secondRank = 2;
        break;
  case "3":
        secondRank = 3;
        break;
  case "4":
        secondRank = 4;
        break;
  case "5":
        secondRank = 5;
        break;
  case "6":
        secondRank = 6;
        break;
  case "7":
        secondRank = 7;
        break;
  case "8":
        secondRank = 8;
        break;
  case "9":
        secondRank = 9;
        break;
  case "t":
       secondRank = "Ten";
        break;
  case "j":
       secondRank = "Jack";
       break;
  case "q":
       secondRank = "Queen";
       break;
  case "k":
       secondRank = "King";
       break;
  case "a":
       secondRank = "Ace";
       break;
}

switch (firstSuit) {
  case "h":
        secondSuit = "Hearts.";
        break;
  case "d":
        secondSuit = "Diamonds.";
        break;
  case "c":
        secondSuit = "Clubs.";
        break;
  case "s":
        secondSuit = "Spades.";
        break;
}

console.log("\n" + secondRank + " of " + secondSuit)
}
