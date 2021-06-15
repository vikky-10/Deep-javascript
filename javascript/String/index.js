console.log('🔥 string......');

//string literal
// let string = 'vikky singh';
// //string constructor
// const str = new String('vikky singh');
// console.log(string);//vikky singh
// console.log(str);//[String: 'vikky singh']

// let str = 'vikky singh';
// console.log(str);
// console.log(str.length); //11
// console.log(`vikky singh 'youtub' `);

// console.log("we are so-call \"hero\" from the middle of India ");

//1️⃣ finding a string in a string
// indexOf(searchValue);
// indexOf(searchValue, fromIndex);

// const paragraph =
//   'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(indexOfFirst);//40

// The index of the first occurrence of searchValue, or -1 if not found.

// console.log(paragraph.indexOf('q')); //4
// console.log(paragraph.indexOf('o', 12)); //12 seach from 12
// console.log(paragraph.indexOf('o', 13)); //17
// indexOf() and case-sensitivity

//---challenge
//---
//---
// Using indexOf() to count occurrences of a letter in a string
//---

// const str = 'To be, or not to be, that is the question.';
// let count = 0;
// let position = str.indexOf('e');
// while (position !== -1) {
//   count++;
//   position = str.indexOf('e', position + 1);
// }
// console.log(count);//4

//2️⃣ lastindexOf()
// The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found

// const paragraph =
//   'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// const exs = ' barked, was it really lazy?';
// const searchTerm = 'dog';
// console.log(paragraph.length); //83

// console.log(exs.length); //28
// console.log(83 - 28);

// console.log(
//   `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
//     searchTerm
//   )}`
// );
// // expected output: "The index of the first "dog" from the end is 52"

// // lastIndexOf(searchValue);
// // lastIndexOf(searchValue, fromIndex);
// console.log(paragraph.lastIndexOf('dog', 100)); //52

// // / If fromIndex < 0, the behavior will be the same as if it would be 0.
// console.log(paragraph.lastIndexOf('z', -3)); //-1

// // he default value is +Infinity. If fromIndex >= str.length
// console.log(paragraph.lastIndexOf('z', 200)); //80

// 3️⃣ search() method searches a string for a specific
// value and return the position of the match

// const myBiodata = 'I am vikkky singh';
// let sData = myBiodata.search('am');
// console.log(sData); //2

// Extracking String parts
//slice()
//substring()
//substr()

// 4️⃣ slice()
// The slice() method extracts a section of a string
//returns it as a new string, without modifying the original string.
// slice(beginIndex);
// slice(beginIndex, endIndex);
//endIndex not includes

// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.length);//44

// console.log(str.slice(31));
// // expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // expected output: "quick brown fox"

// console.log(str.slice(-4));
// // expected output: "dog."

// console.log(str.slice(-9, -5));
// // expected output: "lazy"

// const final = str.slice(0, -1);//-1 is not included
// console.log(final.length);//43
//expected output: "The quick brown fox jumps over the lazy dog"

//challenge
// let mytwitter =
//   'this is my  prne sdf k dkfas dkjas  dfkas df sdkfa   sdfjafdf fkasdfkda  sdflkgalkgkdfk  asdfa sdfkasd  ga lgk l fkglkg asdfakdf asdfasdfk asdfasdlfkdkf dlflaskdflkasd asdfalsdkflkdsf asldflasdkflkd asdkfasdf lasdflkasdlf alsdkflasdkflm vikky singh ';
// console.log(mytwitter.length);
// let myActualTwitter = mytwitter.slice(0, 179);
// console.log(myActualTwitter);

// 5️⃣ substring()

// The substring() method returns the part of the string between the start and end indexes, or to the end of the string

// substring(indexStart);
// substring(indexStart, indexEnd);
// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // expected output: "oz"

// console.log(str.substring(2));
// // expected output: "zilla"

// var str = 'Apple, Banana, Kiwi';
// let res = str.substring(7, -2);
// console.log(res); //apple, 🤔

