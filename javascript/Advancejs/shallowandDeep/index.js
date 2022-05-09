// there is two type of data type premitive and shallow 
// in premitive data type pass by value not reverences
// in structure data type there is reference type

let x=12;
let y=x;
y++;
console.log(x);
console.log(y);

// but in struture data type reference type

let xArray=[1,2,3];
let yArray=xArray;
yArray.push(4);
console.log(xArray);
console.log(yArray);


//primitive are immutable
let myName="vikky";
myName[0]="w";
console.log(myName);

// Impure function that mutable the data

const add=(xArray)=>{
    xArray.push(4)
    return xArray;
}