// var name = {};
// name.firstname = "mr vikky";
// name.lastname = "singh";
// console.log(name);
// var who = name.firstname;
// console.log(who);
// name.firstname = "amit";
// var who = name.firstname;
// console.log(who);
// console.log(name);

// // keep in your mind inside the [] it should string
// console.log(name["lastname"]);

// //dot operator
// console.log(name.firstname);

// //keep in your mind 🤔 after dot it should we identifier
// console.log(name._);

// // this is valid
// console.log(name[0]);

// function as a key
var obj = {};
obj[function () {}] = false;
obj[
  (() => {
    return 3;
  })() // anonmunus function call
] = false;

console.log(obj); //{ '3': false, 'function () {}': false }
console.log(typeof Object.keys(obj)[0]); //"string"
console.log(typeof null); //object

// javascript array are object
var person = [, 10];
console.log(typeof person);
console.log(person.length);

// using dot to assign in a array
person.name = "vikky";
person.lastname = "singh";
person[0] = "lazy";
// 🤯 interesting person.legth is 2 not 4
console.log(person.length);
console.log(person); //[ 'lazy', 10, name: 'vikky', lastname: 'singh' ]
