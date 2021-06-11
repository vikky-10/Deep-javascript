console.log("Lets begin");

// The typeof operator returns a string indicating the type of the unevaluated operand.
// console.log(10 + "20");
// console.log(9 - "5");//bug
// console.log("java" + "script");
// console.log(" " + " ");
// console.log("vikky" - "singh");//NaN
// console.log(" " + "0");
// 1=true;
// 0=false;

// console.log(true + true);//2
// console.log(true + false);//1
// console.log(false + false);//0
// console.log(false + true);//1
// console.log(false - true);//-1
// console.log(true - false);//1
// console.log(true - true);//0
// console.log(false - false);//0

// null vs undefined
// var iamgood = null;
// console.log(iamgood); //null
// console.log(typeof iamgood); //object //bug
// var iam_not_good;
// console.log(iam_not_good); //undefined
// console.log(typeof iam_not_good); //undefine

// NaN
// NaN is a property of the global object.
// In other word it is a variable in global scope
// the initial value of NaN is Not-A-Number
// NaN values are generated when arithmetic operations result in undefined or unrepresentable values.

// There are five different type of operations that return NaN

// Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
// Math operation where the result is not a real number (e.g. Math.sqrt(-1))
// Operand of an argument is NaN (e.g. 7 ** NaN)
// Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
// Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)

// console.log(parseInt("balble")); //NaN
// console.log(Number("bable")); //NaN
// console.log(Math.sqrt(-1)); //NaN
// console.log(7 ** NaN); //NaN
// let ans = 4 / 0;
// console.log(ans); //;
// console.log(0 * Infinity);//NaN
// console.log(0 * Infinity); //NaN
// let x;
// let y;
// console.log(x + y); //NaN
// console.log(undefined + undefined); //NaN
// console.log(0 / 0); //NaN
// Testing
// console.log(NaN === NaN); //false
// console.log(NaN == NaN); //false
// console.log(NaN !== NaN); //true
// console.log(NaN != NaN); //true

// The necessity of an isNaN function

// Unlike all other possible values in JavaScript, it is not possible to use the equality operators (== and ===) to compare a value against NaN to determine whether the value is NaN or not, because both NaN == NaN and NaN === NaN evaluate to false. Hence, the necessity of an isNaN function.

// console.log(isNaN(NaN));//TRUE

//-----------Number.isNaN()----------

//  This method returns true if the value is of the type Number, and equates to NaN. Otherwise it returns false. e.g.
// console.log(Number.isNaN(undefined));//FALSE
// console.log(Number.isNaN("1452")); //false
// console.log(Number.isNaN(1452)); //false

// console.log(Number.isNaN(NaN)); //true

//-----------------isNaN-----------
// global isNaN() function

// The global isNaN() function converts the tested value to a Number, then tests it.
// will check if the convert of value to Number (type) are failed

// console.log(Number(undefined)); //NaN
// console.log(isNaN(undefined));//true

// isNaN(123) //false
// isNaN('123') //false
// isNaN(NaN) //true
// isNaN('NaN') //true
