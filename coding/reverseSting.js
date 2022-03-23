const reverse = (str) => {
  // let result = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   result += str.charAt(i);
  // }
  // console.log(result);
  // console.log(str.split("").reverse().join(""));
};

let s = "vikky singh";
reverse(s);

const arr = s.split("").reverse();
// output
// [
//   'h', 'g', 'n', 'i',
//   's', ' ', 'y', 'k',
//   'k', 'i', 'v'
// ]
console.log(arr);
