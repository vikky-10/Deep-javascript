// const goback = () => {
//   window.history.back();
// };

//alert/confirm
// const visted = () => {
//   alert(location.href);
//   if (confirm("you want to go vikky's page")) {
//     location.href = 'https://vikkysingh.netlify.app/';
//   }
// };

// console.log(document.documentElement); //return the root element of the document //html
// console.log(document.head);
// document.body;
// document.body.childNodes;(includes tab,enter,backspace)

// document.body.children;
// document.body.children.length;

//how to know element has children or not? ex ke lea body
// document.body.hasChildNodes();//true||false
// document.body.firstElementChild
// document.body.parentNode;//html
// document.body.parentElement
// document.body.nextElementSibling;
// document.body.previousElementSibling

//slection
// document.getElementById("").innerHTML=""
//it returns a referenced to the element by its Id
//it return null if element is not found
// document.getElementsByClassName("").innerHTML=""

// if (document.getElementById('gender_Male').checked) {
//   document.getElementById('gender').innerHTML = 'male';
// } else if (document.getElementById('gender_Female').checked) {
//   //Female radio button is checked
//   document.getElementById('gender').innerHTML = 'Female';
// }
// // console.log('hii');
// // document.getElementById('gender').innerHTML = 'male';
// console.log(document.getElementById('gender_Male').checked);

// document.querySelector()//return the first matching element with in the document that matches the specifies group of selectors or null if no matches are found
// document.querySelectorAll()//will return all elements matching
