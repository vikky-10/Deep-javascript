// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//   console.log(input);
// });
// let character = "vikky";
// let age = 30;
// let isBoolean = true;
// let mixed = ["man", 4, "singh", 78];
// mixed.push(45);
// mixed.push("amit");
// let object={
//     name:'vikkt',
//     class:'10',
//     rollno:'22'
// }
// object.name="singh";
// object.password="vtt1475"; //it gives us error because password property is not present in object
// this is also not accepted beacuse it to matches with total no of property rollno is missing
// object={
//     name:'yosi',
//     class:'8',
// }
// explicity type
// let character: string;
// let age: number;
// let arr: string[] = [];
// union
// let arr1: (string | number)[] = [];
// arr1.push("vikky");
// arr1.push(45);
// let uid: number | string | boolean;
// uid = "vikky";
// uid = 1452;
// uid = true;
// let myobj: object;
// myobj = {
//   name: "vikky",
//   rollno: 47,
// };
// this not give an error beacuse in js arr is an object type
// myobj=["vikky",45];
// Function type
var greet;
// greet="vikky"; because greet is function type
greet = function () {
    console.log("hii ");
};
var add = function (x, y, z) {
    if (z === void 0) { z = 10; }
    console.log(x + y);
    console.log(z);
};
// gives error if i not provide third parameter z
// to make z opational use ? (x: number, y: number, z?: number | string  )
// or we can pass default value to it (x: number, y: number, z: number | string=10  ) when we pass default value not use ?
// pass optional parameter in last
add(7, 8);
