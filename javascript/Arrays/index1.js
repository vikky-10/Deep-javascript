console.log('🔥 arrays');

//🔥 Map()
//The map() method creates a new array
// populated with the results of calling a provided function on every element in the calling array.
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

// const arr = [1, 4, 9, 16, 25];
// let newArr = arr.filter((el) => el > 9);
// console.log(newArr);//[16, 25];

//return whole array with true and false
// const arr = [1, 4, 9, 16, 25];
// let newArr = arr.map((el) => el > 9);
// console.log(newArr);
//[ false, false, false, true, true ]

// let newArr = arr.map((el, idx, ar) => {
//   return `index no =${idx} and the value is ${el} belong to ${arr}`;
// });
// console.log(newArr);

//difference b/w foreach and map method

// 🔴 The first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements

// eg.
// const arr = [1, 4, 9, 16, 25];
// const ans = arr.map((el) => el * -2);
// console.log(ans); //[ -2, -8, -18, -32, -50 ]

// const ans2 = arr.forEach((el) => el * -2);
// console.log(ans2);//undefined

//🔴 The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.

// const arr = [1, 4, 9, 16, 25];
// const ans = arr.map((el) => el * 2).filter((el) => el > 8);
// console.log(ans);//[ 18, 32, 50 ]

// const ans2 = arr.forEach((el) => el * -2);
// console.log(ans2); //undefined

//----performance---***

// const myAwesomeArray = [1, 2, 3, 4, 5];

// const startForEach = performance.now();
// myAwesomeArray.forEach((x) => (x + x) * 10000000000);
// const endForEach = performance.now();
// console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`);

// const startMap = performance.now();
// myAwesomeArray.map((x) => (x + x) * 10000000000);
// const endMap = performance.now();
// console.log(`Speed [map]: ${endMap - startMap} miliseconds`);

//🔥---- very very important---🔥

//Reduce Method

//flatter an array to covert the 3d or 2d array into a
//single dimentional array
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// // Arrow function
// reduce((accumulator, currentValue) => { ... } )
// reduce((accumulator, currentValue, index) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... } )
// reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// Your reducer function's returned value is assigned to the accumulator

//single value chahey to reducer ko yaad kre ex sum of all element ,average,product etc

// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, el, idx, arr) => {
//   return (accumulator += el);
// }, 8);
// console.log(sum); //value assign in accumulatoe

// how to fatten an array
// const arr = [
//   ["zone1", "zone2"],
//   ["zone3", "zone4"],
//   ["zone5", "zone5"],
//   ["zone6", "zone6"],
// ];
// let flatten = arr.reduce((acc, curval) => {
//   return acc.concat(curval);
// });
// console.log(flatten);

//********************** */

// Advance Hacks 🔥 🔥

//********************** */

//Remove falsy value from array
let namesArray = [
  'naruto',
  'saske',
  'sakura',
  'eruka',
  null,
  0,
  false,
  'kakashi',
  true,
];

//passing Boolean in filter() will remove all falsy value
// let filteredArray = namesArray.filter(Boolean);
// console.log(filteredArray);

//Convert any value to boolean
// Using !! in front of any value will convert that  value to boolean.
// console.log(!!'hii'); //true
// console.log(!!0); //false
// console.log(!!1); //true
// console.log(!!undefined); //false

// Resizing array

// let array = ['jhon', 'choji', 'danile', 'jason'];
// array.length = 2;
// console.log(array);

//flatten multi-dimentional arrays

//using flat()
//but flat() method only flatten only one level

// let onelevel = ['a', 'b', ['c', 'd'], 'e', [['f', 'g', 'h']]];
// console.log(onelevel.flat());
// ['a', 'b', 'c', 'd', 'e', ['f', 'g', 'h']];

// let onelevel = ['a', 'b', ['c', 'd'], 'e', [['f', 'g', 'h']]];
// console.log(onelevel.flat(Infinity));
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//Replace all occurrences of string

let sentence =
  ' MUst follow the page, page uploads awesome content  so must !!';

console.log(sentence.replace(/must/g, 'sparshcodes'));
