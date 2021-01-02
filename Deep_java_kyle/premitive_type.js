// ♻️ console.log("primitive");

// Refer for more 📓 https://developer.mozilla.org/en-US/docs/Glossary/Primitive
// 📓 https://static.frontendmasters.com/resources/  2019-03-07-deep-javascript-v2/deep-js-foundations-v2.pdf   👨‍🎓

// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 6 primitive data types : 👉 string, number, bigint, boolean, undefined, and symbol. There also is null, which is seemingly primitive, but indeed is a special case for every Object: and any structured type is derived from null by the Prototype Chain.

//  📓 All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

// Using a string method doesn't mutate the string
// var bar = "baz";
// console.log(bar); // baz
// bar.toUpperCase();
// console.log(bar); // baz

// // Using an array method mutates the array
// var foo = [];
// console.log(foo); // []
// foo.push("plugh");
// console.log(foo); // ["plugh"]

// // Assignment gives the primitive a new (not a mutated) value
// bar = bar.toUpperCase(); // BAZ
// console.log(bar);

// 🏷️BigInt 🌉
// const value = 10n;
// const val = BigInt("45687");
// console.log(typeof value);
// console.log(val);

// important one   BigInt is not strictly equal to a number but is loosely
// console.log(0n === 0); //false
//console.log(0n === 0n);//true
// console.log(0n == 0); // true
// // compared
// console.log(2n > 2);//false
// console.log(2n >= 2);//true for equal
// console.log(2n < 6);//true
// console.log(2 * 2);//mult
// console.log(2 ** 3);//power

//undefined and undeclared  and uninitialized
// console.log(a);  // case 1 🤜 if we log any undeclared value it throw an error know as ReferenceError with  👨‍🦯"var"

//case 2 🔭
// console.log(a); //undefine
// var a;
// console.log(typeof a);  //undefine

// tdz 🔴("temporal dead zone" )is come with let
// console.log(foo);
// console.log(typeof foo); //Using the typeof operator for a let variable in its TDZ will throw a ReferenceError:
// let foo;

// 🏷️ NaN and isNaN
// This topic can get very confusing, but overall remember that NaN is a value of type Number; it usually appears when a Math method calculation fails, and its comparison to itself is false (NaN == NaN = false). There's a function called isNaN() that coerces the parameter to a number before comparing against NaN. To have a more robust solution, ES6 brought in Number.isNaN() that returns whether a parameter is NaN without going through any forceful coercion.
// Finally, if you'd like to check if a certain value "is not a number" instead of NaN, don't use isNaN(), simply use typeof variable !== 'number'.

// TYPE OF NaN
//console.log(typeof NaN); //number

// NaN is the only value in JavaScript that when compared to itself returns false.
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// // NaN is seen when math function fail
// console.log(Math.sqrt(-1));
// console.log(Math.sqrt(4));
// var a;
// console.log(a / 9); //NaN
//console.log(isNaN(a)); //true

// You may be confused again. 'vikky' and ' ' are both strings. Why is the former considered NaN and the latter not?   😕 oops!

// console.log(isNaN("vikky")); // true
// console.log(isNaN("")); //false
// what is fact 🤦 // this is backend of isNaN
// function isNan(arg) {
//   let coercedValue = Number(arg);
//   return coercedValue != coercedValue; // if it return true it means NaN
// }

//keep in mind 👿
// except number all value under Number converted to NaN
// console.log(Number("5"));
// console.log(Number(""));//NaN
// console.log(Number("vikky"));//NaN
// console.log(Number("_"));//NaN
// console.log(Number("$"));//NaN
// console.log(Number("vik458"));//NaN

// let x = 10;
// console.log(isNaN(x)); //false

// 🏷️ES6
// This is a relatively new feature specified in ECMAScript 2015 (ES6) and brings one major difference from the regular isNaN(): 👉the argument doesn't get forcefully coerced. This means that this function now compares if the value passed (as is) is NaN.

//What happens here is that in the first case, the function isNaN() tries to forcefully coerce 'lalala' into a number. As a result of a failed calculation, NaN is returned and then it is checked against NaN, returning true.
// However, in the second case, the function Number.isNaN() doesn't try to forcefully convert the parameter to a number. Instead, it simply checks whether the input value is NaN or not.
// console.log(isNaN("vikky"));  //true
// console.log(Number.isNaN("vikky"));// false

//  🏷️Negative zero
// var trendRate = -0;
// // console.log(trendRate === -0); //true
// console.log(trendRate === 0); // true 😳oops!
//es6 comes 🧪
// console.log(Object.is(trendRate, -0)); //true
// console.log(Object.is(trendRate, 0)); //false

// trendRate = trendRate.toString();
// console.log(trendRate); //😮 "0" where is negative sign
// console.log(trendRate === "0");

// 🏷️ Math.sign()
console.log(Math.sign(-3)); //-1
// console.log(Math.sign(1)); //1
// // 👇 here the confusion start for -0 => -0 and 0 =>0
// console.log(Math.sign(-0)); //-0
// console.log(Math.sign(0)); //0

//for fixing it make your own function
//one line code project
// function sign(v){
//    return v!==0?Math.sign(v):Object.is(v,-0)?-1:1;
// }

// 🔴 two corner cases for === NaN and -0
