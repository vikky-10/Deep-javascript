// let start with const
// in const it not alow to reassign

// try {
//   const x = 7;
//   x = 8;
// } catch (e) {
//   console.log(e); // assignment of the constant is not allow
// }
// but we can change the value
// const arr=[12,2,3,4,5];
// console.log()

// var==>function scoped
// let const==> block scope

// var

// function bio() {
//   var firstname = "vikky";
//   console.log(firstname);
//   if (true) {
//     var lastname = "singh";
//     console.log(lastname);
//     console.log(firstname);
//   }
//   console.log(lastname);
// }
// bio();

// let

// function bio() {
//   let firstname = "vikky";
//   console.log("1" + firstname);
//   if (true) {
//     let lastname = "singh";
//     console.log("2" + lastname);
//     console.log("3" + firstname);
//   }
//   console.log("4" + lastname);//error
// }
// bio();

// Arrow function
// const add = (a, b) => a + b;
// console.log(add(5, 5));
