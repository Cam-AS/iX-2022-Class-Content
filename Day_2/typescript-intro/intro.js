var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age = 12;
var username = 'Cameron';
var isTeacher = true;
var interests = ['exercising', 'golf', 'Netflix'];
var person = { name: '', age: 0 };
var humans = [];
function printNumber(integer) {
    console.log(integer);
}
function printString(word) {
    console.log(word);
}
function printBoolean(condition) {
    console.log(condition);
}
function printArray(arr) {
    console.log(arr);
}
function createObject(name, age) {
    person.name = name;
    person.age = age;
    console.log(this.person);
}
function addNewHuman(person) {
    this.humans.push(person);
}
this.printNumber(age);
this.printString(username);
this.printBoolean(isTeacher);
this.printArray(interests);
this.createObject(username, age);
this.addNewHuman({ name: 'Jennifer', age: 26 });
this.addNewHuman({ name: 'Andrew', age: 29 });
console.log(humans);
// Type Inference
var course = 'TypeScript Guide';
// course = 1234;
// We can't assign a number to a string because of Type inference
// So you can Type your variables if you don't assign anything immediately or you don't have to type if you're assigning immediately.
// Allowing multiple different types (Working with union types)
var multipleTypes = 'Hello there Mr Union';
multipleTypes = 'A new Value';
multipleTypes = 100;
var people = [];
function addPerson(newPerson) {
    people.push(newPerson);
    console.log(people);
}
var cameron = {
    age: 28,
    name: 'Cameron'
};
addPerson(cameron);
// Functions & Types
// We can assign a return type to a function
function addTwoNumbers(a, b) {
    return a + b;
}
function printSomething(somethiing) {
    console.log(somethiing);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
// [-1, 1, 2, 3]
// What if we want to use this utility fuctionto add strings or integers but we can't type it to string[] we have to leave it as any[]
// Convert to Generic
// Now it knows that in he example below all values are strings
function insertItemAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoStrings = ['did', 'this', 'work'];
var newArray = insertItemAtBeginning(demoStrings, 'hey');
console.log(newArray);
// Classes
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // private age: number;
    // courses: string[];
    // constructor(firstName: string, lastName: string, age: number, courses: string[]) {
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    //   this.age = age;
    //   this.courses = courses;
    // }
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.fetchAge = function () {
        return this.age;
    };
    return Student;
}());
var student = new Student('Cameron', 'Kirkpatrick', 28, ['Maths', 'Stats']);
student.enroll('Gym');
console.log(student.courses);
var studentsAge = student.fetchAge();
