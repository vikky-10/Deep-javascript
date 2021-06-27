const { createReadStream } = require("fs");

const stream = createReadStream(
  "./content/big.txt",
  { encoding: "utf8" },
  { highWaterMark: 90000 }
);

//defult 64kb
//to controle size use highWaterMark
// console.log(stream);
stream.on("data", (res) => {
  console.log(res);
});
stream.on("error", (err) => {
  console.log(err);
});
