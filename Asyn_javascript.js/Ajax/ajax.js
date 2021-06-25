document.getElementById("btn1").addEventListener("click", loaduser);

function loaduser() {
  var req = new XMLHttpRequest();
  req.open("GET", "user1.json", true);
  req.onload = function () {
    if (this.status == 200) {
      var ans = JSON.parse(this.responseText);
      console.log(ans);

      var output = ``;
      output += `<ul>
      <li>${ans.userId}</li>
      <li>${ans.id}</li>
      <li>${ans.title}</li>
      <li>${ans.body}</li>
      </ul>`;
      document.getElementById("user").innerHTML = output;
    }
  };
  req.send();
}
document.getElementById("btn2").addEventListener("click", loadusers);

function loadusers() {
  var req = new XMLHttpRequest();
  req.open("GET", "user2.json", true);
  req.onload = function () {
    if (this.status == 200) {
      var ans1 = JSON.parse(this.responseText);
      console.log(ans1);

      var output = ``;

      for (let i in ans1) {
        output += `<ul>
      <li>${ans1[i].userId}</li>
      <li>${ans1[i].id}</li>
      <li>${ans1[i].title}</li>
      <li>${ans1[i].body}</li>
      </ul>`;
        document.getElementById("users").innerHTML = output;
      }
    }
  };
  req.send();
}
