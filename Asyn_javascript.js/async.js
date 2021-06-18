// const request = new XMLHttpRequest();
// request.addEventListener("readystatechange", () => {
//   //   console.log(request, request.readyState);

//   if (request.readyState === 4&&request.status===200) {
//     console.log(request.responseText);
//     console.log(request.responseURL);

//     console.log(request.status);
//   }else if(request.readyState === 4){
// console.log("could not featch the data");
// }
// });
// console.log("hii");
// request.open("Get", "https://jsonplaceholder.typicode.com/todos/");
// request.send();

// not every call back is async
// eg.
// console.log("start");
// let arr = [1, 2, 3, 5, 6];
// arr.forEach((item) => {
//   console.log(item);
// });
// console.log("end");

//callback

console.log("start");
// function login(email, password) {
//   setTimeout(() => {
//     console.log("Now WE HAVE A DATA");
//     //THIS IS NOT COME BACK
//     return { userEmail: email, userPassword: password };
//   }, 5000);
// }

// const user = login("abc@abc.com", 145236);
// console.log(user);
// start
// undefined
// end
// Now WE HAVE A DATA

//TO SOLVE THIS ISSUES
//need callback
function login(email, password, callback) {
  setTimeout(() => {
    console.log("Now WE HAVE A DATA");
    //THIS IS NOT COME BACK
    //other then returning
    //add callback
    callback({ userEmail: email, userPassword: password });
  }, 5000);
}

const user = login("abc@abc.com", 145236, (user) => {
  console.log(user);
});
console.log(user);

// when we keep stacking this it beacome a callback hell

// we can fixed this by using promises async await

console.log("end");

// output
// start
// undefine
// end
// rsponse back

// so how we can get out of it
// using callback function
