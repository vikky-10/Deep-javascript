console.log('🔥 arrays');

//1️⃣ The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end

// slice();
// slice(start);
// slice(start, end);

//start==>include
//end ==> not include

// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr.slice());//default 0 as argument
//["a", "b", "c", "d", "e", "f"]
// console.log(arr.slice(2));
// console.log(arr.slice(2, 5));

// A negative index can be used
// console.log(arr.slice(-0));//whole element

//If end is omitted, slice extracts through the end of the sequence (arr.length).
// console.log(arr.slice(-1));
// console.log(arr.slice(-4, -1)); //["c", "d", "e"];

//If start is greater than the index range of the sequence, an empty array is returned.
// console.log(arr.slice(100));
// console.log(arr.slice(-100)); //['a', 'b', 'c', 'd', 'e','f']

// In the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object myHonda. When the color of myHonda is changed to purple, both arrays reflect the change.

// let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// let newCar = myCar.slice(0, 2);

// console.log("myCar = " + JSON.stringify(myCar));
// console.log("newCar = " + JSON.stringify(newCar));
// console.log("myCar[0].color = " + myCar[0].color);
// console.log("newCar[0].color = " + newCar[0].color);

// myHonda.color = "purple";
// console.log("The new color of my Honda is " + myHonda.color);

// Display the color of myHonda referenced from both arrays.

// console.log("myCar = " + JSON.stringify(myCar));
// console.log("newCar = " + JSON.stringify(newCar));
// console.log("myCar[0].color = " + myCar[0].color);
// console.log("newCar[0].color = " + newCar[0].color);

// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(...arr); //a,b,c,d,e,f
// console.log([...arr]);//["a", "b", "c", "d", "e", "f"];

/*------------********---------*/

//2️⃣ splice same as slice but is mutate the original array

//The splice() method adds/removes items to/from an array, and returns the removed item(s).

//splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr.splice()); //[]
// console.log(arr);
// console.log(arr.splice(2)); //[ 'c', 'd', 'e', 'f' ]
// console.log(arr); //[ 'a', 'b' ]
// console.log(arr.splice(1, 1, "c", "d", "e", "f")); //[ 'a', 'c', 'd', 'e', 'f' ]
// console.log(arr);
// console.log(arr.splice(1, 0, "b")); //[]
// console.log(arr); //["a", "b", "c", "d", "e", "f"];

// console.log(arr.splice(arr.length - 1));
// ["f"];
// console.log(arr);//[ 'a', 'b', 'c', 'd', 'e'

// let Months = [
//   "jan",
//   "march",
//   "feb",
//   "june",
//   "april",
//   "july",
//   "may",
//   "December",
// ];
// let pendingmonths = ["aug", "sep", "oct", "nov"];

// ------****----------
//:3️⃣ The reverse() method reverses an array
//mutate the original array

// const array1 = ["one", "two", "three"];
// console.log("array1:", array1);
// // expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log("reversed:", reversed);
// // expected output: "reversed:" Array ["three", "two", "one"]

// // Careful: reverse is destructive -- it changes the original array.
// console.log("array1:", array1);
// expected output: "array1:" Array ["three", "two", "one"]

// --------**********---------

//4️⃣ concat
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
// console.log(array3);

// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers);
// // results in [[1], 2, [3]]

// // modify the first element of num1
// num1[0].push(4);

// console.log(numbers);
// // results in [[1, 4], 2, [3]]

// const array1 = ["a", "b" y2]);//[ 'a', 'b', 'c', 'd', 'e', 'f' ]

// const arr = new Array("vikky", "singh", 11903549, { active: true });
// console.log(arr);

//5️⃣ filter() very very important

//The filter() method creates a new array

// Arrow function
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const result = words.filter((word) => word.length > 6);

// console.log(result); //[ 'exuberant', 'destruction', 'present' ]

// const result1 = words.filter((word) => word.length > 19);

// console.log(result1); //[]

//6️⃣ array.sort

// //bug beacuse sort method convert it to string then compare
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// let Months = [
//   "jan",
//   "march",
//   "feb",
//   "june",
//   "april",
//   "july",
//   "may",
//   "December",
// ];
// let pendingmonths = ["aug", "sep", "oct", "nov"];

// let fa = Months.concat(pendingmonths);
// console.log(fa);
// [
//   "jan",
//   "march",
//   "feb",
//   "june",
//   "april",
//   "july",
//   "may",
//   "December",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
// ];

// ----****--

//feb-march swap
// fa.splice(
//   fa.indexOf("feb"),
//   1,
//   fa.splice(fa.indexOf("march"), 1, fa[fa.indexOf("feb")])[0]
// );
// console.log(fa);

// ---****---

// function for reuse

// var swapArrayElements = function (a, x, y) {
//   if (a.length === 1) return a;
//   a.splice(y, 1, a.splice(x, 1, a[y])[0]);
//   return a;
// };

////feb-march swap
// swapArrayElements(fa, fa.indexOf("feb"), fa.indexOf("march"));

// console.log(fa);

// without [0]
// [
//   "jan",
//   "feb",
//   ["march"],
//   "june",
//   "april",
//   "july",
//   "may",
//   "December",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
// ];

// [
//   "jan",
//   "feb",
//   "march",
//   "june",
//   "april",
//   "july",
//   "may",
//   "December",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
// ];

// june april swap
// swapArrayElements(fa, fa.indexOf("june"), fa.indexOf("april"));
// console.log(fa);
// [
//   "jan",
//   "feb",
//   "march",
//   "april",
//   "june",
//   "july",
//   "may",
//   "December",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
// ];
// may - june swap
// swapArrayElements(fa, fa.indexOf("june"), fa.indexOf("may"));
// console.log(fa);

// [
//   "jan",
//   "feb",
//   "march",
//   "april",
//   "may",
//   "july",
//   "june",
//   "December",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
// ];
// july - june swap
// swapArrayElements(fa, fa.indexOf("june"), fa.indexOf("july"));
// console.log(fa);
// [
//   "jan",
//   "feb",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "December",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
// ];

//adding dec at last
// fa.splice(fa.indexOf("December"), 1);
// fa.splice(fa.length, 0, "December");

// console.log(fa);
// [
//   "jan",
//   "feb",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
//   "December",
// ];

//deleting all element
// const ans = fa.splice(0, Infinity);
// console.log(fa);//[]
// console.log(ans);

// unique Array elements
const arr = [1, 2, 1, 2, 4, 4, 1];
const set = new Set(arr);
const uniquiItem = [...set];
console.log(uniquiItem); //print uniquiItem of each elements
