//  console.log(" 🔥 fetch api 🔥");

// 🔴 we know that fetch return the promise
// to handle these promises use then of asyn wait
// console.log(fetch("https://reqres.in/api/users"));

// fetch("https://reqres.in/api/users")
//   // .then((res) => {
//   //   console.log(res);//but we cannot use the res for use we need json
//   // });
//   .then((res) => res.json()) //this also return the promise
//   .then((data) => console.log(data));

//404 error if user not exist

fetch("https://reqres.in/api/users", {
  // updating
  //   🔴 keep in mind when you post or add data add header with appropriate header:applicatio/json and stringify the body
  method: "post",
  headers: {
    "content-type": "application/json",
  },
  //   convert javascript body to json string
  body: JSON.stringify({
    name: "akhil",
  }),
}) //user 24 not there
  .then((res) => {
    if (res.ok) {
      console.log("sucess");
      return res.json();
    } else {
      console.log("Unsuccess");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
