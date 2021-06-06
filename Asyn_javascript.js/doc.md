Async javascript
Governs how we perform tasks which tke some time to complete eg Getting data from the database

starting something now and finish it later

Synchronnous javascript
Javascript run One statement at a time
top to bottom
console.log("hii");
console.log("two date);
console.log("this is fore you");

<!-- callback -->

In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.

So, we can also pass functions as parameters to other functions and call them inside the outer functions. Sounds complicated? Let me show that in an example below:
function print(callback) {  
 callback();
}
wHY Do wHY NEED CALLBACK fUNCTION
JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must run) after something else happens and also not sequentially. This is called asynchronous programming.

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

<!-- xml -->

The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes:
