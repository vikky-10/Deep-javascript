function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration end");
      resolve();
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("error while sending the email");
      console.log("Email end");
      resolve("sucess");
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve();
    }, 2000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("got user data");
      resolve();
    }, 1000);
  });
}

function displayUserData() {
  console.assert("user data display");
}

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log(err);
//   });

// Async-await
async function authenticate() {
  try {
    await register();
    const mess = await sendEmail();
    console.log(mess);
    await login();
    await getUserData();
    await displayUserData();
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
authenticate()
  .then(() => {
    console.log("All set!");
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Other application work");
