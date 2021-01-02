console.log(" 🚀 Abstract operations");

// 1️⃣ coercion or type conversion

// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).

//  🔴  Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

// 🏷️ coercion

//  here javascript have a choice to choose between number ans string and javascript choose 😭 string
// const value1 = "5";
// const value2 = 9;
// let sum = value1 + value2;

// console.log(sum); //59

// 🏷️ type conversion or typecasting
// Type conversion (or typecasting) means transfer of data from one data type to another.
//  🥇 Implicit conversion happens when the compiler automatically assigns data types

// 5 + null    // returns 5         because null is converted to 0
// "5" + null  // returns "5null"   because null is converted to "null"
// "5" + 2     // returns "52"      because 2 is converted to "2"
// "5" - 2     // returns 3         because "5" is converted to 5
// "5" * "2"   // returns 10        because "5" and "2" are converted

// But the source code can also explicitly require a conversion to take place. For example, given the instruction 5+2.0, the floating point 2.0 is implicitly typecasted into an integer, but given the instruction Number("0x11"), the string "0x11" is explicitly typecasted as the number 17.

// console.log(Number(new Date())); // convert date to number
// getTime() does the same work
// console.log(new Date().getTime()); // convert date to number

// The global method Number() can convert strings to numbers.

// console.log(Number("3.14")); //3.14
// console.log(Number("0xaf")); //175

//Empty strings convert to 0.
// console.log(Number("")); //0
// console.log(Number(" ")); //0

// Anything else converts to NaN (Not a Number).
// var x = {};
// console.log(Number(x)); //NaN
// console.log(Number("."));

//whitespace ans leading 0
// console.log(Number(" 0009 ")); //9

// decimal like 0.
// console.log(Number("0.")); //0

// for uniq one
// console.log(Number(null)); //0
// console.log(Number(false)); //0
// console.log(Number(true)); //1
// console.log(Number(undefined)); //NaN

// 🏷️ To primtive
// ✔️ For any non-primitive(function,array,object), ToPrimitive invokes two methods: valueOf() and toString(). Depending upon the hint passed, valueOf() followed by toString() is invoked for the ‘number’ hint , and vice versa for “string”.

// 🔴ToPrimitve operation takes two arguments: input and hint(optional). If you are performing a numeric operation, the hint will be a 'number' type. And for string operation (like concatenation), the hint passed will be a string. Note that ToPrimitive is a recursive operation which means that if the result of invoking ToPrimitive is not a primitive, it will invoke again until we can get a primitive value or an error in some cases

// 🔴Every non-primitive can have two methods available: toString and valueOf. If 'number' hint is sent, valueOf() method is invoked first. And if we get a primitive type from the result then we are done. But if the result is again a non-primitive, toString() gets invoked. Similarly, in the case of 'string' hint type, the order of these operations is reversed. If the invocation of these two operations doesn't return a primitive, generally it's a TypeError.

// 🏷️ ToPrimitive Abstract Operation

// // hint: "number"
// valueOf()
// toString()

// // hint: "string"
// toString()
// valueOf()

// console.log([].valueOf()); //[] witch is not premitive so perform tostring() operation
// console.log([].toString()); //empty string ""
// [] + 5; // ToPrimitive is invoked on []
// "" + 5;
// "" + "5";
// "5"   🌱

// []+[]
// ""+""
// ""
// *******
// []+{}
// ""+"[object object]"
// "[object object]"
// ************************

// 🏷️ ToNumber
// 🔴Whenever a non-number value is supplied in an operation where a number was expected, such as a mathematical operation, ES2020 defines a ToNumber abstract operation in section 7.1.3.
console.log(1 < 2 < 3); //true                     // 👇
// //(1<2)<3                              true ->        1
// //true<3
// 1<3                                 false ->       0
//                                     undefined ->   NaN (not a valid number)
//                                     null ->        0
//

// ⁉️ 😮oops!
console.log(3 > 2 > 1); //false 👆 oops!  this is not true math point of vew
//(3>2)>1
// true>1
// 1>1
// false ✔️
//  🏷️ Boolean
//  falsy
//     ...
//    0,-0
//    null
//    NaN
//    false
//    undefined
// EXCEPT THIS FALSY VALUE ALL ARE TRUE
