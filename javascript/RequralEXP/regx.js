// console.log('This is vikky singh');
// let reg = /harry/;
// console.log(reg);
// console.log(reg.source); //expression ke andr ka msala

//function to match expression
/*✋*/
// let s = "This is vikky's show";
// // 1) exec() this function return an array for matche and null for not matche
// let reg = /show/;
// let result = reg.exec(s);
// console.log(result); //all information
// // [ 'show', index: 16, input: "This is vikky's show", groups: undefined ]
// console.log(reg.exec(s).index);//16

/*✋*/
// let s1 =
//   'This is vikky singh show plz whatch the show you love it vikky request ';
// let reg1 = /vikky/g;
// let res = reg1.exec(s1);
// console.log(res);
// [
//   'vikky',
//   index: 8,
//   input: 'This is vikky singh show plz whatch the show you love it vikky request ',
//   groups: undefined
// ]
// res = reg1.exec(s1);
// console.log(res);
// // [
//   'vikky',
//   index: 57,
//   input: 'This is vikky singh show plz whatch the show you love it vikky request ',
//   groups: undefined
// ]
// res = reg1.exec(s1);
// console.log(res);
// null;
// null return krne ka faayda in looping while loop lga kr all index print kra skte jhai

//challenge
// find all starting index od "vikky" in s1
// let s1 =
//   'This is vikky singh show plz whatch the show you love it vikky request ';
// let regx = /vikky/gi;
// let res = regx.exec(s1);
// while (res !== null) {
//   // console.log(typeof regx.exec(s1));//object
//   //   console.log(res);
//   console.log(res.index);

//   res = regx.exec(s1);
// }

/*✋*/
// let s1 =
//   'This is vikky singh show plz whatch the show you love it vikky request ';
// let reg1 = /ViKky/i;//i case insensitive
// console.log(reg1.exec(s1));
// // output:
// [
//   'vikky',
//   index: 8,
//   input: 'This is vikky singh show plz whatch the show you love it vikky request ',
//   groups: undefined
// ]

/*✋*/
// 2)test() return tru or false
// The string:
var str = 'Hello world!';

// Look for "Hello"
var patt = /Hello/g;
var result = patt.test(str);
console.log(result); //true

// Look for "W3Schools"
patt2 = /W3Schools/g;
result2 = patt2.test(str);
console.log(result2); //false
