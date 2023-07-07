// Classes

// a class is a blueprint for creating objects with pre-defined properties and methods
// doesn't actually make JavaScript Objected Oriented, but it doesn't hinder us in any way

// the method to create new objects *must* be called constructor
// the class keyword creates a constant, so you can not redefine it
// watch out for the syntax as well!
// to create objects from classes we use the new keyword

// Instance Methods
// methods that provide functionality that pertain to a single instance of a class

// Class Methods
// methods that are pertinent to classes but not necessarily individual instances of a class

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        this.scores= []
    }
    // this is an Instance Method
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }
    // this is a Class Method
    static enrollStudents(...students) {
        return 'ENROLLING STUDENTS'
    }
}

let firstStudent = new Student('Allie', 'Soldau', 19)
let secondStudent = new Student('Ben', 'Hoenig', 25)

secondStudent.addScore(100)
secondStudent.addScore(50)

console.log(firstStudent, firstStudent.markLate(), secondStudent.fullName(), secondStudent.calculateAverage())
console.log(Student.enrollStudents())

