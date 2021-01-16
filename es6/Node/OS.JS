const os = require("os");
console.log(os.arch());
// free memory
const Freememory = os.freemem();
console.log(`${Freememory / 1024 / 1024 / 1024}`);
// total memory
const totalmem = os.totalmem();
console.log(`${totalmem / 1024 / 1024 / 1024}`);
//host
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.homedir());
