console.log("🔥 arrays");

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
