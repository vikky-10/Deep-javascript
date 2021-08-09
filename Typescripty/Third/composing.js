// with typescript you can create a complex type by combining simple ones There are two popular ways to do so : with Unions and with generics
function logPoints(p) {
    console.log(p.x + "," + p.y);
}
var Points = { x: 10, y: 20 };
logPoints(Points);
