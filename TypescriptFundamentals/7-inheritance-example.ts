
class Person {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log("Person Information: ");
        console.log(`ID: ${this.id}`)
        console.log(`Name: ${this.name}`)
    }
}

class Employee extends Person {

    salary: number;

    constructor(id: number, name: string, salary: number) {
        super(id, name);
        this.salary = salary;
    }

    display(): void {
        super.display();
        console.log(`Salary: ${this.salary}`)
    }

}

var obj: Employee = new Employee(101, "Bhawna", 10000);
obj.display();