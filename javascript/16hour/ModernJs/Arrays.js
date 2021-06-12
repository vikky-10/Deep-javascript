// Arrays---imp---

// var myarray = [
//   "vikky",
//   "amit",
//   20,
//   8754.246,
//   true,
//   null,
//   undefined,
//   " ",
//   "last",
// ];
// console.log(myarray);
// console.log(myarray[2]);
// console.log(myarray[myarray.length - 1]);
// console.log(myarray[myarray.length]); //undefined
// console.log(myarray[-1]); //undefined
// console.log(myarray[-2]); //undefined

// let arr = new Array();
// arr = [1, 2, "vikky"];
// console.log(arr);

var myarray = [
  "vikky",
  "amit",
  20,
  8754.246,
  true,
  null,
  undefined,
  " ",
  "last",
];

//it return index of each element
// for (let i in myarray) {
//   console.log(i);
// }
// for (let i in myarray) {
//   console.log(myarray[i]);
// }

//each element

// for (let el of myarray) {
//   console.log(el);
// }

// myarray.forEach(function (el, ind, array) {
//   console.log(el);
//   // console.log(ind);
//   // console.log(array);
// });

// myarray.forEach((el, ind, array) => {
//   console.log(el);
//   // console.log(ind);
//   // console.log(array);
// });

// push,pop
// myarray.push("vikkyhp"); //at end
// console.log(myarray);

// myarray.pop();//at end
// console.log(myarray);

// 👨‍💻 array methods

// searching and filtering

//1️⃣ Array.prototype.indexOf()

// var myarray = [
//   "vikky",
//   "amit",
//   20,
//   8754.246,
//   true,
//   null,
//   undefined,
//   "vikky",
//   " ",
//   "last",
// ];
// console.log(typeof myarray); //object

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// indexOf(searchElement);
// indexOf(searchElement, fromIndex);

// console.log(myarray.indexOf("last")); //8
// console.log(myarray.indexOf("vikky", 2)); //7

// chalenge display the array of all index of  occourense element .
// var arr = ["a", "b", "c", "a", "a", "c", "d", "a"];
// el = "a";
// var ans = [];
// var idx = arr.indexOf(el);
// while (idx != -1) {
//   ans.push(idx);
//   // idx+1 se search krna start krega
//   idx = arr.indexOf(el, idx + 1);
// }
// console.log(ans);

// 2️⃣ Array.lastIndexOf()

// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(animals.lastIndexOf("Dodo"));
// // expected output: 3

// console.log(animals.lastIndexOf("Tiger"));
// expected output: 1

// 4️⃣ Array.prototypes.includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// includes(searchElement);
// includes(searchElement, fromIndex);

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// expected output: true

// const pets = ["cat", "dog", "bat"];

// console.log(pets.includes("cat"));
// // expected output: true

// console.log(pets.includes("at"));

//important
// If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

// console.log(array1.includes(2, 5)); //false

// ❓
// [1, 2, 3].includes(2, -1000); //true
// ["vikky", "singh", "hii"].includes("singh", -1);

// i got the ans -1000 in next -1000+1,-999+1...... so on at one time -2 come at -2 2 is present

// 5️⃣ Array.prototype.find()
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
