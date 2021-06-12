console.log("🔥 lets gooooo....");

// type conversion and coercion

// console.log(+"2001" + 20);
// console.log(typeof NaN); //nUMBER

// console.log(String("25"));
// console.log(Number("vikky")); //NaN

//type coercion

// console.log("21" + 12);//2112
// console.log("21" - 12); //9
// console.log("21" - "12");//9
// console.log(4 - "10");//-6
// console.log("vikiky" - "10"); //NaN
// console.log("32" / 5);//6.4
// console.log("32" / "5");//6.4

// console.log("29" > "10");
//true;

// let n = "1" + 1;
// n = n - 1;
// console.log(n); //10

// console.log("10" - "4" - "3" - 2); //1

// Truthy and Falsy values

//5 falsy value
// when we convert it to boolean it give false
// 1)0
// 2)''
// 3)undefined
// 4)null
// 5)NaN

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("vikky")); //true
// console.log(Boolean({})); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean("")); //false

//typoe coercion
// const money = 0; //0 is the falsy value
//Boolean(money)
// if (money) {
//   console.log("yo yo");
// } else {
//   console.log("ho ho");
// }

// const money = 5;
// //Boolean(money)
// if (money) {
//   console.log("yo yo");
// } else {
//   console.log("ho ho");
// }

// let height;//undefine is falsy value

// if (height) {
//   console.log("yo yo height is define");
// } else {
//   console.log("ho ho height is not define");
// }

//--------🔥 equality operator----

//=== strick equality
// //not perform type coercion
//check type also
// console.log("14" === 14); //false

// //==lossy equality
//check value
// console.log("14" == 14);//true

//leep year
// const year = 2020;
// debugger;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(`${year} is  a leep year`);
//     } else {
//       console.log(`${year} is not leep year`);
//     }
//   } else {
//     console.log(`${year} is a leep year`);
//   }
// } else {
//   console.log(`${year} is not leep year`);
// }

// 🔴 Conditional (ternary) operator

// The conditional (ternary ) operator is the only js operator that take three operand

//functions block of code to perform a  particular task
//function definitaion(function declaration or function statement)

// function <function name>(){
//     //statement
// }

// 🔴 function parameter vs function argument

//function parameter are the name listed in function's definition
//function arguments are the real values passed to the function
