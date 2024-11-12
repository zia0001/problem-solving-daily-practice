const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  // these are input and output libraries for js
});

rl.question("what is your name?\n", userName=>{
  if(userName === "Alice" || userName === "Bob"){
    console.log(`Welcome ${userName}`);
  }
  else{
    console.log("only Alice and Bob will be greeted here")
  }
  rl.close();
})