
// Object Constructor

var employee = new Object();

// Attach Properties and Methods to employee object:
employee.firstName = "John";
employee.lastName = "Smith";
employee.address = {
    street: "Civil Lines",
    city: "Delhi",
    country: "India"
}
employee.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}!!`);
}

// Access Properties and Methods:
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.address.street);
console.log(employee.address.city);
console.log(employee.address.country);
if (employee.hasOwnProperty("age"))
    console.log(emplpoyee.age);
else
    console.log('age is not defined..')
employee.getFullName();
