class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    start(){
        console.log(`name: ${this.name} , age: ${this.age}`);
    }
}
let students=new Student("guru",21)
let students2=new Student("rishi",20)
students.start()
students2.start()
