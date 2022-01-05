let age: number = 12;
let username: string = 'Cameron';
let isTeacher: boolean = true;

let interests: string[] = ['exercising', 'golf', 'Netflix'];

let person: { name: string; age: number } = { name: '', age: 0 };

let humans: { name: string; age: number }[] = [];

function printNumber(integer: number) {
  console.log(integer);
}

function printString(word: string) {
  console.log(word);
}

function printBoolean(condition: boolean) {
  console.log(condition);
}

function printArray(arr: string[]) {
  console.log(arr);
}

function createObject(name: string, age: number) {
  person.name = name;
  person.age = age;

  console.log(this.person);
}

function addNewHuman(person: { name: string; age: number }) {
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

let course = 'TypeScript Guide';
// course = 1234;

// We can't assign a number to a string because of Type inference
// So you can Type your variables if you don't assign anything immediately or you don't have to type if you're assigning immediately.

// Allowing multiple different types (Working with union types)

let multipleTypes: string | number = 'Hello there Mr Union';
multipleTypes = 'A new Value';
multipleTypes = 100;

// Type Aliasing

type Human = {
  age: number;
  name: string;
};

let people: Human[] = [];

function addPerson(newPerson: Human) {
  people.push(newPerson);
  console.log(people);
}

let cameron: Human = {
  age: 28,
  name: 'Cameron',
};

addPerson(cameron);

// Functions & Types

// We can assign a return type to a function
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

function printSomething(somethiing: any): void {
  console.log(somethiing);
}

// Generics

function insertAtBeginning(array: any[], value: any): any[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
// [-1, 1, 2, 3]

// What if we want to use this utility fuctionto add strings or integers but we can't type it to string[] we have to leave it as any[]

// Convert to Generic
// Now it knows that in he example below all values are strings

function insertItemAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoStrings = ['did', 'this', 'work'];

const newArray = insertItemAtBeginning(demoStrings, 'hey');

console.log(newArray);

// Classes

class Student {
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

  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    public courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  fetchAge() {
    return this.age;
  }
}

const student = new Student('Cameron', 'Kirkpatrick', 28, ['Maths', 'Stats']);
student.enroll('Gym');
console.log(student.courses);

const studentsAge = student.fetchAge();

// Interfaces

//  An Interface is an Object Type Definition

interface Alien {
  fingers: number;
  age: number;

  greet: () => void;
}

let cam: Alien;

cam = {
  age: 28,
  fingers: 5,
  greet() {
    console.log('Hello New World!');
  },
};

// interfaces can be implemented by classes
// when they are they force classes to have that structure defined by the inteface
