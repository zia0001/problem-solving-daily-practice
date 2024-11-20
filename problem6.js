computeSumOrProduct = () => {
  const prompt = require("prompt-sync")();

  const num = parseInt(prompt("Enter any number: "));

  if (isNaN(num) || num <= 0) {
    console.log("Enter a valid number");
    return;
  }

  const choice = prompt("type 'sum' for addition and 'product' for multiplication:");
  if (choice === "sum") {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log(`The sum of numbers from 1 to ${num} is ${sum}`);
  }
  else if (choice === "product") {
    let product = 1;
    for (let i = 1; i <= num; i++) {
      product *= i;
    }
    console.log(`The product of number from 1 to ${num} is ${product}`)
  }
  else {
    console.log("invalid choice!.Enter a valid choice")
  }
};
computeSumOrProduct();