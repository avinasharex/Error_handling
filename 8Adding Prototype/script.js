class Student {
    constructor(name){
        this.name = name
    }
    printDetails (){
        console.log(`Hello, my name is ${this.name}`);
    }
}

let student = new Student("avinash")
student.printDetails()