
/**
 * Object is a non-primitive Data Type.
 * It holds the multiple properties and methods associated with an entity.
 * In JavaScript, an object can be created by two-ways:
 * 1. Object Literal
 * 2. Object Constructor
 */

// Object Literal

// Empty Object Literal
var person = {};

// Object Literal with Properties
var person = {
    firstName: 'King',
    lastName: 'Kochhar'
}

// Object Literal with Properties and Methods
var person = {
    firstName: 'King',
    lastName: 'Kochhar',
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}!!`)
    }
}

// console.log(person.firstName);
// console.log(person.lastName);
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["age"])
person.getFullName();
