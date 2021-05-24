// 🏷️ oop!
//  🏷️ class and object ,inheritance,encapsulation
//  🔴  Object– An Object is a unique entity which contains property and methods.
//  🔴 oop an enormously popular paradigm for structuring our complex code. 1️⃣ easy to add features and functionality. 2️⃣ easy for us and other developer to reason about(a clear structure). 3️⃣ performance(efficient in terms of memory)

// using object literal
// let person = {
//   first_name: "vikky",
//   last_name: "singh",
//   // methods
//   getFunction: function () {
//     return `my name is ${person.first_name} ${perso.last_name}`;
//   },
//   phone_number: { mobile: "14523652", landline: "1478526" },
// };
// console.log(person.getFunction());
// console.log(person.phone_number.landline);

// using object constructor
// function person(first_name, last_name) {
//   this.first_name = first_name;
//   this.last_name = last_name;
// }
// let person1 = new person("vikky", "singh");
// let person2 = new person("rohit", "singh");
// console.log(person1.first_name);
// console.log(`person2 first_name is ${person2.first_name}`);

// using object.create()
// Object.create() example a
// simple object with some properties
// const coder = {
//   isStudying: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I
//           studying?: ${this.isStudying}.`);
//   },
// };
// // Object.create() method
// const me = Object.create(coder);

// // "name" is a property set on "me", but not on "coder"
// me.name = "Mukul";

// // Inherited properties can be overwritten
// me.isStudying = "True";

// me.printIntroduction();

// classe:Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation.

//  🔴// Defining class using es6
// class Vehicle {
//   constructor(name, maker, engine) {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
//   }
//   getDetails() {
//     return `The name of the bike is ${this.name}.`;
//   }
// }
// // Making object with the help of the constructor
// let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
// let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

// console.log(bike1.name); // Hayabusa
// console.log(bike2.maker); // Kawasaki
// console.log(bike1.getDetails());

// empty object
// const empty = Object.create(null);

// console.log(empty);

//    Prototype and Prototype chain

// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }
// const userFunctionStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log("You're loggedin");
//   },
// };
// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// user1.increment();
// user2.increment();
// console.log(user1.score);
// console.log(user2.score);

// 🏷️ getter and setter
// getter==> access property
// setter==>changee(mutate) them
const person = {
  firstname: "vikky",
  lastname: "singh",
  get fullname() {
    return `${person.firstname} ${person.lastname}`;
  },
  set fullname(value) {
    const parts = value.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  },
};
// console.log(person.fullname());

person.fullname = "arjunb singh"; //this is not allow without setter
console.log(person.fullname); //this is not allow without getter fullname()
console.log(person.firstname);
console.log(person);
