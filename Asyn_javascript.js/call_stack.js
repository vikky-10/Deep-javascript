// 🏷️ A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc

//  1️⃣ When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
//  2️⃣Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// 3️⃣When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
//  4️⃣If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

//  🔥 setTimeout()

// console.log("hii this is vikky");
// setTimeout(() => {
//   // async javascript
//   console.log("good");
// }, 2000);
// console.log("how is this");
