//  🔥 functional programing 🔥

//  jab tk variable reassiange nhi hota tb tk wh pure function me koe problem nhi krta;

// function addAnother(z) {
//   return function addTwo(x, y) {
//     return x + y + z;
//   };
// }
// const x = addAnother(1)(20, 21);
// console.log(x); //42

// 😆 Eric Elliott’s exceptional Composing Software series is initially what got me excited about functional programming. It's a must-read.

// 📭 Currying turns multi-argument functions into unary (single argument) functions.

// without currying
// const greet = (greeting, first, last) => `${greeting}, ${first} ${last}`;

// const x = greet("Hello", "Bruce", "Wayne");
// console.log(x);
// Hello, Bruce Wayne

// with currying

// const greet = (first) => {
//   return (sec) => {
//     console.log(first + sec);
//   };
// };
// greet("hello")("my");

//  🔴 currying is usefull for reduce surface area.

// 🏷️ getter in javascript

// The get syntax binds an object property to a function that will be called when that property is looked up

const obj = {
  log: ["a", "b", "c"],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest);
