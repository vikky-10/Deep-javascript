// document.getElementById("btn1").addEventListener("click", loaduser);

// function loaduser() {
//   var req = new XMLHttpRequest();
//   req.open("GET", "user1.json", true);
//   req.onload = function () {
//     if (this.status == 200) {
//       var ans = JSON.parse(this.responseText);
//       console.log(ans);

//       var output = ``;
//       output += `<ul>
//       <li>${ans.userId}</li>
//       <li>${ans.id}</li>
//       <li>${ans.title}</li>
//       <li>${ans.body}</li>
//       </ul>`;
//       document.getElementById("user").innerHTML = output;
//     }
//   };
//   req.send();
// }

// var output = ``;

// for (let i in ans1) {
//   output += `<ul>
// <li>${ans1[i].userId}</li>
// <li>${ans1[i].id}</li>
// <li>${ans1[i].title}</li>
// <li>${ans1[i].body}</li>
// </ul>`;
//   document.getElementById("users").innerHTML = output;
// }
// req.onload = function () {
//   if (this.status == 200) {
//     var ans1 = JSON.parse(this.responseText);
//     console.log(ans1);
//   }
// };

document.getElementById("btn2").addEventListener("click", loadusers);

function loadusers() {
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://newsapi.org/v2/everything?q=tesla&from=2021-05-27&sortBy=publishedAt&apiKey=9dec56a33c13418b90f4380844144c92",
    true
  );

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText));
    }
  };

  req.send();
}
