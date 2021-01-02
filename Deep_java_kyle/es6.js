//   🤖 default value

// let isHappyHour =  0; //because 0 is falsy value || operator checkif first operand is truty it return first one else 2nd one

// // Logical Operator
// isHappyHour = isHappyHour || "NP";
// console.log(isHappyHour);

// 🤔 The value produced by a && or || operator is not necessarily of type Boolean. The value produced will always be the value of one of the two operand expressions.

// var x = (x) => (x !== undefined ? x : 42);
// // x || 42; // full default value

// console.log(x(0));

// 🏷️
// var a = 42;
// var b = "abc";
// var c = null;
// console.log(a || b); //42
// console.log(a && b); //"abc"
// console.log(c || b); //"abc"
// console.log(c && b); //null

// a || b; //roughly equivalent to a?a:b
// a && b; //roughly equivalent to a?b:a

// 🏷️
// var x = 1;
// function foo(
//   x = 2,
//   f = function () {
//     return x;
//   }
// ) {
//   //   let x = 5; this line throw an error because no two let in the same scope
//   // default type of x in parameter list is let
//   console.log(f());
// }
// foo();
