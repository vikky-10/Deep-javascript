//  🏷️ events module

const EventEmitter = require("events");

// creating an instance of event-emitter class
// const eventEmitter = new EventEmitter();

// // Publishing Events and Listening to Them

// // To publish(call) an event, we use the emit() function, and to listen to an event, we use the on() function.

// eventEmitter.on("myEvent", () => {
//   console.log("Listener 1");
// });

// eventEmitter.emit("myEvent");

// eventEmitter.on("myEvent", () => {
//   console.log("Listener 2");
// });
// 🔴 We get only Listener 1 as output in the console, as the Listener 2 was registered after emitting the event.

// 🔴 the on() and the emit() functions must be called on the same EventEmitter instance

// no output single object is for on and emit method
// const eventEmitter1 = new EventEmitter();
// eventEmitter1.on("myEvent", () => {
//   console.log("Listener");
// });

// const eventEmitter2 = new EventEmitter();
// // publishing with sec class
// eventEmitter2.emit("myEvent");

// Is an Event Emitter Synchronous or Asynchronous ❓

// const eventEmitter = new EventEmitter();

// eventEmitter.on("myEvent", (data) => {
//   console.log(data);
// });

// console.log("Statement A");
// eventEmitter.emit("myEvent", "Statement B");
// console.log("Statement C");

//  😛 output
// Statement A
// Statement b
// Statement c

// The events raised by event emitters are synchronously executed by the listeners in the current event loop’s iteration.

// 🏃
// one name call multiple events
// const eventEmitter = new EventEmitter();

// eventEmitter.on("myEvent", (data) => {
//   console.log(data, "- FIRST");
// });

// console.log("Statement A");

// eventEmitter.on("myEvent", (data) => {
//   console.log(data, "- SECOND");
// });

// eventEmitter.emit("myEvent", "Emitted Statement");

// console.log("Statement B");
