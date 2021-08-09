// with typescript you can create a complex type by combining simple ones There are two popular ways to do so : with Unions and with generics
// let x:positiveodd=6;//error
// let x:positiveodd=3;//no error
// function stringyfiy(obj: string | string[]): number {
//   return obj.length;
// }
// let res1 = stringyfiy("vikky"); //5
// let res = stringyfiy(["vikky", "ckkkyjii"]); //2
// console.log(res1);
// console.log(res);
// function stringarray(obj: string | string[]) {
//   if (typeof obj === "string") {
//     return [obj];
//   }
//   return obj;
// }
// let res1 = stringarray("vikky"); //5
// let res = stringarray(["vikky", "ckkkyjii"]); //2
// console.log(res1);
// console.log(res);
// interface Point {
//   x: number;
//   y: number;
// }
// function logPoints(p: Point) {
//   console.log(`${p.x},${p.y}`);
// }
// const Points = { x: 10, y: 20 };
// logPoints(Points);
// let c=6;
// c=10;
// const y=6;
// y=40;//not possible that's why typescript  make more specific assumption here that why when we hover over it show const y: 6 not const y: number unlink let x: number
// var x = 10;
// function add(a, b) {
//   return +a + +b;
// }
// let ans = add(2, 3);
// let ans1 = add(2, "3");
// let ans2 = add("2", "3");
// console.log(ans); //5
// console.log(ans1); //5
// console.log(ans2); //5

//JSDocs
// JSDoc is a standardized way of writing comments in your code to describe functions, classes, methods, and variables in your codebase. If you are familiar with JavaDocs, or any derivative (like those available in the PHP world) then JSDocs will be familiar to you. The ideas is that we describe how our code works with a few special keywords and formatting conventions, and we can use a parser to run through all of our commented code and generate nice, readable documentation based off of the comments we write.
/**
 * Adds two numbers together
 *
 * @param {number} first The First Number
 * @param {number} second The Second Number
 * @returns {number}
 */
// function add(first, second) {
//   return first + second;
// }
// const result = add(1, "3");
// console.log(result);//13
// JSDoc not a type chacking kind of staf
// it document your code
