//   🔥 higher order function

//  🔴 Higher-order functions are functions that take other functions as arguments or return functions as their results.

//  🔴Taking an other function as an argument is often referred as a callback function, because it is called back by the higher-order function.

// 🏷️ some example  like array higher order function.

// const items = [
//   { name: "bike", price: 100 },
//   { name: "tv", price: 200 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "phone", price: 500 },
//   { name: "computer", price: 1000 },
//   { name: "keyboard", price: 25 },
// ];
//    🤩 filter()

// i want new array having item price less than 200
// const newitems = items.filter((item) => {
//   return item.price < 200;
// });
// console.log(newitems);

//  🤩 map  // it's also return an array
// const itemName = items.map((item) => {
//   return item.price + 1;
// });
// console.log(itemName);

// const single = ["man", "boy", "human"];
// const res = single.map((item) => {
//   return item + " hii";
// });
// console.log(res);

//   🤩 find

// const single = ["man", "boy", "human"];
// const res = single.find((item) => {
//   return item === "boy";
// });
// console.log(res);

// const finditem = items.find((item) => {
//   return item.name === "Book"; // tis is true then it return an array
// });
// console.log(finditem);

// var grades = [
//   { name: "John", grade: 8, sex: "M" },
//   { name: "Sarah", grade: 12, sex: "F" },
//   { name: "Bob", grade: 16, sex: "M" },
//   { name: "Johnny", grade: 2, sex: "M" },
//   { name: "Ethan", grade: 4, sex: "M" },
//   { name: "Paula", grade: 18, sex: "F" },
//   { name: "Donald", grade: 5, sex: "M" },
//   { name: "Jennifer", grade: 13, sex: "F" },
//   { name: "Courtney", grade: 15, sex: "F" },
//   { name: "Jane", grade: 9, sex: "F" },
// ];

// //  average gread of this classroom
// var sum = 0;
// var total;
// const averagegroup = grades.filter((item) => {
//   sum = sum + item.grade;
//   total = sum / grades.length;
// }

// );

//  🤩 forEach()
// items.forEach((item) => {
//   console.log(item.name);
// });

//  🤩 some // instend of returning array it return true and false.
// const itHas = items.some((item) => {
//   return item.price < 45;
// });
// console.log(itHas);  //true

//  🤩  every // instend of returning array it return true and false.
// and it is similar to some. it check every item in an array

// const itHas = items.every((item) => {
//   return item.price < 45;
// });
// console.log(itHas);  //false

// 🤩 reduce() it is different from other   👿
// 🏷️    important point is that in parameter list we taken in a reverse order  in below 👇 ex currenTotal is first parameter but we assign it in sec.

// const total = items.reduce((currenTotal, item) => {
//   return item.price + currenTotal;
// }, 0);
// console.log(total);

// 🤩  include()
// const item = [1, 2, 3, 4, 5];
// const hasitem = item.includes(2);
// console.log(hasitem); // true
