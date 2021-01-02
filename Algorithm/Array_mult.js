console.log(" 🚀 two Array multiplication");

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 35];
var b = [1, 2, 3, 4, 5, 6, 7, 8];
var s = "";
for (let i = 0; i < a.length; i++) {
  s = s + a[i];
}
var s1 = "";
for (let i = 0; i < b.length; i++) {
  s1 = s1 + b[i];
}
// same as java javascript also have parseint() method to convert string to integer.
var e = parseInt(s);
console.log(e);
var f = parseInt(s1);
var res = e * f;
console.log(res);
let r = res.toString().split("").map(Number);
console.log(r);
