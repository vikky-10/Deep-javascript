console.log("🔥 Closure 🔥"); // 🏷️ important interview question

//   defination: 👇
//  🏷️ Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.
//  🔴 another def: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// 🔴 JavaScript is always synchronous and single-threaded. If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

// 🔴 JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls. The Ajax call will stop executing and other code will be able to execute until the call returns (successfully or otherwise), at which point the callback will run synchronously. No other code will be running at this point. It won't interrupt any other code that's currently running.

// 🔴 JavaScript timers operate with this same kind of callback.
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); //7 due to lexical scope
//   }
//   return y; // 👈 it return whole closure(it inclose function and is lexical scopes) not only function.
// }
// var z = x(); // after this line x() are vanised from the call stack  even though z remember its lexical scopes.
// console.log(z);
// z(); //wow 😮 //7  it remember its lexical scopes

// closure is not to  capturing the value it is cal about capturing the variable.

// some important cases
// function x() {
//   var s = 7;
//   function y() {
//     console.log(a); // because here reference of a present not a value;
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);
// z(); //100

//--------

// function z() {
//   var b = 78;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b); //here the lexical scope of from x()and b z();
//     }
//     y();
//   }
//   b = 796;
//   return x;
// }
// var s = z();
// console.log(s);
// s();

// 🏷️ closure loop
// var i; //lexically scope 5,5,5,5,5 due to closure
// for (i = 0; i < 5; i++) {
//   let j = i; //it is  create a new j for each iteration  so it print 1,2,3,4 here the four copy of bind with each setTimeout() function
//   setTimeout(() => {
//     console.log(`i: ${i}`);
//   }, i * 100);
// }

// 🔴 let is block scope it create new copy of variable each time

// 🔴 smart interview question without using let how you can handle this

for (var i = 1; i <= 5; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, i * 1000);
  }
  close(i);
}
