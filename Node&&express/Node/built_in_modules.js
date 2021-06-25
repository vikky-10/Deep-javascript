// os module provide information about computer os

const os = require("os");
//info about current user
const user = os.userInfo();

//method  return the system uptime in sec
console.log(user);
console.log(`the system up time is ${os.uptime()} seconds`);

// Absolute uptime measures the length of time a system has been running since it was booted. For example, if a system was rebooted at 1:00 PM and is still running at 3:30 PM the next day, its uptime will be 26.5 hours. When a system is restarted, the uptime number resets.
console.log(os.platform());
console.log(os.type());
console.log(os.hostname()); //DESKTOP-HMD6R23
console.log(os.arch()); //architecture x64

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  tempdir: os.tmpdir(),
};
console.log(currentOS);
//{
//   name: 'Windows_NT',
//   release: '10.0.19041',
//   totalMem: 6353739776,
//   freeMem: 1257263104
// }
