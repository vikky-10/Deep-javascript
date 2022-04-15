//Register
//sendEmail
//login
//getUserData
//displayuserDATA

// function waitForThreeSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

//this is an example of sync code

// function register() {
//   waitForThreeSeconds();
//   console.log("Registration end");
// }

// function sendEmail() {
//   waitForThreeSeconds();
//   console.log("Email end");
// }

// function login() {
//   waitForThreeSeconds();
//   console.log("login end");
// }

// function getUserData() {
//   waitForThreeSeconds();
//   console.log("got user data");
// }

// function displayUserData() {
//   console.assert("user data display");
// }

// async
// function register() {
//   setTimeout(() => {
//     console.log("Registration end");
//   }, 2000);
// }

// function sendEmail() {
//   setTimeout(() => {
//     console.log("Email end");
//   }, 1000);
// }

// function login() {
//   setTimeout(() => {
//     console.log("login end");
//   }, 1000);
// }

// function getUserData() {
//   setTimeout(() => {
//     console.log("got user data");
//   }, 1000);
// }

// function displayUserData() {
//   console.assert("user data display");
// }

//output like that  but we want to exicute in proper sequence
// Other application work
// Email end
// login end
// got user data
// Registration end

//🦯 TO SOLVE THE PROBLE WE USE Callbacks

function register(callback) {
  setTimeout(() => {
    console.log("Registration end");
    callback();
  }, 2000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("Email end");
    callback();
  }, 1000);
}

function login(callback) {
  setTimeout(() => {
    console.log("login end");
    callback();
  }, 2000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("got user data");
    callback();
  }, 1000);
}

function displayUserData() {
  console.assert("user data display");
}

register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

console.log("Other application work");
