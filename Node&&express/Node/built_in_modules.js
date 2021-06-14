const os = require("os");
//info about current user
const user = os.userInfo();

//method  return the system uptime in sec

console.log(`the system up time is ${os.uptime()} seconds`);
