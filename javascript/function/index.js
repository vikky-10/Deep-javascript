console.log("🔥 functions");

//function declation that can be used before it's declation
function calcAge(birthYear) {
  return 2037 - birthYear;
}

// function expression essentially function value is stored in the variable and return keywoard is must
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const calcAge = (birthYear) => 2037 - birthYear;

//one drow back of arrow function this not have this keyword
