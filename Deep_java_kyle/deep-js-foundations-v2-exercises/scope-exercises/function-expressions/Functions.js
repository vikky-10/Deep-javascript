"use strict";

console.log("let begain with es6 functions :)");

// Array.prototype.find()
/*
find() method returns the first element 
in the provided array that satisfies the
 provided testing function. if not values 
satisfy the testing function, undefined is returned
*/

// TODO
const array = [5, 12, 8, 130, 44];
const found = array.find(function founder(element) {
  return element > 10;
});

// if you need the Index of the found Element in the array use
// findIndex()

const index = array.findIndex(function indexOfElement(element) {
  return element > 10;
});

// find the index of value
/*
indexOf() method returns the first index at
which a given element can be found in the array
or -1 if it id not present
*/

/***********
 * 
 * 
 * Parameters
searchElement
Element to locate in the array.

fromIndex Optional
The index to start the search at
. If the index is greater than or equal
 to the array's length, -1 is returned, 
 which means the array will not be searched.
If the provided index value is a
negative number, it is taken as the 
 offset from the end of the array.
Note: if the provided index is negative,
the array is still searched from front
 to back. 
 If the provided index is 0, 
 then the whole array will be searched.
  Default: 0 (entire array is searched).
*
*
*/

/***********
 *
 * indexOf() compares searchElement to element of the array
 * using strict equalit(the same method used by the === or triple equals opeator)
 *
 *
 */

const array1 = [2, 9, 9];
array1.indexOf(2); // 0
array1.indexOf(7); // -1
array1.indexOf(9, 2); // 2
array1.indexOf(2, -1); // -1
array1.indexOf(2, -3); // 0

console.log(found); //12
console.log(index); //1

// var teacher="kyle";
// function ask(question){
//   console.log(teacher,question);
// }

// function otherClass(){
//   var teacher="vikky";
//   ask("why?");

// }

// otherClass();

// var teacher = "Kyle";
// function anotherTeacher() {
//   var teacher = "vikky";
//   console.log(teacher);
// }
// anotherTeacher();
// console.log(teacher);

// IIFE

// var teacher = "Kyle";
// function anotherTeacher() {
//   var teacher = "vikky";
//   console.log(teacher);
// }
// anotherTeacher();

// or question is why this is not a function definition
// why it is function expression
// 1) beacuse it not start with function keyword it start with (

// (function anotherTeacher() {
//   var teacher = "vikky";
//   console.log(teacher);
// })();
// console.log(teacher);

// keep in mind iife is expression

// const
var teacher = "vikky";
teacher = "kyle";
const myTeacher = teacher;
myTeacher = "suzzy"; //typeError
const teacher = ["kyle", "vikky"];
teacher[1] = "brian"; //allow

//use const in immutable things like const var;
// like string number , boolean (primitive immutable value)

//Hoisting

// student; //?? undefined
// teacher; //?? undefined
// var student = "you";
// var teacher = "kyle";

//-----********************************

// student = "you";
// teacher = "kyle";

// console.log(student); //?? you
// console.log(teacher); //??  kyle
// var student;
// var teacher;

var teacher = "kyle";
otherTeacher(); //function is hoisted on the top so teacher
//is not defined at that time
function otherTeacher() {
  console.log(teacher); //undefined
  var teacher = "vikky";
}

teacher();
otherTeacher();

function teacher() {
  console.log("kyle");
}
var otherTeacher = function () {
  console.log("Suzy");
};

// keep in mind in when using arrow function
//because what happen after hoisting
function teacher() {
  console.log("kyle");
}

var otherTeacher;
teacher(); //Kyle
otherTeacher(); //TypeError
otherTeacher = function () {
  console.log("Suzy");
};

// var hoisting vs function hoisting

teacher = "kyle";
var teacher;

getTeacher();
function getTeacher() {
  console.log(teacher);
}

("let doesn't hoist");

{
  teacher = "kyle";
  let teacher;
}

/*

The final salient difference between 
let / const and var is that 
if you access var before it's declared,
 it is undefined. 
 But if you do the same for let
  and const, they throw
   a ReferenceError.
   */

console.log(varNumber); // undefined
console.log(letNumber); // Doesn't log, as it throws a ReferenceError letNumber is not defined

var varNumber = 1;
let letNumber = 1;
