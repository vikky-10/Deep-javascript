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

var teacher = "Kyle";
function anotherTeacher() {
  var teacher = "vikky";
  console.log(teacher);
}
console.log(teacher);
anotherTeacher();
