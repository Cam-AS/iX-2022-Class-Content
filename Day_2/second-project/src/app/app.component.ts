import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'second-project';

  constructor() {}

  age: number = 12;
  username: string = 'Cameron';
  isTeacher: boolean = true;

  interests: string[] = ['One', 'two', 'three'];

  person: { name: string; age: number } = { name: 'Cameron', age: 28 };

  addTwoNumbers(num1: number, num2: number) {
    console.log(num1 + num2);
  }

  concatenateTwoString(name1: string, name2: string) {
    console.log(name1 + name2);
  }
}

class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    public courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  fetchStudentAge() {
    return this.age;
  }
}

const student = new Student('Cameron', 'Kirkpatrick', 28, []);
student.fetchStudentAge();
student.enroll('Mathematics');

interface Alien {
  fingers: number;
  age: number;
  name: string;
  frequentFlyerMiles: number;

  greet: () => void;
}

let cam: Alien;

cam = {
  fingers: 10,
  age: 29,
  name: 'Cameron',
  frequentFlyerMiles: 5000,
  greet() {
    console.log('Hello from outer space');
  }
}




