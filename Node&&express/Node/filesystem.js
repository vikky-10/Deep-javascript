const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./testingdir/first.txt", "utf8");
const sec = readFileSync("./testingdir/sec.txt", "utf8");

// console.log(first, sec);

// if file is not present node create file and add content in it
// if file is already present it overwrite the content
// writeFileSync("./testingdir/result.txt", "hello this is result file");

// for append in file
writeFileSync(
  "./testingdir/result.txt",
  "hello this  is result file vvv good",
  {
    flag: "a",
  }
);
console.log("done with this task");
console.log("start the next task");
