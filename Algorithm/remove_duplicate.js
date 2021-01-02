function foo(arr) {
  var resarr = [];
  arr.forEach((a) => {
    if (!resarr.includes(a)) {
      resarr.push(a);
    }
  });
  return resarr;
}

var arr = [1, 2, 3, 4, 5, 1, 2, 4, 3, 8];

//  1️⃣ using Set constructor
//  A Set is a collection of unique values. To remove duplicates from an array
// var res = [...new Set(arr)];
var res = foo(arr);
console.log(res);

// 🏷️ new concept
//  1️⃣ Set
var set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);
console.log([...set]); // how to change set to array
console.log(set.has(3)); //true
console.log(set.has(null)); //false
