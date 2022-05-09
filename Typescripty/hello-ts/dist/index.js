"use strict";
console.log("hello typescript");
// array in typescript
let ids = [1, 2, 3, 4, 5];
console.log(ids);
//tuple
// let tup:[number, string];
// tup=[1,"vikky"];
// console.log(tup);
// objects
// function addTwo(add:{a:number,b:number}):number{
//     return add.a+add.b;
// }
// const ans=addTwo({a:4,b:5}); 
// console.log(ans);
// optional property
// let a=10;
// a=20;
// console.log(a);
// const b=20;
// b=30; //we cannot reassign because it is onstant
const a = 6;
// Notice that the type of this variable is not number, it’s 6. TS is able to make a more specific assumption here, because:
// const variable declarations cannot be reassigned
// the initial value assigned to age is a number, which is an immutable value type
// Therefore, age will always be 6 in this program.
// let k=4; but in this case k:number type it is not a 4 because it is not fix it would not change in feauture
// The type 6 is called a literal type. 
// If our let declaration is a variable that can hold any number, the const declaration is one that can hold only 6 — a specific number.
// const arr=[{name:"vikky",rollno:36}];
const arr = [{ name: "vikky", rollno: 78 }];
console.log(arr);
