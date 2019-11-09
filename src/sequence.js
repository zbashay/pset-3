const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;


console.log("\nEnter three numbers.");

let a = Number(readlineSync.question("\n"));
let b = Number(readlineSync.question(""));
let c = Number(readlineSync.question(""));

if (Number.isNaN(a)) {
    console.log("\nInvalid.")
  } else if (a < MIN || a > MAX) {
    console.log("\nInvalid.")
  } else if (Number.isNaN(b)) {
    console.log("\nInvalid.")
  } else if (b < MIN || b > MAX) {
    console.log("\nInvalid.")
  } else if (Number.isNaN(c)) {
    console.log("\nInvalid.")
  } else if (c < MIN || c > MAX) {
    console.log("\nInvalid.")

  } else {

    if ((a === b) && (b === c)) {
    console.log("\nEqual.")
  } else if ((a === b) && (b < c)) {
    console.log("\nIncreasing.")
  } else if ((a < b) && (b === c)) {
    console.log("\nIncreasing.")
  } else if ((a < b) && (b < c)) {
    console.log("\nStrictly increasing.")
  } else if ((a > b) && (b > c)) {
    console.log("\nStrictly decreasing.")
  } else if ((a === b) && (b > c)) {
    console.log("\nDecreasing.")
  } else if ((a > b) && (b === c)) {
    console.log("\nDecreasing.")
  } else if ((a > b) && (b < c)) {
    console.log("\nUnordered.")
  } else if ((a < b) && (b > c)) {
    console.log("\nUnordered.")
  } else {
    console.log("\nDecreasing.")
  } }
