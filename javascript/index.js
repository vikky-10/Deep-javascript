console.log("Lets begin");
// variable
//  variable only contain '_' or '$'
// let 4firstname="vikky"; error
// let first4name = "vikky"; allow
// let first&name="vikky";error
// let _firstname ="vikky";allow
// let $firstname ="vikky";allow
// let firs_tname ="vikky";allow
// let firs$tname ="vikky";allow

// keep in mind give proper name to variable

//    7primitive datatype
// number
// string
// boolean
// undefined value taken by the variable that is not defined(empity value) let empti;
// null also means empty value
// symbol value that is unique and cannot be change
// Bigint lager intefer than the number type can hold
// javascript has dynamic type we do not have to manually define the data type of the value stored in a variable instead datatype are determined automatically
// in javascript value has a type not variable
// let firstname = "vikky";
// console.log(typeof firstname);

// var a = 20;
// var b = "30";
// console.log(typeof a);
// console.log(typeof (a + b));

// true;
// console.log(true);
// dynamic typing
// let first = "vikky";
// first = "singh";
// console.log(first);

// let firstname; //it automaticaly take value as undefine
// console.log(firstname); //undefine
// console.log(typeof firstname); //undefine
// firstname = "vikky";
// console.log(typeof firstname); //string

// console.log(typeof null); //object 🤔
// console.log(typeof null === undefined); //false

// ----------let const var-------------------

// let dobs = 2001;
// dobs = 2002; //valid
// const dob = 2001;
// dob = 2002;//invalid
// const ans;//error const in initial value
// const ans = "vikky";

// var top = "programer";
// top = "vikky";

// declation of variable without type
// lastname = "singh";
// console.log(lastname);
// lastname = "vikky";
// console.log(lastname);
// console.log(typeof lastname);

// Basic operator
// const a = 2;
// const b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a ** b);
// console.log(a / b);
// console.log(a % b);
// console.log(Math.floor(a / b)); //0
// console.log(Math.floor(-2 / 1)); //-2
// console.log(Math.floor(-2 / -1)); //2

// console.log(Math.floor(-100 / 3)); //-34
// console.log(~~(-100 / 3));//-33

// bitwise
// console.log(~~(a / b)); //0
// console.log(~~(-2 / -1)); //2
// console.log(~~(-2 / 1)); //-2

// let a = 10;
// console.log(a);
// console.log(a++);

// console.log(a);//11

// let b = 10;
// console.log(b);
// console.log(++b);
// console.log(b);

// operator precedence
const now = 2021;
const age = now - 2001;
console.log(age);
console.log(now - 1997 > now - 2003);
