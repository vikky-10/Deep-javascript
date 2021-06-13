// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const loadData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";

    //1️⃣ ----promise all

    const results = await Promise.all([fetch(url), fetch(url2), fetch(url3)]);

    const finaldata = await Promise.all(results.map((result) => result.json()));
    return finaldata;

    // 2️⃣---this method is slow thsi execute one by one
    // const res = await fetch(url);
    // // console.log(res.status);
    // const data = await res.json();
    // const res2 = await fetch(url2);
    // // console.log(res.status);
    // const data2 = await res2.json();
    // const res3 = await fetch(url3);
    // // console.log(res.status);
    // const data3 = await res3.json();
    // // console.log(data);
    // return [data, data2, data3];
  } catch (err) {
    console.log(err);
  }
};
//return promis beacuse function is async
// const data = loadData().then((data) => {
//   console.log(data);
// });

//hack IIFE
(async () => {
  const data = await loadData();
  console.log(data);
})();
