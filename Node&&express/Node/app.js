// Globals--no window!!
// __dirname--path to current working directory
// __filename   -filename
// require -function to use modules(commanJs)
// module  -info about current module(file)
// process -info about env where the program is being executed

var module = require("./firstmodule");

console.log(__dirname);
console.log(__filename);
console.log(module); //it give us an object
