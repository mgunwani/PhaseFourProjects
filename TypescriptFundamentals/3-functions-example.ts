/*
function getFullName(fname: string, lname: string) {
    console.log(`${fname} ${lname}`)
}

getFullName('King', 'Kochhar');
// getFullName(100, 200);
*/

function sayHello(): void {
    console.log(`Hello Everyone`)
}

function getFullName(fname: string, lname: string): string {
    return `${fname} ${lname}`
}

//Optional Parameters
function addition(num1: number, num2: number, num3?: number): number {
    if (num3 != undefined)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}

// Default Parameters
function add(num1: number, num2: number, num3: number = 100): number {
    return num1 + num2 + num3;
}

// Rest Parameters
function adding(x: number, ...y: number[]): number {
    var result = x;
    for (let i = 0; i < y.length; i++) {
        result += y[i];
    }
    return result;
}

// Rest Parameters
function adding_numbers(...y: number[]): number {
    var result = 0;
    for (let i = 0; i < y.length; i++) {
        result += y[i];
    }
    return result;
}

sayHello();
console.log(getFullName('King', 'Kochhar'));

console.log("------------------------------")

// Calling Function with Optional Parameters
console.log(addition(100, 200, 300));
console.log(addition(100, 200));

console.log("------------------------------")

// Calling Function with Default Parameters
console.log(add(10, 20, 30));
console.log(add(10, 20));

console.log("------------------------------")

console.log(adding(10, 20, 30));
console.log(adding(10, 20, 30, 40));
console.log(adding(10, 20, 30, 40, 50));

console.log("------------------------------")

// Spread Operator
var numbers: number[] = [10, 20, 30, 40, 50];
console.log(adding_numbers(...numbers));
console.log(adding_numbers(10, 20, 30, 40, 50));



