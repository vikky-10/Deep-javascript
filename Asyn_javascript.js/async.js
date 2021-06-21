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
