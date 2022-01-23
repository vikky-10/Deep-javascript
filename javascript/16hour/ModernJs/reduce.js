'use strict';

// const arr = [1, 2, 3, 4, 5];

// acc = accumlator it return value of previous execution will be available here

// arr.reduce((acc,item,index,arr)=>{
// return val;
// }, initialValue);

// initialValue: the value for the acc during the first iteration. if not provide, first item in the array
// will be used

// 1st APPLICATION

// const sum = arr.reduce((acc, item) => acc + item);
// console.log(sum);

// Count items

// const arr = ['foo', 'bar', 'foo'];
// const counts = arr.reduce((acc, item) => {
//   if (acc.has(item)) {
//     return acc.set(item, acc.get(item) + 1);
//   } else {
//     return acc.set(item, 1);
//   }
// }, new Map());

// console.log(counts);

// Maximum by field

// const objects = [
//   { name: 'foo', value: 123 },
//   { name: 'bar', value: 456 },
//   { name: 'baz', value: 123 },
// ];

// const maxValueObject = objects.reduce((acc, item) => {
//   if (acc.value > item.value) {
//     return acc;
//   } else {
//     return item;
//   }
// });
// console.log(maxValueObject);

// group
const objects = [
  { name: 'a', value: 123 },
  { name: 'b', value: 456 },
  { name: 'a', value: 124 },
];
const group = objects.reduce((acc, object) => {
  if (!acc[object.name]) {
    acc[object.name] = [];
  }
  acc[object.name].push(object.value);
  return acc;
}, {});

console.log(group);
