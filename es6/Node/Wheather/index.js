const http = require("http");
const fs = require("fs");
// npm i requests  beacuse this is not a core module
var requests = require("requests");
const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%temp%}", orgVal.main.temp);
  temperature = temperature.replace("{%city%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%weather%}", orgVal.weather[0].main);
  temperature = temperature.replace("{%pressure%}", orgVal.main.pressure);
  temperature = temperature.replace("{%humidity%}", orgVal.main.humidity);
  temperature = temperature.replace("{%speed%}", orgVal.wind.speed);
  temperature = temperature.replace("{%feel_like%}", orgVal.main.feels_like);
  temperature = temperature.replace("{%high_temp%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%low_temp%}", orgVal.main.temp_min);
  return temperature;
};
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=Goa&appid=b5f8a43a13af688bc0be7e9a82ad7970"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        const realTimeData = arrdata
          .map((val) => replaceVal(homeFile, val))
          .join("");
        //   .join("");
        res.write(realTimeData);
        res.end();
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});
server.listen(5000, () => {
  console.log("hii ");
});
