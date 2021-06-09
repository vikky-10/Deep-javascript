function buildTeslaModelS(teslaObj) {
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
        var tyrePressure = 20; // Evaluated after doing a few complex computations!
        return tyrePressure;
    },
    getRemCharging: function () {
        var remCharging = 20; // Evaluated after doing a few complex computations!
        return remCharging;
    }
});
