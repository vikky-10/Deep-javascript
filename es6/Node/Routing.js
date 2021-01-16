const http = require("http");
const port = 8000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello from home side");
  } else if (req.url == "/abount") {
    res.end("hello from about side");
  } else {
    res.writeHead(404);
    res.end("404 error");
  }
});
server.listen(8000, () => {
  console.log("listenting at", port);
});
