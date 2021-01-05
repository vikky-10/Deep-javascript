const EventEmitter = require("events");
// event Emitter object
const eventEmitter = new EventEmitter();

// assign the event handler to an event
// eventEmitter.on("tutorial", () => {
//   console.log("Modules events has occurred");
// });
eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});

// here we fire the event tutorial
// eventEmitter.emit("tutorial");
// eventEmitter.emit("tutorial", 1, 2);
