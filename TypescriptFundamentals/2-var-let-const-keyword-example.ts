
// var value1: number = 100;
// let value2: number = 200;
// const value3: number = 300;

// 1. var is function scoped.
// 2. let is block scoped.
// 3. const is block scoped but can't be reassiged.

/*
    function sayHello() {
        var value = 100;
        if (true) {
            console.log(value); // 100
        }
        console.log(value); //  100
    }
    // console.log(value); // Error: Variable not defined..
    sayHello();
*/

/*
    function sayHello() {

        if (true) {
            let value = 100;
            console.log(value); // 100
            if (true) {
                value = 300;
                console.log(value); // 100/300
            }
        }
        // console.log(value); //  Error
    }
    // console.log(value); // Error: Variable not defined..
    sayHello();
*/

// function sayHello() {

//     if (true) {
//         const value = 100;
//         console.log(value); // 100
//         if (true) {
//             let value = 300;
//             console.log(value); // 100
//         }
//     }
//     // console.log(value); //  Error
// }
// // console.log(value); // Error: Variable not defined..
// sayHello();












