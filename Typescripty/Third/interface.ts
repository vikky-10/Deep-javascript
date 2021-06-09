interface TeslaModelS {
  length: number;
  width: number;
  wheelbase: number;
  seatingCapacity: number;
  getTyrePressure?: () => number;
  getRemCharging: () => number;
}
function buildTeslaModelS(teslaObj: TeslaModelS) {
  console.log(teslaObj.length);
  console.log(teslaObj.width);
  console.log(teslaObj.wheelbase);
  console.log(teslaObj.seatingCapacity);
}

buildTeslaModelS({
  length: 196,
  width: 86,
  wheelbase: 116,
  seatingCapacity: 4,
  getTyrePressure: function () {
    let tyrePressure = 20; // Evaluated after doing a few complex computations!
    return tyrePressure;
  },
  getRemCharging: function () {
    let remCharging = 20; // Evaluated after doing a few complex computations!
    return remCharging;
  },
});
