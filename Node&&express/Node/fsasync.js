const { readFile, writeFile, unlink, rename } = require("fs");

console.log("start");

readFile("./testingdir/first.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;
  readFile("./testingdir/sec.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const sec = data;
    writeFile(
      "./testingdir/result.txt",
      `Here is the result : ${first} , ${sec}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the new task");

//if you not provide the  encoding it gives buffer

// 🏷️ output because this is asynchronous
// start
// starting the new task
// done with this task

// unlink("./testingdir/del.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File deleted");
// });

// rename("./testingdir/rename.txt", "./testingdir/rename1.txt", (err) => {
//   if (err) throw err;
//   console.log("File renamed");
// });
