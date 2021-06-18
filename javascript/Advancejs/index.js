// console.log(' 🚀 Advance javascript.....');

//1️⃣ event Propagation and event bubbleing

// The event propagation mode determines in which order the elements receive the events
//top to bottom is known as capturing phase.
// bottom to top is known as bubbling phase

//event bubbling, the event is first captured and handled by the innermost element and the propagate to the outer elements

//event capturing, the event is first captured and handled by the outermost element and the propagate to the inner elements

//capturing is also known as trickling

//by default bubbling phase is on

// const parentId = document.getElementById('parent');
// const childId = document.getElementById('child');
// const gparentId = document.getElementById('gparent');

// const callParent = e => {
//   alert('this is parent Div');
//   console.log('Parent');
// };
// const callChild = e => {
//   alert('this is  child Div');
//   console.log(' child');
//   //   event.stopPropagation();
// };
// const callGparent = e => {
//   alert('this is   grand parent Div');
//   console.log('  grand parent');
// };

//for capturing pass true
// gparentId.addEventListener('click', callGparent, { capture: true });
// parentId.addEventListener('click', callParent);
// childId.addEventListener('click', callChild);

// document.addEventListener('click', e => {
//   console.log('the the window parent of all');
// });

//once
// gparentId.addEventListener('click', callGparent, { once: true });
// parentId.addEventListener('click', callParent);
// childId.addEventListener('click', callChild);

// document.addEventListener('click', e => {
//   console.log('the the window parent of all');
// });

// remove event Listeners

// gparentId.addEventListener('click', callGparent);

// parentId.addEventListener('click', callParent);

//keep in mind callParent function not inner when we call remove method it should create a problem

/* this is not work
parentId.addEventListener('click', () => {
  console.log('hii');
});
setTimeout(() => {
  parentId.removeEventListener('click', () => {
    console.log('hii');
  });
}, 2000);
*/
//after two sec it remove
// setTimeout(() => {
//   parentId.removeEventListener('click', callParent);
// }, 2000);

// childId.addEventListener('click', callChild);

// document.addEventListener('click', e => {
//   console.log('the the window parent of all');
// });

// parentId.removeEventListener('click', () => {
//   console.log('remove event');
// });
