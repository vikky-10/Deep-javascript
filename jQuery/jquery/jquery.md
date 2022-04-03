 .trigger(eventType, [extraParameter]);

 eventType=> click,submit

 extraParameter=> pass along to the event handler.

 on(events,[sector],[data],handler);

 Attach an event handler function for one or more events to the selected element.


 syntax:

 $(#abc).on({

click:function(){

},
mouseenter:function(){


}

 })


 As other client side libraries like MooTools, Prototype can be used with jQuery and they also use $() as their global function and to define variables. This situation creates conflict as $() is used by jQuery and other library as their global function. To overcome from such situations, jQuery has introduced jQuery.noConflict().

 jQuery.noConflict();
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
   jQuery("div").hide();
});  
You can also use your own specific character in the place of $ sign in jQuery.

var $j = jQuery.noConflict();
// Use jQuery via jQuery(...)
$j(document).ready(function(){
   $j("div").hide();
}); 




this and $(this) refers to the same element. The only difference is the way they are used. 'this' is used in traditional sense, when 'this' is wrapped in $() then it becomes a jQuery object and you are able to use the power of jQuery.

$(document).ready(function(){
    $('#spnValue').mouseover(function(){
       alert($(this).text());
  });
});
In below example, this is an object but since it is not wrapped in $(), we can't use jQuery method and use the native JavaScript to get the value of span element.

$(document).ready(function(){
    $('#spnValue').mouseover(function(){
       alert(this.innerText);
  });
});


Difference between Deep copy vs Shallow Copy.


A deep copy means that all of the values of the variable are copied and disconnected from the original variable. A shall copy means that certain sub values are still connected to the original variable.

Primitive data types include 
Number,String, Boolean, Undefined, null     
When you create these values. they are tightly coupled with the cariable they are assigned to. They exit once.That means you do not really have to worry about copying primitive data types in JavaScript. When you make a copy, it will be a real copy.


const a = 5
let b = a // this is the copy
b = 6
console.log(b) // 6
console.log(a) // 5
By executing b = a , you make the copy. Now, when you reassign a new value to b, the value of b changes, but not of a.




Composite data types — Objects and Arrays
Technically, arrays are also objects, so they behave in the same way. I will go through both of them in detail later.

Here it gets more interesting. These values are actually stored just once when instantiated, and assigning a variable just creates a pointer (reference) to that value.

Now, if we make a copy b = a , and change some nested value in b, it actually changes a’s nested value as well, since a and b actually point to the same thing. Example:

const a = {
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
  pt: 'Olà'
}
let b = a
b.pt = 'Oi'
console.log(b.pt) // Oi
console.log(a.pt) // Oi
In the example above, we actually made a shallow copy. This is often times problematic, since we expect the old variable to have the original values, not the changed ones. When we access it, we sometimes get an error. It might happen that you try to debug it for a while before you find the error, since a lot of developers do not really grasp the concept and do not expect that to be the error.




Let’s have a look at how we can make copies of objects and arrays.

Objects
There are multiple ways to make copies of objects, especially with the new expanding and improving JavaScript specification.

Spread operator
Introduced with ES2015, this operator is just great, because it is so short and simple. It ‘spreads’ out all of the values into a new object. You can use it as follows:

const a = {
  en: 'Bye',
  de: 'Tschüss'
}
let b = {...a}
b.de = 'Ciao'
console.log(b.de) // Ciao
console.log(a.de) // Tschüss
You can also use it to merge two objects together, for example const c = {...a, ...b} .


<!-- Similar to Array -->
Arrays
Copying arrays is just as common as copying objects. A lot of the logic behind it is similar, since arrays are also just objects under the hood.

Spread operator
As with objects, you can use the spread operator to copy an array:

const a = [1,2,3]
let b = [...a]
b[1] = 4
console.log(b[1]) // 4
console.log(a[1]) // 2
Array functions — map, filter, reduce
These methods will return a new array with all (or some) values of the original one. While doing that, you can also modify the values, which comes in very handy:

const a = [1,2,3]
let b = a.map(el => el)
b[1] = 4
console.log(b[1]) // 4
console.log(a[1]) // 2
Alternatively you can change the desired element while copying:

const a = [1,2,3]
const b = a.map((el, index) => index === 1 ? 4 : el)
console.log(b[1]) // 4
console.log(a[1]) // 2