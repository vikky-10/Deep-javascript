// Globals--no window!!
// __dirname--path to current working directory
// __filename   -filename
// require -function to use modules(commanJs)
// module  -info about current module(file)
// process -info about env where the program is being executed

var module = require("./firstmodule");
var sayhello = require("./sayhii");
const data = require("./alernative");

require("./mind-granad"); //sum is 30 🤔

// console.log(__dirname);
// console.log(__filename);
// console.log(module); //it give us an object
// {
//   firstmodule: [Function: firstmodule],
//   firstmodule1: [Function: firstmodule1],
//   firstname: 'vikky',
//   lastname: 'singh'
// }
// console.log(module.firstname);

// console.log(sayhello); //[Function: sayhii]

// sayhello("vikky");

// console.log(data);
