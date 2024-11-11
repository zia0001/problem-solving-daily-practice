/*
let userName = prompt("What is you name?");
console.log(`Welcome  ${userName}`);
*/

// this upper code will only work on browser not in terminal


// For input in terminal the below code will be used

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  // these are input and output libraries for js
});

rl.question("What is your name? " , userName =>{
  console.log(`Welcome ${userName}`);
  rl.close();
});