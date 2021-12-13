var _ = require("lodash");

console.log("Hii");

var arr = [1, 2, 3];
var ans = arr.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(ans);
console.log(_.sum(arr));
var arr1 = { a: 1, b: 2, c: 3 };
var a = _.sum(arr1);
console.log(a);
