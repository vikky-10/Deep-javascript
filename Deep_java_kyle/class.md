classes
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

🔴 class declarations
class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
}

🏷️ Hoisting
An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

const p = new Rectangle(); // : 🚨ReferenceError

class Rectangle {}

🏷️Class expressions

A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though).

// unnamed
let Rectangle = class {
constructor(height, width) {
this.height = height;
this.width = width;
}
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
constructor(height, width) {
this.height = height;
this.width = width;
}
};
console.log(Rectangle.name);
// output: "Rectangle2"

// getter and setter
// getter==> access property
// setter==>changee(mutate) them
const person = {
firstname: "vikky",
lastname: "singh",
get fullname() {
return `${person.firstname} ${person.lastname}`;
},
set fullname(value) {
const parts = value.split(" ");
this.firstname = parts[0];
this.lastname = parts[1];
},
};
// console.log(person.fullname());

person.fullname = "arjunb singh"; //this is not allow without setter
console.log(person.fullname); //this is not allow without getter fullname()
console.log(person.firstname);
console.log(person);
