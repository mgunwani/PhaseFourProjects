/*
// Definition: Simple Function
function sayHello() {
    console.log('Hello Everyone');
}

// Calling: Simple Function
sayHello();
*/

// ************************************** //

/*
// Definition: Parameterized Function
function sayHello(fname, lname) {
    // console.log("Hello " + fname + ' ' + lname + '!!');
    // console.log(`Hello ${fname} ${lname}!!`);
    console.log(`Hello ${arguments[0]} ${arguments[1]}!!`)
}

// Calling: Parametrized Function
sayHello('King', 'Kochhar');
sayHello('King', 'Kochhar', 'Smith');
sayHello('King');
sayHello();
sayHello(100, 200);
*/

// ************************************** //

/*
// Definition: Parametrized Function with Return Statement
function sayHello(fname, lname) {
    return `Hello ${arguments[0]} ${arguments[1]}!!`;
}

// Calling: Parametrized Function with Return Statement
var result = sayHello('King', 'Kochhar');
console.log(result);

console.log(sayHello('John', 'Smith'));
*/

// ************************************** //

// Definition: Function Expression
var getFullName = function sayHello(fname, lname) {
    console.log(`Hello ${arguments[0]} ${arguments[1]}!!`);
}

// Calling: Function Expression
getFullName('John', 'Smith');

// ************************************** //

// Definition: Annonymous Function
var getFullName = function (fname, lname) {
    console.log(`Hello ${arguments[0]} ${arguments[1]}!!`);
}

// Calling: Annonymous Function
getFullName('John', 'Smith');









