const EventEmitter = require("events");

const customEventEmitter = new EventEmitter();

//on==>listen for an  event
//emit==>emit an event
// customEventEmitter.emit("response");

customEventEmitter.on("response", (name, age) => {
  console.log(`data recived ${name}, and ${age}`);
});
customEventEmitter.on("response", () => {
  console.log(`some other logic here`);
});

//order matters
//first listen using on
//then emit
customEventEmitter.emit("response", "vikky", 20);
