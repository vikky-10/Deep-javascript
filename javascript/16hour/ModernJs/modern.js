//without strict mode.
// let hasItem = false;
// const pass = true;
// if (pass) hasitem = true; //no error
// if (hasItem) console.log("yppp...");

'use strict';
//with strict mode.
// let hasItem = false;
// const pass = true;
// if (pass) hasitem = true; // error
// if (hasItem) console.log("yppp...");

// const interface = "vikky"; //error  interface is reserve word

// const ans = age(20);
// console.log(ans);

// function age(age) {
//   return age;
// }
// const ans1 = age(10);
// console.log(ans1);

// error
// const res = ans(5);
// console.log(res);

// const ans = function (age) {
//   return age;
// };

//flat an array
// const arr = [
//   [1, 2, 3],
//   ['a', 'b', 'c'],
//   [1425, 'adf', 'asd14as'],
//   ['adsfad', ['asd', 155, 'asdf']],
// ];

//by default it flates array up to one level
// console.log(arr.flat());

//add parameter to flat array up to which level you want
//add infinit to flate all level
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

// arr.flat(2).map(e => console.log(e));
//this is also flat only one level
// arr.flatMap(e => console.log(e));

// // without flat method
// //only one level flat
// arr.reduce((acc, el) => acc.concat(el));

//enteries
// const person = { name: 'vikky', lastname: 'singh' };
// console.log(Object.entries(person));
//[ [ 'name', 'vikky' ], [ 'lastname', 'singh' ] ]
// console.log(Object.keys(person));//[ 'name', 'lastname' ]

//how to get it to object back

// const person = { name: 'vikky', lastname: 'singh' };
// let arrObjject = Object.entries(person);
// console.log(arrObjject);
//[ [ 'name', 'vikky' ], [ 'lastname', 'singh' ] ]
// console.log(Object.fromEntries(arrObjject));
//{ name: 'vikky', lastname: 'singh' }
