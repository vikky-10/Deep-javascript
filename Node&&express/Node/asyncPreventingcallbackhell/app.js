// const { readFile, writeFile } = require("fs");
// const util = require("util");

/*-----*/
/*-----*/
/*-----*/
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("../testingdir/first.txt", "utf8");
//     const sec = await readFilePromise("../testingdir/sec.txt", "utf8");
//     await writeFilePromise(
//       "../testingdir/new res.txt",
//       `THIS is awsom ${first} and ${sec}`
//     );

//     console.log(first, sec);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

/*-----*/
/*-----*/
/*-----*/

//we can use directly to
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("../testingdir/first.txt", "utf8");
    const sec = await readFile("../testingdir/sec.txt", "utf8");
    await writeFile(
      "../testingdir/directres.txt",
      `THIS is awsom ${first} and ${sec}`
    );

    console.log(first, sec);
  } catch (error) {
    console.log(error);
  }
};
start();

/*-----*/
/*-----*/
/*-----*/
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//   try {
//     const first = await getText("../testingdir/first.txt");
//     const sec = await getText("../testingdir/sec.txt");
//     console.log(first, sec);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
// getText("../testingdir/first.txt").then((res) => {
//   console.log(res);
// });

/*-----*/
/*-----*/
/*-----*/
