// const person = {
//   name: "vikky",
//   age: 30,
// };
// console.log(perso.name);it gives us a error

// const person: {
//   name: string;
//   age: number;
// }

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //this is how we reprent tuple
// } = {
//   name: "vikky",
//   age: 30,
//   hobbies: ["cricket", "cooking"],
//   role: [2, "author"],
// };
// person.role.push("admin");
// // person.role[1] = 10;
// let favoriteActivity: string[];
// favoriteActivity = ["helping"];
// console.log(person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// any type
let age = 34;
let myage = age as any;
myage = "35";
let yourname: any = "vikky";
yourname = 56532;
console.log(yourname);
