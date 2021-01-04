console.log(" 🔥 ==&&===");
// == use when you know types(with coercion)
// === use when you confuse or don't know the types(no  coercion)
//  double equals (==) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);
// triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) Neither value is implicitly converted to some other value before being compared; if the types differ, false is returned.
// Object.is does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values).

//  🏷️ If Type(x) is different from Type(y), return false.
// console.log(typeof NaN); //number
// console.log(typeof null); //object
// console.log(NaN === 4); //FASLE

// console.log(4 === 4); //true
// console.log(-0 === -0); //true
// console.log("" === ""); //true
// console.log(typeof {});//object

//  🤔 Beacause both are different object
// console.log({} === {});//false
// console.log(null === {});//false
// 🔴 point to be noted
// var x1 = {};
// var x2 = x1;
// var x3 = {};
// console.log(x1 === x2); // true beacuse here the same refrence
// console.log(x1 == x2); // true beacuse here the same refrence
// console.log(x1 === x3); // false they are different object
// console.log(x1 == x3); // false they are different object
// //  😮 oops! here 👇 is the corner cases
// it  don't care about the difference between +0 and -0, strict equality treats them as the same value.
// console.log(0 === -0); //true
// console.log(-0 === 0); //true
// console.log(NaN === NaN); //FALSE
// console.log(0 == -0);//true  // because type coversion is their

// 🔴 two string are equal  when they have the same sequence of characters, same length, and same characters in corresponding positions.
// console.log("vik" == "vikk"); //false
// console.log("vik" === "vikk"); //false
// console.log("vik" === "ikv"); //false

// console.log(NaN == undefined);//false
// console.log(NaN === undefined);//false
// console.log(NaN == NaN);//false

// 🏷️   😮 important concept

// var x = new String("0");
// console.log(typeof x); //object

// var y = "0";
// console.log(typeof y); //string
// console.log(x === y); //false
// // but "==" give true due to coercion
// console.log(x == y); //true

//  👉console.log(null == undefined); //true because null and undefine both are coercivly equal to each other
// console.log(null === undefined); //false

// var workshope1 = { topic: null };
// var workshope2 = {};
// if (
//   (workshope1.topic === null || workshope1.topic === undefined) &&
//   (workshope2.topic == null || workshope2.topic === undefined)
// ) {
//   console.log("heyy");
// }
// if (workshope1.topic == null && workshope2.topic == null) {  // here corecion work
//   console.log("hey");
// }

// 🔴 if typeof(x) is number and typeof(y) id string then "==" x==ToNumber(y)
// and vice versa.

// var workshoperoll1 = 16;
// var workshoproll2 = workshoperoll1.valueOf();
// console.log(typeof workshoproll2);
// if (Number(workshoperoll1) === Number(workshoproll2)) {
//   console.log("hii ");
// }
// if (workshoperoll1 == workshoproll2) {
//   console.log("yo-yo");
// }
// console.log(typeof undefined);
// 🏷️ question only case when(x!==y);
// ans NaN

// console.log(typeof null);//object
// console.log(typeof undefined); //undefine

// double equal go to coercion when types are different. 👍 "=="
// ----***--- types(x)==types(x)---****--true
// ------**** type(x)is number and type(y) is string  so coercion this and vice versa--***--(x==!Tonumber(y) )👈
//-------*******coercive equality is only premitive ok----*****-
// if type(x)is either string number or symbol and type(y) is  object return the result of
// x==ToPrimtive(y)
// ----*** nullor undefine true---***
// same type ""==="" triple equal
// prefer number

// console.log(5 == "vik"); //false
// console.log(5 == "5"); //true because value are equal :conclude if the values are equal and types are unqual then it try to coerce the string
// var x = "5";

// console.log(5 === x); //false value are equal but types are not

// oop! this is but not use anywere but coercion do.
// var x = 42;
// var y = [42];
// console.log(x == y);
// step it change
// (42=="42")
// (42===42)//===because types equal

// ---*** corner case '==' ----*****
// console.log([] == ![]); //WAT! //TRUE
// // ([]==false)
// // (""==false)
// // (0==false)
// // (0===0)
// console.log([] != []); //WAT!//TRUE
// (!([]==[]))
// (!(false))
// (true)

// ------ 🔥 summery when use "==" and when not 🔥----------\\
// ----***************Avoid******-----------
//   1. == with 0or ""(or even" ") either side
//    2. == with non-primitives
//   3. ==true or ==false:allow ToBoolean or use ===

// many people say == to all about comparisons b/t unknown types
// if you know type are equal then == to identical to triple equal.

// if you know the type you defnatly use "==" because it is faster than "==="
 


// ------****** 🔥 "===" 🔥******---------\\
// use when you don't know the type
