const http = require("http");

//using events
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("welcome");
});

//this "request is emmited by node itself"

server.listen(5000);
