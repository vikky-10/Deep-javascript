const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("welcom to home page");
  }
  if (req.url === "/about") {
    res.end("this is an about page");
  }

  res.end(`<h1>OOPS</h1>
  <p> we can't find your page </p>
  <a href="/"  />`);
  //   res.writeHead(200, { "content-Type": "text/html" });
  //   res.write("welcom to our home page");
  //   res.end();
});
server.listen(5000);

console.log(http.STATUS_CODES);
console.log(http.METHODS);

//the url module splits up a web address into readable parts

// url.parse("url",true);

// const url = require("url");
// let Url = "http://localhost:8080/?year=2017&month=July";
// let q = url.parse(Url, true);
// let qdata = q.query; //return the object :{year:2017,month:'february'}
// console.log(qdata.year); //2017
// console.log(q.host); //localhost:8080
// console.log(q.hostname); //localhost
// console.log(q.pathname);
// console.log(q.search); //?year=2017&month=July
