//  🔥 ...(spread)
const sum = (x, y, z) => x + y + z;

console.log(sum(...[1, 2, 3]));

var numberStore = [1, 2, 3, 4];
var newnumber = 12;
numberStore = [...numberStore, newnumber];
console.log(numberStore);

// cancatenate
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
console.log(arr1);

// with new
let datefield = [1970, 1, 10];
let D = new Date(...datefield);
console.log(D);




//  🔴 objects
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }



