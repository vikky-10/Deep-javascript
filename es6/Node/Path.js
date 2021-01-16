// 🏷️ path module 🔥

const path = require("path");
console.log(__dirname);
const fileLocation = path.join(__dirname, "fs.js");
console.log(fileLocation);

// return the basename of whole path
// const filename = path.basename(fileLocation);
// console.log(filename);

// // for extension
// console.log(path.extname(filename));

// check if path is absolute path
// console.log(path.isAbsolute(fileLocation)); //true
// console.log(path.isAbsolute(filename)); //false
// console.log(path.isAbsolute("/")); //true
// console.log(path.isAbsolute(".")); //false
// console.log(path.isAbsolute(" ")); //false

// 🟥 parse it return an object
console.log(path.parse(fileLocation));

// normalize the path
console.log(path.normalize(fileLocation));
