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
function login(email, password, callback) {
  setTimeout(() => {
    console.log("now we have the darta");
    callback({ userEmail: email, userPassword: password });
  }, 5000);
}

function videos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}

function videodetail(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 2000);
}

const user = login("abc@abc.com", 145236, (user) => {
  console.log(user);
  videos(user.email, (videos) => {
    console.log(videos);
    videodetail(videos[0], (title) => {
      console.log(title);
    });
  });
});

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
