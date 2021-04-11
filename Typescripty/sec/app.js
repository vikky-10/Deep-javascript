// console.log("this is sec one  🚀");
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// const number1 = "5";
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
// 🔴 core types
// let x = "vikky";
// reassign
// x = "amit";
// but
//x=45; //here is the problem Type 'number' is not assignable to type 'string'
// const y = "hello vikky";
// y="vi";//Cannot assign to 'y' because it is a constant
// but here 🤔 we can reassign  how
// beacuse yobj of const type has a value as object and object are muttable
// 🏷️
// The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in case the content is an object, this means the object itself can still be altered. This means that you can't mutate the value stored in a variable:
// const obj = {foo: 'bar'};
// obj = {foo: 'baz'};
// TypeError: invalid assignment to const `obj'
// But you can mutate the properties in a variable:
// obj.foo = 'baz';
// obj; // Object { foo: "baz" }
// const yobj = {
//   foo: "hello",
// };
// yobj.foo = "koo";
//yobj.foo=45;//Type 'number' is not assignable to type 'string'
// let aa = [];
// aa.push(33);
// aa.push("abc");
// console.log(aa);
//  function greet(person: string, date: Date) {
//    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//  }
//  greet("Maddison", Date());
//  Huh? TypeScript reported an error on our second argument, but why?
// Perhaps surprisingly, calling Date() in JavaScript returns a string. On the other hand, constructing a Date with new Date() actually gives us what we were expecting.
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());
// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);
// We can write the same example again, this time using an interface to describe the requirement of having the label property that is a string:
// interface LabeledObj {
//   lable: string;
// }
// function foo(labeledObj: LabeledObj) {
//   console.log(labeledObj.lable);
// }
// let myobj = { size: 10, lable: "vikky singh" };
// foo(myobj);
// function add(n1, n2) {
//   if (typeof n1 !== "number" || typeof n2 !== "number") {
//     throw new Error("this is inncoreect");
//   }
//   return n1 + n2;
// }
// console.log(add("5", 45));
// union and intersection
// interface Car1 {
//   name: "bmw";
//   color: "white";
// }
// interface Car2 {
//   name1: "skoda";
//   color: "white";
// }
// declare let getcar: Car1 | Car2;
// console.log(getcar.color);
// interface Bird {
//   fly(): void;
//   layEggs(): void;
// }
// interface Fish {
//   swim(): void;
//   layEggs(): void;
// }
// declare function getSmallPet(): Fish | Bird;
// var pet = getSmallPet();
// pet.layEggs();
// Only available in one of the two possible types
// pet.swim();
var cars, _a = void 0,  = _a.name,  = _a["skoda"],  = _a.color,  = _a["red"];
console.log(cars);
