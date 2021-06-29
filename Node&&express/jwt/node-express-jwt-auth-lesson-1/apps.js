console.log("hii");

const obj = {
  name: "vikky",
  roll: 15,
  yo: () => {
    console.log(obj.name);
  },
  yoshi: function () {
    console.log(this.name);
    return this.roll;
  },
};
obj.yo();
// obj.yoshi();
// let x = obj.yoshi();
// console.log(x);//vikky,15
// let x = obj.yoshi;
// console.log(x());undefined,
// const res = obj.yoshi.bind(obj);
// // console.log(res());vikky,15
