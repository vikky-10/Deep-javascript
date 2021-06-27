const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newArr = _.flattenDeep(items);
console.log(newArr);

//chunk method
console.log(_.chunk(newArr, 2));
//[ [ 1, 2 ], [ 3, 4 ] ]
console.log(_.chunk(newArr, 3));
//[ [ 1, 2, 3 ], [ 4 ] ]
console.log(newArr); //not change

const arr = [1, 2, 3, 4];
console.log(_.fill(arr, "a"));
//[ 'a', 'a', 'a', 'a' ]
