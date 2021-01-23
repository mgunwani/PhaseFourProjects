// Type Annotations
/**
 * Typescript is a typed langugage. (Type Support Langugage)
 */
var age = 23;
var fname = "King Kochhar";
var isGraduated = true;
console.log("Name : " + fname);
console.log("Age : " + age);
console.log("Are You Graduate? : " + isGraduated);
// Type Assertion
/**
 * allows you to set the type of value and tell the compiler not to infer it.
 */
var experience = 2;
experience = 10;
console.log(experience + typeof (experience));
experience = "10 Years";
console.log(experience + typeof (experience));
var exp = experience;
console.log(exp + typeof (exp));
/**
 * Type Inference
 */
// Union of different data types
var value = "Hello World";
value = 200;
value = true;
/**
 * Array
 */
var numberList = [1, 2, 3];
var stringList = ["King", "Shreya", "Gautam"];
console.log(numberList);
console.log(stringList);
