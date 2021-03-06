console.log(" 🚀 Typescript");

// 🏷️ problem with javascript:
//  🔴 The most common kinds of errors that programmers write can be described as type errors: a certain kind of value was used where a different kind of value was expected. This could be due to simple typos, a failure to understand the API surface of a library, incorrect assumptions about runtime behavior, or other errors. The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked).

// Non -exception fAILURES
// the specification says that trying to call something that isn’t callable should throw an error. Maybe that sounds like “obvious behavior”, but you could imagine that accessing a property that doesn’t exist on an object should throw an error too. Instead, JavaScript gives us different behavior and returns the value undefined:
//     const user = {
//   name: "Daniel",
//   age: 26,
// };
// user.location; // returns undefined

// 🏷️Ultimately, a static type system has to make the call over what code should be flagged as an error in its system, even if it’s “valid” JavaScript that won’t immediately throw an error. In TypeScript, the following code produces an error about location not being defined:
// const user = {
//   name: "Daniel",
//   age: 26,
// };

// user.location;
// Property 'location' does not exist on type '{ name: string; age: number; }'.

// typescript catches a lot of legitimate bugs
// for example typos
// const announcement = "Hello World!";

// // 🏷️ How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

// // We probably meant to write this...
// announcement.toLocaleLowerCase();

// 🏷️ uncalled function
// function flipCoin() {
//   // Meant to be Math.random()
//   return Math.random < 0.5;
// Operator '<' cannot be applied to types '() => number' and 'number'.
// }

//  🏷️ basic logic errors
//const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   // ...
// } else if (value === "b") {
// This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
//   // Oops, unreachable
// }

//  🔴 Types for Tooling
// TypeScript can catch bugs when we make mistakes in our code. That’s great, but TypeScript can also prevent us from making those mistakes in the first place.

// The type-checker has information to check things like whether we’re accessing the right properties on variables and other properties. Once it has that information, it can also start suggesting which properties you might want to use.

// ♻️  THE TYPESCRIPT COMPILER
//  npm install -g typescript
