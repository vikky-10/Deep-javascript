console.log('🔥 object....');

// const person = {
//   firstName: "vikky",
//   lastname: "singh",
//   age: 2037 - 2014,
//   job: "teacher",
//   friends: ["amit", "sumit", "ankit"],
// };
// console.log(person);
// console.log(person.firstName);

// Property of js object is also be accessed or set using a bracket notation
//object are sometimes called associative array
// console.log(person["firstName"]);
// let obj = "Name";
// console.log(person["first" + obj]);

// An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string.

// However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation.

// const object = {
//   name: "vikky",
// full name:"vikky singh"//error
// };
// object["full name"] = "vikky singh"; //allow

// object.type = "boolean";
// object[""] = "kola";
// let rand = Math.random();
// object.randam = rand;
// console.log(object);

// {
//   name: 'vikky',
//   'full name': 'vikky singh',
//   type: 'boolean',
//   '': 'kola',
//   randam: 0.17308927829122212
// }

// Please note that all keys in the square bracket notation are converted to string unless they're Symbols,

// object["$"] = "khokho";
// console.log(object);

// undefine return when we access the property who doesn't exist
// console.log(object.age); //undefine
// undefine is falsy value

// . dot=> member access
// [] => computed member access
// both haing same precedence
// left to right

//---object methods---***

// const jones = {
//   firstname: "vikky",
//   lastname: "singh",
//   birthYear: 2001,
//   job: "student",
//   friends: ["Michel", "Peter", "Steven"],
//   hasDriversLicense: false,

// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

//this
// calcAge: function () {
//   console.log(this);
// output: it contain whole jones object
//this pointed to caller
//this pointed to jones

// {
//   firstname: 'vikky',
//   lastname: 'singh',
//   birthYear: 2001,
//   job: 'student',
//   friends: [ 'Michel', 'Peter', 'Steven' ],
//   hasDriversLicenses: false,
//   calcAge: [Function: calcAge]
// }

//   return 2021 - this.birthYear;
// },

// -----====--------
// this can also use to add new property
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   getsummary: function () {
//     return `${this.firstname} is a ${this.calcAge()} old ${
//       this.job
//     }, and he has a ${this.hasDriversLicenses ? "a" : "no"} driver's licence`;
//   },
// };
// console.log(jones.calcAge(2001)); //36
// console.log(jones["calcAge(2001)"]); //undefine
// console.log(jones["calcAge"](2014)); // 23
// keep in mind inside the braket string pass
// console.log(jones.birthYear);//2001

// console.log(jones.calcAge()); //20

// console.log(jones.calcAge());//20
// console.log(jones.age);//20 new age property

// console.log(jones.getsummary());

//improvment
// let biodata = {
//   firstname: 'vikky',
//   lastname: 'singh',
//   myAge: 20,
//   //   getData: function () {
//   //     console.log(`my name: ${biodata.firstname} and my age is ${biodata.myAge}`);
//   //   },
//   //without function keyword
//   getData() {
//     console.log(`my name: ${biodata.firstname} and my age is ${biodata.myAge}`);
//   },
// };
// biodata.getData();

// let biodata = {
//   name: {
//     firstname: 'vikky',
//     lastname: 'singh',
//     status: 'active',
//   },

//   myAge: 20,
//   getData() {
//     console.log(`my name: ${biodata.firstname} and my age is ${biodata.myAge}`);
//   },
// };
// biodata.getData();
// console.log(biodata.name.status);
// 🔢
//👲 this object ==> it contains the current context
// console.log(this);//window object se bilong kr rha hai abhi beacuse window is the gloable object

// it means window ke property ko access kr skta hai

// console.log(this.alert('vikky'));
//------***----
//------***----
//------***----
// function myfunc() {
//   console.log(this);//abhi bhi this ka context window he hai na ke function keep in mind
// }
// myfunc();
//------***----
//------***----
//------***----
// var myname = 'vikky';
// function myfunc() {
//   console.log(this.myname);//vikky kuki this global ko bilong kr rha hai aur variable bhi gloable hai
// }
// myfunc();
//------***----
//------***----
//------***----
// const obj = {
//   myage: 20,
//   myname() {
//     console.log(this); //obj object { myage: 20, myname: [Function: myname] }
//   },
// };
// obj.myname();

//------***----
//------***----
//------***----
//challenge v.v.imp
//output of
//arrow function
//this object ko use in kr skte in arrow function
// const obj = {
//   myage: 20,
//   myname: () => {
//     console.log(this);//window object 🤔
//   },
// };
// obj.myname();
