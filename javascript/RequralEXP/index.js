console.log('🔥 Regular expresstion....');
// console.log(a);
// function add() {
//   var a = 20;
//   console.log(a);
// }
// console.log(a);//undefined
// add(); //undefined
// console.log(a);//undefined
// var a = 10;
// console.log(a);//10
// console.log(a); //undefined
//---**---
//---**---
//---**---
// var a;
// a = 10;
// function add() {
//   var a = 20;
//   console.log(a); //20
// }
// add();
// {
//   var a = 50;
// }
// console.log(a); //50
// console.dir(add);//print dir of whole function
//---**---
//---**---
//---**---

// var a;
// a = 10;
// function add() {
//   a = 20;
//   var b = 10; //local scope
//   console.log(a); //20
// }
// add();
// console.log(a); //20 a is global
// console.log(b);//error b is not defined

//---**---
//---**---
//---**---

// console.log(k);//error k is not defined
// k = 78;
// var c = 45; //global
// var a; //global
// a = 10;
// function add() {
//   a = 20;

//   console.log(a); //20
//   console.log(c); //45
// }
// add();
// console.log(c); //45
//---**---
//---**---
//---**---
// var a = 10;
// function add() {

//   console.log(a);//undefined
//   var a = 20;
//   console.log(a);//20
// }
// add();
//---**---
//---**---
//---**---
// var a = 10;
// function add() {
//   console.log(a); //10
//   a = 20;
//   console.log(a); //20
// }
// add();
//---**---
//---**---
//---**---
a = 10;
function add(a) {
  console.log(a); //30
  a = 20; //local wala hai jo mne pass kiya hai
  console.log(a); //20
}
add(30);
console.log(a); //10
// var a = 10;
// function add() {
//   console.log(a); //10
//   a = 20;
//   console.log(a); //20
// }
// add();
// console.log(a); //20
