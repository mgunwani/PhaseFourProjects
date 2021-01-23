var Employee = /** @class */ (function () {
    function Employee(empNo, empName) {
        this.empNo = empNo;
        this.empName = empName;
    }
    Employee.prototype.display = function () {
        console.log("Employee Information: ");
        console.log("Emp No: " + this.empNo);
        console.log("Emp Name: " + this.empName);
    };
    return Employee;
}());
var emp1 = new Employee(101, "John Smith");
emp1.display();
var emp2 = new Employee(102, "King Kochhar");
emp2.display();
