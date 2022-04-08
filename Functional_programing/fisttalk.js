console.log(" 🔥 Anjana vankil");

// imperative   commands base programing   ex. linux  //how to do something
// Declarative  statement base programing  ex sql    //what and why
//  object oriented   // we all know what is it

//  ❤️ functional programing   
//👉  Functional programming is a 
//programming
// paradigm, meaning that it is a way 
//of thinking about software construction 
//based on some fundamental,
// defining principles.
// or we can say that way of looking 
//the program//code
// it is in declarative side rather than imperative
//  🔴  avoiding shared state, mutable data, and side-effects.

//  🔴 function is the symantic relationship between input and computed output
// 🔴 if the input is not direct so it not a function.

//      💯      it is pure function.
//  what is pure function ❓
//   Input Output function 😕 it mean take input give output no other thing.
// not depend upon global things 🤭;

// how to check is function is pure or not
//  🚩 function should have parameter.
//  🚩 function should have return keyword.
//  🚩 if i call the function with same argument result should be same  this  //     is k/a "Referential transparency".This means that the function cannot ///     depend on any mutable state.
//  🚩Side-effect free: The function cannot cause any side effects. Side effects may include I/O (e.g., writing to the console or a log file),        modifying a mutable object,Random Number,Cpu heat,cpu time delay reassigning a 👉variable, etc.

//    👇  several built-in functions in JavaScript that are impure
// console.log
// element.addEventListener
// Math.random
// Date.now

// var firstname = "vikky";
// function greet(name) {
//   return `hello ${name}`;
// }
// console.log(greet(firstname));

// but if
// firstname = "anjana";
// console.log(greet(firstname)); //oops!   it change to anjana  in functional programming this is not accepted
// in functional programjing if we call with some argument if we call again anytime same result should print
//  🎅 solution
// no variable declation
// only pass directly argument
// console.log(greet("vikky"));

// function
// function add(x=0,y=0){
//     var total=x+y;     //✖️ not a function

//     console.log(total);
// }
// function extraNumber(x=2,...args){
//     return add(x,20,...args); // ✖️ inside function non function thats why this is not a function
// }
// extraNumber();
// extraNumber(3,8,11);

// in functional programing multiple input and multiple present
// function tuble(x, y) {
//   return [x - 1, y - 1];
// }
// var [a, b] = tuble(...[5, 10]);

// full of side effect 😮
// var conf = { name: "saintJs", date: 2021 };
// function rename(name) {
//   conf.name = name;
//   console.log("Renamed!");
// }
// rename("Holyjs");
// console.log(conf);
// ☝️ same function with no side effect
// var conf = { name: "sainJs", date: 2021 };
// function rename(oldConf, newName) {
//   return { name: newName, date: oldConf.date };
// }
// var newConf = rename(conf, "HolyJs");
// console.log(newConf);
// console.log(conf);

// why fp❓
// there is many benifit of fp easy to debug
// clean code
var a = 2;
var b = 3;
a;
++b;
console.log(a, b);
console.log(typeof undefined);
var x = null;
console.log(x);
