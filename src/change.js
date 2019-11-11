const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 99;
const QUARTERS = 25;
const DIMES = 10;
const NICKLES = 5;


const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid")
} else {
    let whole = amount * 100
    let numOfQuarters = Math.floor(whole / QUARTERS);
    let change1 = (whole % QUARTERS)
    let numOfDimes = Math.floor(change1 / DIMES);
    let change2 = (change1 % DIMES)
    let numOfNickles = Math.floor(change2 / NICKLES);
    let change3 = (change2 % NICKLES)

    console.log( "\n" + numOfQuarters + " quarters, " + numOfDimes + " dimes, " + numOfNickles + " nickles, and " + change3 + " pennies.")
}
console.log("")
