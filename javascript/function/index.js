console.log('🔥 functions');

//function declation that can be used before it's declation
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// function expression essentially function value is stored in the variable and return keywoard is must
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const calcAge = birthYear => 2037 - birthYear;

//one drow back of arrow function this not have this keyword

function coppyArrayMultiplication(array, instruction) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }
  return output;
}
const result = coppyArrayMultiplication([1, 2, 3], input => input * 2);
console.log(result);
