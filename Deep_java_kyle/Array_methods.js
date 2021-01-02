// console.log(" 🚀 this is an array");

// tostring() covert array=> string
var city = ["holapur", "golapur", "sonapur", "lo**pur"];
//console.log(city.toString()); //holapur,golapur,sonapur,lo**pur(comma separted)

// join() It behaves just like toString(), but in addition you can specify the separator
// console.log(city.join("*"));

// popping and pushing
// console.log(city.pop()); // pop from last
// console.log(city.push("lakanpura")); // push return new array length 👈
// console.log(city);

// shifting elements
// 🍿 The shift() method removes the first array element and "shifts" all other elements to a lower index.
// console.log(city.shift()); //The shift() method returns the string that was "shifted out":
// console.log(city);

// 📌The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// console.log(city.unshift("gonapur"));
// console.log(city);

// 🏷️ slicing The slice() method slices out a piece of an array into a new array.

// The slice() method creates a new array. It does not remove any elements from the source array.
// console.log(city.slice(1)); //["golapur", "sonapur", "lo**pur"];
// console.log(city.slice(2)); //["sonapur", "lo**pur"];
//  📓 The method then selects elements from the start argument, and up to (but not including) the end argument.
// console.log(city.slice(1, 3)); //[ 'golapur', 'sonapur' ]

// 🏷️ 👿
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.
// var person = {
//   fullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// var person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };
// person.fullName.call(person2);
