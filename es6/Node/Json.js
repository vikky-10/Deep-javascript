// 🧛‍♀️  JSON 

const fs=require('fs');

const info={
    name:"vikky",
    age:26,
    fullpath:"aktu"
}
// object to json
const jsoS=JSON.stringify(info);
// console.log(jsoS)
// Json to object 
// const obj=JSON.parse(jsoS);
// console.log(obj.name)

// fs.writeFile("json1.json", jsoS,(error)=>{
//     // console.log(error)
// })
fs.readFile("json1.json","utf-8",(error,data)=>{
    console.log(data)
})