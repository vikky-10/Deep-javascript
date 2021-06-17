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