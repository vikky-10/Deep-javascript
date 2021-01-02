// // creating a modules
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// module.exports = { add, sub };
// console.log(module); //{ add: [Function: add], sub: [Function: sub] }

//  🔑 only one thing export at a time

const private = {};
module.exports = {
  value: 1,
  userid: 45,
  action() {
    console.log("action");
  },
};
