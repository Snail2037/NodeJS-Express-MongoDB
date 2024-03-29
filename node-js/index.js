// var rect = {
//     perimeter: (x, y) => (2 * (x + y)),
//     area: (x, y) => (x * y),
// }

var rect = require('./rectangle');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message);
        } else {
            console.log("The area of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = " + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect()");
}

solveRect(2, 4);
solveRect(0, 3);
solveRect(6, 9);
solveRect(-3, 5);