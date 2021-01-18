//  🔥 Streams and Buffer

const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     res.end(data.toString());
  //     ("");
  //   });

  // by streaming
  //   const rstream = fs.createReadStream("./input.txt");
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });
  //   rstream.on("error",(err)=>{
  //       console.log(err);

  //   })

  // next way
  const rstream = fs.createReadStream("./input.txt");
  rstream.pipe(res);
});
server.listen(8000);
