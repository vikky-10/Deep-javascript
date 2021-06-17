// Html events are things that happen to html elements.

//html input field was changed
//an html button was clicked
//often, when events happen you want to do something.

// using alert();
// by calling function()
// using event addEventLiesner
//only overwritten statement will run in this case console.log wala run krega  alert wala nhi
// document.getElementById('demo').onClick=demo(){
// alert('..............')
// }
// document.getElementById('demo').onClick=demo(){
//  console.log('..............')
// }

//both statment will run
// document.getElementById('demo').addEventListener('click',()=>{
//     altert(..............)
// })
// document.getElementById('demo').addEventListener('click',()=>{
//      console.log(..............)
// })

// onclick enevnt overwrite the previous event if we call again
// const visted = () => {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
// };

// pure document kr lga hai it mean window me khi bhi click kro ko btaayga
// document.onkeydown = event => {
//   alert(event.keyCode);
// };

// MouseEvents
// function mouseDown() {
//   document.getElementById('myP').style.color = 'red';
// }
// function mouseUp() {
//   document.getElementById('myP').style.color = '#222';
// }

// mouseenter and mouseleave
// const mEnter = document.getElementById('box');
// mEnter.addEventListener('mouseenter', () => {
//   mEnter.style.backgroundColor = 'yellow';
//   console.log('mouse enter bro');
// });
// mEnter.addEventListener('mouseleave', () => {
//   mEnter.style.backgroundColor = ' rgb(104, 12, 12)';
//   console.log('mouse leave bro');
// });

//keyboardevents

// const keyPress = () => {
//   document.getElementById(
//     'keys'
//   ).innerHTML = `you press ${event.key}   and its code is ${event.code}`;
// };
// const keyDown = () => {
//   document.getElementById('upd').innerHTML = `key is down`;
// };
// const keyUp = () => {
//   document.getElementById('upd').innerHTML = `key is up`;
// };

//input invents
// the onchange event occurs when the value of an element changes
// for radiobuttons and checkboxes the onchange event occurs when checked state has been changed
// const selectedElement = () => {
//   const inputs = document.getElementById('ice').value;

//   const icecream = document.getElementById('iceCream').value;
//   document.getElementById('result').textContent = `${inputs} love ${icecream}`;
// };
// const inputs = document
//   .getElementById('ice')
//   .addEventListener('input', function () {
// const inputs = document.getElementById('ice').value;

// const icecream = document.getElementById('iceCream').value;
// document.getElementById('result').textContent = `${inputs} love ${icecream}`;
//   });
//-----********---/
//-----********---/
//-----********---/
// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()

// The window object allows execution of code at specific time intervals
// these time intervals are called timing events

// setTimeout(function,millisec);
//execute a function after waiting a specified number of milliseconds

// setInterval(function,millisec);
//same as setTimeout() but repeats the execution of the function continuously
// let a;
// const showmyname = document.querySelector('#myname');
// document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   showmyname.textContent = 'Loading...';
//   a = setTimeout(() => {
//     showmyname.textContent = 'vikky';
//   }, 2000);
// });
// const btnd = document.querySelector('#btnd');
// btnd.addEventListener('click', () => {
//   clearTimeout(a);
//   showmyname.textContent = null;
// });

/*------------**/
/*------------**/
/*------------**/
// other concept
// console.log(8 & 1);0 for even 1 for odd
// const date=new Date();
// const today=date.getDay()
// switch (
//   0 //  0 is falsy but work properly
// ) {
//   case 0:
//     console.log('as');
//     break;
//   case 1:
//     console.log('ab');
//     break;
//   default:
//     console.log('aa');
// }
// if (0) {
//   console.log('hii');//not print because 0 is falsy value
// }
/*------*/
/*------*/
/*------*/
// setInterval()
// let num = 0;
// let b;
// const stopnum = document.querySelector('p');
// document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   stopnum.textContent = 'Loading...';
//   b = setInterval(() => {
//     stopnum.textContent = `${num}`;
//     num++;
//   }, 1000);
// });
// const btnd = document.querySelector('#btnd');
// btnd.addEventListener('click', () => {
//   clearInterval(b);
// });

// important interview question

// for (var i = 0; i < 3; i++) {
//   const fun = () => {
//     console.log(i);
//   };
//     setTimeout(fun, 100);
// //   fun();//0 1 2
// }
// output is 3 3 3
// due to var it is in gloable scope

// closure
// function with its lexical scope

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();//after this line x execution context is vanised
// // then how this 👇 print 7
// //because y remember its lexical scopes
// console.log(z()); //7
// console.log(z); // y function

//corner cases
function z() {
  var b = 100;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    //   a=200;
    y();
  }
  x();
}
z();
