// console.log("start");

// 🏷️ topic: Destructuring   [ 🥇 Array]

// let name, id, nm, num, star, planet;
// let personalObject = { name: "vikky", id: 11903549, planet: "mars" };
// let personalArray = ["vikkysingh", 08, "moon"];

// // array destructuring

// [nm, num] = personalArray;
// console.log(nm, num);
// [, , star] = personalArray;
// console.log(star);
// [nm, ...rest] = personalArray;
// console.log(nm, rest);

// const foo = (a, b) => [a + b, a * b, a / b];
// const [sum, mult, div = "no div"] = foo(3, 5);
// console.log(sum, mult, div);

// important question ❓
// (1) swap the two variable
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a, b);

// 🏷️ it is also used in unpacking value from regural expresstion;

// When the regular expression 👉exec() method finds a match, it returns an array containing first the entire matched portion of the string and then the portions of the string that matched each parenthesized group in the regular expression

// function parseProtocol(url) {
//   const parsedUrl = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url); 👈
//   console.log(parsedUrl);
// ["https://developer.mozilla.org/en-US/Web/JavaScript",
//   "https", "developer.mozilla.org", "en-US/Web/JavaScript"]    😮

//   const [, protocol, fullhost, fullpath] = parsedUrl;
//   return protocol;
// }
// console.log(
//   parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript")
// );

// 🔵 basic
// var s = 1;
// s++;
// console.log(s++);
// console.log(s);
// ++s;
// console.log(s);
// console.log(++s);

// 🏷️ var str = "5"; // 🎗️ keep in mind important stuff
// str++;                   // according to spec str=number(str)+1;
// console.log(str);
// console.log(str++);
// console.log(str);
// console.log(++str);

// this is 🙅
// let x = 3;
// const y = x++;     //keep in her this is not x=x+1
// console.log(x, y);

// 🏷️ Object Destructuring

// const personOne = {
//   name: "vikky",
//   age: 24,
//   address: {
//     city: "goa",
//     state: "mp",
//   },
// };
// const personTwo = {
//   name: "Ankit",
//   age: 14,
//   address: {
//     city: "gobinnager",
//     state: "up",
//   },
// };
//       👇 here name is same as in object
// const {name, age}=personOne;
// console.log(name);
// console.log(age);

// if you want to chang name of the variable
// const { name: firstname, age: ages } = personTwo;
// console.log(firstname, ages);

//spread
// const { ...rest } = personOne;
// console.log(rest);

//nested object
// const {
//   address: { city },
// } = personOne;
// console.log(city);
// console.log(resa);

//  combine two object and if some property is same they overwrite by sec object
// const personThree = {
//   food: "burger",
//   drink: "no",
//   age: 45,
// };
// const personFour = { ...personOne, ...personThree };
// console.log(personFour);

// 🏷️ kyle time
// function foo() {
//   return [1, 2];
// }
// var [a, b, c] = foo();
// ✔️console.log(c); //undefine

// function foo() {
//   return null;
// }
// ✔️ var [a, b = 45, c] = foo(); //typeerror because we expect an array

// 🏷️ 🥇

// 🎌 〰️one way to guard
//  var [a, b = 45, c] = foo() || [];

// 🏷️ 🥉
// function foo() {
//   return [1, 2, 3];
// }
// var [a, b, c, ...args] = foo();
// console.log(args); //[]empty  🔷

// 🏷️ 🥈
// function foo() {
//   return [1, 2, 3, 4];
// }
// var o = {};
// [o.a, o.b = 45, o.c, ...o.args] = foo();
// console.log(o);

// 🏷️ 🥇
var a = [1, 2, 3];
[x, y, ...a] = [0, ...a, 4]; //left side
console.log(x, y, a);
