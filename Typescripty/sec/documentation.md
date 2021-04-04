for compilation typescript file
🏷️ tcs <file name>

🔴 When you install an npm package using npm install <package-name>, you are installing it as a dependency.

🔴 The package is automatically listed in the package.json file, under the dependencies list (as of npm 5: before you had to manually specify --save).

🔴 When you add the -D flag, or --save-dev, you are installing it as a development dependency, which adds it to the devDependencies list.

🔴 Development dependencies are intended as development-only packages, that are unneeded in production. For example testing packages, webpack or Babel.

🔴 When you go in production, if you type npm install and the folder contains a package.json file, they are installed, as npm assumes this is a development deploy.

🔴 You need to set the --production flag (npm install --production) to avoid installing those development dependencies.

🐛" npm cache clean --force"

🩹
"devDependencies": {
"lite-server": "^2.6.1"
}
need to add start script
"start":lite-server"

core Types
1️⃣ "number" all number no difference between integer or floats
2️⃣ "string"
3️⃣ "boolean"

let cc:{firstname: string rollno: number};
cc={
firstname:"vikky singh"
rollno: 20
};

<!-- 🏷️ -->

INTERFACES
function printLabel(labeledObj: { label: string }) {
console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
