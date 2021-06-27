const EventEmitter = require("events");

class person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let pedro = new person("Pedro");
pedro.on("name", () => {
  console.log(`my name is ${pedro._name}`);
});
pedro.emit("name");
