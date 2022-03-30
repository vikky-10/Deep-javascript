// callback hell

setTimeout(function () {
  console.log("one");
  setTimeout(function () {
    console.log("two");
    setTimeout(function () {
      console.log("three");
    }, 1000);
  }, 1000);
}, 1000);

// another way to writing call back hell

function one(cb) {
  console.log("one");
  setTimeout(cb, 1000);
}
function two(cb) {
  console.log("two");
  setTimeout(cb, 1000);
}
function three() {
  console.log("three");
}

one(function () {
  two(three);
});
