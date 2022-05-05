// console.log("hii");
// const user = {
//     name: "Daniel",
//     age: 26,
//   };
//   user.location; // returns undefined


// const names: readonly string[] = ["Dylan"];
// names.push("Jack");

// const number=[1,2,3];
// number.push("3"); //type inference




function printCar(car: {
    make: string
    model: string
    year: number
    chargeVoltage?: number
  }) {
    let str = `${car.make} ${car.model} (${car.year})`
    car.chargeVoltage
            //  when we hover over the charge voltage we can see number|undefined
//   (property) chargeVoltage?: number | undefined
    if (typeof car.chargeVoltage !== "undefined")
      str += `// ${car.chargeVoltage}v` 
                            
//   (property) chargeVoltage?: number
    console.log(str)
  }
  printCar({
    make: "Honda",
    model: "Accord",
    year: 2017,
  })
  // Also works
//   printCar({
//     make: "Tesla",
//     model: "Model 3",
//     year: 2020,
//     chargeVoltage: 220,
//   })
  
  