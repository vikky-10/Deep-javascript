console.log(" 🥇 javascript objects");
// here i talking about fundamental object

// A primitive value is a value that has no properties or methods.
// A primitive data type is data that has a primitive value.
// primitive value are imputable for this refer to premitive file.

// create an object in javascript
// using new keyword
// var person = new Object();
// person.name = "vikky";
// person.age = 50;
// console.log(person);

// objects are the mutable

// var person = { firstname: "vikky", class: 7, rollno: 26 };
// var text = "";
// for (x in person) {
//   var text = text + person[x] + " ";
// }
// console.log(text);

//The delete keyword deletes both the value of the property and the property itself

// 🏷️ javascript -Auto-Boxing
// when necessary , primitive type are wrapped by identically-named objects, and then back to their primitive types again

// var b = new Boolean(false);
// console.log(typeof b); //object
// console.log(typeof true); //boolean

// primitive types are immutable
// Direct use of the boxed types(i.e new String('wrong);)
// is almost always a mistake
// var declaration are not blocked scoped
// var declation are hoisted: it's as if they're all declared at the top of the global or function scope in which they're define
// function foo() {
//   var x;

//   console.log(x);
//   x = 15;
// }
// foo(); //undefine
// let declations are not hoisted
//  polyfills & transpilers check for , and enforce this at build time
// function foo() {
//   console.log(x);
//   let x = 10;
// }
// foo(); //referenceerror x is not define
// const declation are not hoisted
// must be initialized at the time of declation
// reassignment is not allowed
// Constant variable doesnot mean "immutable valuew"
// console.log("30" - 7);//23
// console.log("30" + 7);//307

// key difference is:javascript uses "dynamic types"(resolved at runtime), TypeScript uses "static types"(set durring development )