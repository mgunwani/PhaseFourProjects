
/*

// Customer defined as Class
function Customer() {
    this.firstName = "Sarah";
    this.lastName = "Bowling";
    this.age = 34;
    this.displayDetails = function () {
        console.log(`${this.firstName} : ${this.lastName} : ${this.age}`);
    }
}

// Create an instance/object of a class
var customer = new Customer();
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.age);
customer.displayDetails()

*/

// ***************************************** //

/*
function Customer(fname, lname, age) {
    this.firstName = fname || "Sarah";
    this.lastName = lname || "Bowling";
    this.age = age || 18;
    this.displayDetails = function () {
        console.log(`${this.firstName} : ${this.lastName} : ${this.age}`);
    }
}

var customer1 = new Customer("Gautam", "Bhalla", 44);
console.log(customer1.firstName);
console.log(customer1.lastName);
console.log(customer1.age);
customer1.displayDetails();

var customer2 = new Customer();
console.log(customer2.firstName);
console.log(customer2.lastName);
console.log(customer2.age);
customer2.displayDetails();
*/

// ***************************************** //

function Customer(fname, lname, age) {
    var _firstName = fname || "Annonymous";
    var _lastName = lname || "Annonymous";
    var _age = age || 23;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _firstName;
            },
            set: function (value) {
                _firstName = value;
            }
        },
        "LastName": {
            get: function () {
                return _lastName;
            },
            set: function (value) {
                _lastName = value;
            }
        },
        "Age": {
            get: function () {
                return _age;
            },
            set: function (value) {
                _age = value
            }
        }
    }),
        this.displayDetails = function () {
            console.log(`${this.firstName} : ${this.lastName} : ${this.age}`);
        }
}

var cust1 = new Customer("Bhawna");
console.log(cust1.FirstName);
console.log(cust1.LastName);
console.log(cust1.age);

cust1.FirstName = "Gunwani";
cust1.LastName = "Trainer";
cust1.Age = 23;
console.log(cust1.FirstName);
console.log(cust1.LastName);
console.log(cust1.Age);

















