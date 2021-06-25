const path = require("path");

console.log(path.sep); // '\'

const filepath = path.join("/testingdir", "testingsubedir", "test.txt");
console.log(filepath);
// \testingdir\testingsubedir\test.txt
const base = path.basename(filepath);
console.log(base); // test.txt

const absolute = path.resolve(
  __dirname,
  "testingdir",
  "testingsubedir",
  "test.txt"
);
console.log(absolute);

//F:\Javascript\Node&&express\node\testingdir\testingsubedir\test.txt
