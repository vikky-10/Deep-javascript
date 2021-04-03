// console.log("this is sec one  🚀");
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// const number1 = "5";
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);

// 🔴 core types
// let x = "vikky";
// reassign
// x = "amit";
// but
//x=45; //here is the problem Type 'number' is not assignable to type 'string'

// const y = "hello vikky";

// y="vi";//Cannot assign to 'y' because it is a constant

// but here 🤔 we can reassign  how
// beacuse yobj of const type has a value as object and object are muttable

// 🏷️
// The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in case the content is an object, this means the object itself can still be altered. This means that you can't mutate the value stored in a variable:

// const obj = {foo: 'bar'};
// obj = {foo: 'baz'};
// TypeError: invalid assignment to const `obj'
// But you can mutate the properties in a variable:

// obj.foo = 'baz';
// obj; // Object { foo: "baz" }

// const yobj = {
//   foo: "hello",
// };
// yobj.foo = "koo";

//yobj.foo=45;//Type 'number' is not assignable to type 'string'
