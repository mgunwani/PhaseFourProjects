
var num1 = new Number(100);
var num2 = new Number(100);
var num3 = 100;

console.log(num1);
console.log(typeof num1);

console.log(num2);
console.log(typeof num2);

console.log(num3);
console.log(typeof num3);


console.log(num1 == num2);  // false, num1 and num2 are two different objects
console.log(num1 == num3);  // true
console.log(num1 === num3); // false

// === compares the values and reference of DT.