const p = document.querySelector("#data");
const btn = document.querySelector("#btn");

// function login(email, password, callback) {
//   console.log("start");
//   setTimeout(() => {
//     // console.log("Now WE HAVE A DATA");
//     //THIS IS NOT COME BACK
//     //other then returning
//     //add callback
//     callback({ userEmail: email, userPassword: password });
//   }, 5000);
//   console.log("finish");
// }

// btn.addEventListener("click", () => {
//   //5000ms ke baad yh callback run kr dega
//   login("vikky@vikky", 123456, (user) => {
//     p.textContent = JSON.stringify(user);

//   });
// });

//callback hell
function login(email, password, callback) {
  console.log("start");
  setTimeout(() => {
    callback({ userEmail: email, userPassword: password });
  }, 5000);
  console.log("finish");
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}
function videodetails(video, callback) {
  setTimeout(() => {
    callback("this is title video");
  }, 1000);
}

btn.addEventListener("click", () => {
  login(
    "vikky@vikky",
    123456,
    // 👇 ess function to login me callback ke call kr rha hai
    //user me whi aa jaayga jo callback ke arguments
    (user) => {
      p.textContent = JSON.stringify(user);
      getUserVideos(user.email, (video) => {
        console.log(video);
        videodetails(video[0], (title) => {
          console.log(title);
        });
      });
    }
  );
});

// const post = [
//   { title: "Post one", body: "this is post one body" },
//   { title: "Post one", body: "this is post one body" },
// ];

// function getPost() {
//   setTimeout(() => {
//     let output = ``;
//     post.forEach((post) => {
//       output += `<li>{post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(posts, callback) {
//   setTimeout(function () {
//     post.push(posts);
//     callback();
//   }, 2000);
// }
// getPost();
// createPost({ title: "post three", body: "post three body" }, getPost);
