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
console.log(emp1.empNo + " : " + emp1.empName);
emp1.display();
var emp2 = new Employee(102, "King Kochhar");
console.log(emp1.empNo + " : " + emp1.empName);
emp2.display();
/**
 * Public: By Default
 * Private:
 * Protected:
 */ 
