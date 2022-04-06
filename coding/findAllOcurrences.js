// find all the occurrences of an element

const arr = ["a", "b", "a", "c", "a", "d"];
const ele = "a";
// const ans = arr.map(function allidx(element, index) {
//   if (element === ele) {
//     return index;
//   }
// });
// console.log(ans); //[ 0, undefined, 2, undefined, 4, undefined ]

// const ans = arr
//   .map(function allidx(element, index) {
//     if (element === ele) {
//       return index;
//     }
//   })
//   .filter(function elemenateUndefined(element) {
//     return element !== undefined;
//   });
// console.log(ans);

var teacher = "kyle";
{
  let teacher = "suzzy";
  console.log(teacher);
}

console.log(teacher);

// keep in mind block are not scope
//until we declar a varible using let and const

//clouser

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction(); //1
myNewFunction(); //2
const anotherFunction = outer();
anotherFunction(); //1
anotherFunction(); //2
