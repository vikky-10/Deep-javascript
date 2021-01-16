const http = require("http");
const fs = require("fs");
const port = 5000;
const server = http.createServer(function (req, res) {
  //  to reander html
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("./HGttp.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error:File not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});
server.listen(port, function (error) {
  if (error) {
    console.log("something went wrong");
  } else {
    console.log("server is listening", port);
  }
});
