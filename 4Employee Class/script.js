class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
}

const employee1 = new Employee("Avinash", "Backend Developer", 09087);
console.log(employee1.getSalary());