const p = document.querySelector("#data");
const btn = document.querySelector("#btn");

function login(email, password, callback) {
  console.log("start");
  setTimeout(() => {
    // console.log("Now WE HAVE A DATA");
    //THIS IS NOT COME BACK
    //other then returning
    //add callback
    callback({ userEmail: email, userPassword: password });
  }, 5000);
  console.log("finish");
}

btn.addEventListener("click", () => {
  //5000ms ke baad yh callback run kr dega
  login("vikky@vikky", 123456, (user) => {
    p.textContent = JSON.stringify(user);
  });
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
