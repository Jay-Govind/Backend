// Factory Function
// function PersonMaker(name, age) {
//   const Person = {
//     name: name,
//     age: age,
//     greet() {
//       console.log(`Hello ! @${this.name}, Welcome to the portal`);
//     },
//   };
//   return Person;
// }

// const person1 = PersonMaker("Jay", 22);
// console.log(person1);
// person1.greet();

/* ------------------------------++++++++++----------------------------- */

// Constructor Function - doesn't return anything & start with Capital letter
// function Person(name, age) {
//   (this.name = name), (this.age = age);
//   console.log(this);
// }
// Person.prototype.greet = function () {
//   console.log(`Hello ! @${this.name}, Welcome to the portal`);
// };

// const p1 = new Person("Jay", 22);
// p1.greet();

/* ------------------------------++++++++++----------------------------- */

// Classes in jS
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
//   }
//   greet() {
//     console.log(`Hello ! @${this.name}, Welcome to the portal`);
//   }
// }

// const p1 = new Person("Jay", 22);
// p1.greet();

/* ------------------------------++++++++++----------------------------- */

// Concept of Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ! @${this.name}, Welcome to the portal`);
  }
}

class Student extends Person {
  // Inheritance
  constructor(name, age, marks) {
    super(name, age); // call the parent class constructor
    this.marks = marks;
    console.log(this);
  }
}

// let p1 = new Student("Jay", 22, 100);
// p1.greet();

/* extends & super keywords are used to inherit the parent class constructor in child class */
