const http = require("http");
console.log("start");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("welcom to home page");
  }
  if (req.url === "/about") {
    //blocking code !!!!
    // for (let i = 0; i < 1000; i++) {
    //   for (let j = 0; j < 1000; j++) {
    //     console.log(`${i},${j}`);
    //   }
    // }
    res.end("this is an about page");
  }

  res.end(`<h1>OOPS</h1>
  <p> we can't find your page </p>
  <a href="/"  />`);
});
console.log("starting");
server.listen(5000, () => {
  console.log("server is running at : 5000...");
});
