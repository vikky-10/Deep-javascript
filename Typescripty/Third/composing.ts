// with typescript you can create a complex type by combining simple ones There are two popular ways to do so : with Unions and with generics

//Unions
type mybool = true | false;
type positiveodd = 1 | 3 | 5 | 7 | 9;
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
// let x: number = 10;

// function add(a:number, b:number){

// }

// add(add(1,2),3)//error add(1,2) return void which is not assign to a
// add(add(1,2),3)
// add(add(1,2),3)
// add(add(1,2),3)
// add(add(1,2),3)
// add(add(1,2),3)
// add(add(1,2),3)
// add(add(1,2),3)
// add(add(1,2),3)

//fixing lot of  place fix it in one place
// function add(a: number, b: number): number {
//   return a + b;
// }

// add(add(1, 2), 3); //error add(1,2) return void which is not assign to a
// add(add(1, 2), 3);
// add(add(1, 2), 3);
// add(add(1, 2), 3);
// add(add(1, 2), 3);
// add(add(1, 2), 3);
// add(add(1, 2), 3);
// add(add(1, 2), 3);
// add(add(1, 2), 3);

//thats why function return type important
