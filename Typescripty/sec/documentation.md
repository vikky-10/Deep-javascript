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

let myObj = { sel: "Sizeize: 10, lab 10 Object" };
printLabel(myObj);

<!-- Object Types -->

In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

<!-- Any type -->

its allows for a value of any kind.
How every mutable js value is treated.
Useful as you migrate code from js to Ts
start with making all anys explicit ans the squash as many as possible.
There's also a never type , which is compatible with Nothing

<!-- Enums -->

Enums are one of the few feature TypeScript has which is not a type-level extension of JavaScript.

🔴 Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

<!-- Numeric enums -->

We’ll first start off with numeric enums, which are probably more familiar if you’re coming from other languages. An enum can be defined using the enum keyword.

enum Direction {
Up = 1,
Down,
Left,
Right,
}

Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

🔴 enum Direction {
Up,
Down,
Left,
Right,
}
Here, Up would have the value 0, Down would have 1, etc. This auto-incrementing behavior is useful for cases where we might not care about the member values themselves, but do care that each value is distinct from other values in the same enum.
