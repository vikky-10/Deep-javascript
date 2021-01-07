// 🏷️ core module
// 🔴 file system

const fs = require("fs");
//  dot tells yu import either your module or his modules.

// fs.writeFileSync("fs.js", "helo bro");
// // here overwrite take place
// fs.writeFileSync("fs.js", "hello brother");

// fs.appendFileSync("fs.js", " googly");

//  👇 this return buffer

// console.log(fs.readFileSync("fs.js")[1]); //it represent 'e'(101 'unicode) of console 👈
{
  /* output:  <Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 27 68 65 6c 6c 6f 20 62 72 6f 74 68 65 72 27 29 67 6f 6f 67 6c 79> */
}
// buffer like a array of integer which each represent a byte of data
// Buffers are deeply linked with streams. When a stream processor receives data faster than it can digest, it puts the data in a buffer.
// 🙅 A simple visualization of a buffer is when you are watching a YouTube video and the red line goes beyond your visualization point: you are downloading data faster than you're viewing it, and your browser buffers it.
// 🔴 print the full content of the buffer using the toString() method:
// console.log(fs.readFileSync("fs.js").toString());

// const buf = fs.readFileSync("fs.js");
// space is counted
// console.log(buf.length);

// iterate over the content of the buffer
// for (let x of buf) {
//   console.log(x);
// }

// changing the content of the buffer
// buf.write("oyo");
// //  start from first index up to its length
// console.log(buf.toString());
// fs.copyFileSync("fs.js", "copy.js");

// all the file based operation have synchronous , callback, promise-based forms.

// const file = fs.readFileSync("fs.js", { encoding: "utf-8" }).toString();
// console.log(file);

