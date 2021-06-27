const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let ans = num1 + num2;

rl.question(`what is ${num1}+${num2}? \n`, (userInput) => {
  if (userInput.trim() == ans) {
    //it emit the close event
    rl.close();
  } else {
    rl.setPrompt("Incorrect response plz try again \n");
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == ans) {
        rl.close();
      } else {
        rl.setPrompt(`your answers ${userInput} is incorrect try again \n `);
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("your are correct!!");
});
