class Person{
    constructor(name = "unknown",age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let person1 = new Person("Avinash", 15);
person1.getDetails()