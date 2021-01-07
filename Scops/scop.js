// console.log(" 🔥 Scope");

// scope: where to look for thing
// javascript is interpreter langurage eventhough it perform like a compile.
//  javascript organizes scopes with functions and blocks
// shadowing means creating a two variable(declare with ) the same name

// var teacher = "Kyle";
// function otherClass() {
//   var teacher = "vikky";
//   console.log("Welcome");
// }
// function ask() {
//   var question = "why?";
//   console.log(question);
// }
// otherClass();
// ask();
// console.log(teacher);

// non-strict mode is known as sloppy mode

// var teacher = "Kyle";
// function otherClass() {
//   // 👇 here variable are not declare
//   it affect the global variable
//   teacher = "Suzy";
//   //  auto global variable is created "topic"
//   topic = "React"; //sloppy mode
//   console.log("Welcome!");
// }
// otherClass(); //Welcome!
// /// keep in mind 👇 is like this because function is call before these lines
// console.log(teacher); //Suzy
// console.log(topic); //React

//  🏷️strict mode

// 🔴Strict mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in {} braces; attempting to apply it to such contexts does nothing. eval code, Function code, event handler attributes, strings passed to WindowTimers.setTimeout(), and related functions are entire scripts, and invoking strict mode in them works as expected.

// "use strict";
// var teacher = "Kyle";
// function otherclass() {
//   "use strict";
//   teacher = "suzy";
//   topic = "react"; //Reference error
//   console.log("Welcome");
// }
// otherclass();
// console.log(teacher);
// console.log(topic);

// Nested Scope

// var teacher = "Kyle";
// function otherClass() {
//   var teacher = "suzy";
//   function ask(question) {
//     console.log(teacher, question);
//   }
//   ask("why?");
// }
// otherClass();//suzy why
// ask("why????");//Reference error// not in global scope

// interview question 🥴

// 🏷️ null vs undefine vs undeclared
//  undefine and null both are on data type category
// undeclare doesnot exist
// undefined is a variable that has been declared but no value exists and is a type of itself ‘undefined’.
// null is a value of a variable and is a type of object.
// null is  one of JavaScript's primitive values and is treated as falsy for boolean operations.
// var str = "vikky@";
// var m = str.match(/@/);

// if (m == null) {
//   console.log("hii");
// }

// var x = 2;
// function foo() {
//   var y = 2;
//   console.log(x + y);
// }
// foo();

// 🏷️difference between function declation and function expression

// What is Function Statement/Declarations in JavaScript?
// The function statement declares a function.
// A declared function is “saved for later use”, and will be executed later, when it is invoked (called).
// Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.
// e.g.
// function bar() {
// return 3;
// }
// function is only declared here .For using it, it must be invoked using function name. e.g bar();

// functION EXPRESSTION:
// A function expression can be stored in a variable:
// var x = function (a, b) {return a * b};

// After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

//  👇 this code get exicuted  because Declaration are loaded before any code
// console.log(foo());
// function foo() {
//   console.log("hii this is vikky");
// }

//  👇 this give us an error because foo wasn't loaded yet(function expression)
// console.log(foo());
// var foo = function () {
//   return 5;
// };

// reference error
// var foo = function otherfoo() {
//   console.log("this is not in the scope : reference error");
// };
// console.log(otherfoo);

// 🔴function expresstion put there identifire into its own scope
// 🔴 in function declation function word is first thing in the statement

// ANONIMUS FUNCTION EXPRESSION
var clickHandler = function () {
  // ...code
};
// Named function expression
var keyHandler = function keyHandler() {
  // ...code
};

// 523cfd531996a6a8ffdc7d06fd89df9d
// 🏷️  Lexical and Dynamic Scoping

// var a = "hello vikky";
// function sec() {
//   var b = "how are";

//   function second() {
//     var c = "you ?";
//     console.log(a + b + c);

//     function three() {
//       var d = "hii eeveryone";
//       console.log(a + b + c + d);
//     }
//     three();
//   }
//   second();
// }

// sec();

// 🏷️ IIFE :An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// 🔴 It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// 🔴The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 🔴 The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// var teacher = "vikky";
// (function anotherteacher() {
//   var teacher = "asif";
//   console.log(teacher);
// })();
// // anotherteacher(); // also writen as  👉(anotherteacher)()
// console.log(teacher);

// block scoping
// instend of iifs
// var teacher = "Kyle";
// {

// use let or const
//   let teacher = "suzy";
//   console.log(teacher);
// }
// console.log(teacher);

// let vs var

// const x = 5;

// {
//   let y = 78;
// }
// try {
//   console.log(y);
// } catch (err) {
//   console.error(err);
// }

// var can be use many time but let not
// let x = 5;
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// console.log("hii");
// let x;// it throw an error
// console.log(x);




background