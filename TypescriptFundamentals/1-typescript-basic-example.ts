
// Type Annotations

/**
 * Typescript is a typed langugage. (Type Support Langugage)
 */

var age: number = 23;
var fname: string = "King Kochhar";
var isGraduated: boolean = true;

console.log(`Name : ${fname}`)
console.log(`Age : ${age}`)
console.log(`Are You Graduate? : ${isGraduated}`)

// Type Assertion
/**
 * allows you to set the type of value and tell the compiler not to infer it.
 */

var experience: any = 2;
experience = 10;
console.log(experience + typeof (experience))
experience = "10 Years";
console.log(experience + typeof (experience))
var exp = <string>experience;
console.log(exp + typeof (exp))

/**
 * Type Inference
 */

// Union of different data types
var value: (string | number | boolean) = "Hello World";
value = 200;
value = true;

/**
 * Array
 */

var numberList: number[] = [1, 2, 3];
var stringList: Array<string> = ["King", "Shreya", "Gautam"];
console.log(numberList)
console.log(stringList);









