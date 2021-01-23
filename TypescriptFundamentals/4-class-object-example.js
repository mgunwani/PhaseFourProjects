var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("Employee Information: ");
        console.log("Emp No: " + this.empNo);
        console.log("Emp Name: " + this.empName);
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.empNo = 101;
emp1.empName = "John Smith";
emp1.display();
