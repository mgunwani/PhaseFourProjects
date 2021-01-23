/*
function getFullName(fname: string, lname: string) {
    console.log(`${fname} ${lname}`)
}

getFullName('King', 'Kochhar');
// getFullName(100, 200);
*/
function sayHello() {
    console.log("Hello Everyone");
}
function getFullName(fname, lname) {
    return fname + " " + lname;
}
//Optional Parameters
function addition(num1, num2, num3) {
    if (num3 != undefined)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
// Default Parameters
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 100; }
    return num1 + num2 + num3;
}
// Rest Parameters
function adding(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var i = 0; i < y.length; i++) {
        result += y[i];
    }
    return result;
}
sayHello();
console.log(getFullName('King', 'Kochhar'));
// Calling Function with Optional Parameters
console.log(addition(100, 200, 300));
console.log(addition(100, 200));
// Calling Function with Default Parameters
console.log(add(10, 20, 30));
console.log(add(10, 20));
console.log(adding(10, 20, 30));
console.log(adding(10, 20, 30, 40));
console.log(adding(10, 20, 30, 40, 50));
