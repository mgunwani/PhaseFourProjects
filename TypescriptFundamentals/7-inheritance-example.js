var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log("Person Information: ");
        console.log("ID: " + this.id);
        console.log("Name: " + this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, salary) {
        var _this = _super.call(this, id, name) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Salary: " + this.id);
    };
    return Employee;
}(Person));
var obj = new Employee(101, "Bhawna", 10000);
obj.display();
