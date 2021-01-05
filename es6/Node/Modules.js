// // creating a modules
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// module.exports = { add, sub };
// console.log(module); //{ add: [Function: add], sub: [Function: sub] }

//  🔑 only one thing export at a time

// const private = {};
// module.exports = {
//   value: 1,
//   userid: 45,
//   action() {
//     console.log("action");
//   },
// };

//  we want ot export multiple things to export
// // ex.
var pp = 3.14;
class area {
  foo(r) {
    var area = 3.14 * (r * r);
    console.log(area);
  }
}
// one way to pass
// module.exports.pp = pp;
// module.exports.area = area;

// sec way to pass this is by object litral
module.exports = { pp: pp, area: area };
