const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// 🏷️here is the two concept is come bubble phase and capture both are opposite to each  other
// 🔴when we move child to grandparent it call bubbleing  and opostise it call capture

//  🔴 by default eventListener are in bubble phase
//   for going to captur phase add third parameter to our addEventListener is call {capture:true} by default it is false.

//  🔴 if you want to stop propagation eventListener use stopPropagation()

//  🔴 if you want to run your event once pass {once:true} as you third parameter after this that eventListener runs only once but other are run as usual

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent capture");
//   },
//   { capture: true }
// );
grandparent.addEventListener("click", (e) => {
  console.log("grandparent bubble");
});
// parent.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("parent capture");
//   },
//   { capture: true }
// );
parent.addEventListener("click", (e) => {
  console.log("parent bubble");
});
// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child capture");
//   },
//   { capture: true }
// );
child.addEventListener(
  "click",
  (e) => {
    console.log("child bubble");
  },
  { once: true }
);