//🔴 difference between slice() and substring()

//---**--
//---***--

// The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

// let text = 'Mozilla';
// // if startindex>endindex swap the index
// console.log(text.substring(5, 2)); // => "zil"

// //return the empty index
// console.log(text.slice(5, 2)); // => ""

// // If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
// console.log(text.substring(-5, 2)); // => "Mo"
// console.log(text.substring(-5, -2)); // => ""
// console.log(text.substring(0, 0)); // => ""

// // slice() also treats NaN arguments as 0
// // but when it is given negative values it counts backwards from the end of the string to find the indexes
// console.log(text.slice(-5, 2)); // => ""
// console.log(text.slice(-5, -2)); // => "zil"

//challenge
// Replaces oldS with newS in the string fullS

// function replaceString(oldS, newS, fullS) {
//   for (let i = 0; i < fullS.length; ++i) {
//     if (fullS.substring(i, i + oldS.length) == oldS) {
//       fullS =
//         fullS.substring(0, i) +
//         newS +
//         fullS.substring(i + oldS.length, fullS.length);
//     }
//   }
//   return fullS;
// }

// const ans = replaceString('World', 'Web', 'Brave , World New World');
// console.log(ans);

// 6️⃣ replace()
// method returns a new string with some or all matches of a pattern

// replace(regexp, newSubstr);
// replace(regexp, replacerFunction);

// replace(substr, newSubstr);
// replace(substr, replacerFunction);

// const p =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// const regex = /Dog/gi;//global and case insensitive
// console.log(p.replace(regex, 'ferret'));

//🔴 function
//---***-----
//---***---
// var str = 'Mr Blue has a blue house and a blue car';
// var res = str.replace(/blue|house|car/gi, function (x) {
//   return x.toUpperCase();
// });

// console.log(res);//resulting
// console.log(str);//original str

// 7️⃣ substr()
// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards

// substr(start);
// substr(start, length);

// const str = 'Mozilla';

// console.log(str.substr(1, 2));
// // expected output: "oz"

// console.log(str.substr(2));
// // expected output: "zilla"

// console.log(str.substr(-2));
// // expected output: "la"

// console.log(str.substr(-5, 2));
// // expected output: "zi"

// console.log(str.substr(-50, 2));
// // expected output: "Mo"

// console.log(str.substr(1, 100));
// // expected output: "ozilla"

// console.log(str.substr(21, 100));
// // expected output: ""

// console.log(str.substr(-21, 100));
// // expected output: "Mozilla"

// 8️⃣ Extracting string characters
// charAt()
// charCodeAt()
// property access []

// charAt();
// The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;
// const ch = sentence.charAt(index);
// console.log(`The character at index ${index} is ${ch}`);
// console.log(typeof ch);//string
// expected output: "The character at index 4 is q"

// 9️⃣ charCodeAt()
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;
// const ch = sentence.charAt(index);
// const unicode = sentence.charCodeAt(index);
// console.log(`The character code ${unicode} is equal to ${ch}`);
// // expected output: "The character code 113 is equal to q"
// console.log(typeof unicode);

// var str = 'Hello World!';
// console.log(str[0]); //H

// 🔟 usefull methods
// let name = 'vikky singh';
// console.log(name);
// console.log(name.toUpperCase());
// console.log(name);
// let lastname = 'SINGH';
// console.log(lastname.toLowerCase());

//concat()
// let firstname = 'vikky ';
// let lastname = 'singh';
// console.log(firstname.concat(lastname));

//trim() v.v.imp
//remove whitespace from both side
// var str = '   vikky singh     ';
// console.log(str);
// console.log(str.trim());

//convert string to an array
//split()

// var text = 'vikky singh';
// console.log(text.split()); //['vikky singh '];
// console.log(text.split(' ')); //['vikky', 'singh'];
// let name = 'v,i,k,k,y';
// console.log(name.split(','));//['v', 'i', 'k', 'k', 'y'];
