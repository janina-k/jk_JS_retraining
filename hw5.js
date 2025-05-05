// #1

// function propsCount(currentObject) {
//         return Object.keys(currentObject).length;
// }

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web development",
// }

// console.log(propsCount(mentor));

// #2

// let horse = {
//     name: "Gala",
//     age: 14,
//     sex: "mare",
//     breed: "Silesian",
//     colour: "bay"
// }

// function showProps(currentObject) {
//         let properties = Object.keys(currentObject);
//         let values = Object.values(currentObject);
//         return [properties, values];
//     }

// console.log(showProps(horse));

// #3

// class Person {
//     constructor (name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
    
//     showFullName(){
//         console.log(this.name + " " + this.surname);
//     }
// }

// const newPerson1 = new Person("Jane", "Doe");

// newPerson1.showFullName();

// class Student extends Person {
//     constructor (name, surname, year){
//         super (name, surname);
//         this.year = year;
//     }
//     showFullName(middleName){
//         console.log(this.name + " " + middleName + " " + this.surname);
//     }
//     showCourse(){
//     const currentYear = new Date().getFullYear();
//         const course = currentYear - this.year + 1;
//         if (course < 1 || course > 6){
//             console.log("Wrong course year");
//         } else {
//             console.log("Current course: " + course);
//         }
//     }
// }

// let student = new Student("Jan", "Rokita", 2023);
// console.log(student);
// console.log(student.showFullName("Maria"));
// student.showCourse();

// #4

// class Worker {
//     #experience = 1.2;
//     constructor (fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//       }
    
//       showSalary() {
//         const salary = this.dayRate * this.workingDays;
//         console.log(`${this.fullName} salary: ${salary}`);
//       }

//       showSalaryWithExperience() {
//         const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
//         console.log(`${this.fullName} salary: ${salaryWithExp}`);
//       }

//       get showExp() {
//         return this.#experience;
//       }
    
//       set setExp(value) {
//         this.#experience = value;
//       }
// }

//     let worker1 = new Worker("John Wick", 20, 23);
//     console.log(worker1.fullName);
//     worker1.showSalary();
//     console.log("New experience: " + worker1.showExp);
//     worker1.showSalaryWithExperience();
//     worker1.setExp = 1.5;
//     console.log("New experience: " + worker1.showExp);
//     worker1.showSalaryWithExperience();
  
//     let worker2 = new Worker("John Smith", 48, 22);
//     worker2.showSalary();
//     console.log("New experience: " + worker2.showExp);
//     worker2.showSalaryWithExperience();
//     worker2.setExp = 1.5;
//     console.log("New experience: " + worker2.showExp);
//     worker2.showSalaryWithExperience();
  
//     let worker3 = new Worker("Andrew Johnson", 29, 23);
//     worker3.showSalary();
//     console.log("New experience: " + worker3.showExp);
//     worker3.showSalaryWithExperience();
//     worker3.setExp = 1.5;
//     console.log("New experience: " + worker3.showExp);
//     worker3.showSalaryWithExperience();
  
//   let workers = [worker1, worker2, worker3];
//   workers.sort((a, b) => (a.dayRate * a.workingDays * a.showExp) - (b.dayRate * b.workingDays * b.showExp));
  
//   console.log("Sorted salary:");
//   workers.forEach(worker => {
//     console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.showExp}`);
//   });

  // #5

// class GeometricFigure {
    
// getArea() {
//     return 0;
// }

// toString() {
//     return Object.getPrototypeOf (this).constructor.name;
// }
// }
    
// class Triangle extends GeometricFigure {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         return (this.base * this.height) / 2;
//     }
// }
// class Square extends GeometricFigure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }

//     getArea() {
//         return this.side * this.side;
//     }
// }

// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     }

// }

// function handleFigures(figures) {
//     return figures.reduce((totalArea, figure) => {
//         if (figure instanceof GeometricFigure) {
//             const area = figure.getArea();
//             console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
//             return totalArea + area;
//         } else {
//             return totalArea;
//         }
//     }, 0);
// }

// const figures = [new Triangle(3, 5), new Square(5), new Circle(6)];
// console.log(handleFigures(figures));

// const triangle = new Triangle(10, 5);
// console.log(triangle.toString());
// console.log(triangle.getArea());

// const square = new Square(4);
// console.log(square.toString());   
// console.log(square.getArea());    

// const circle = new Circle(3);
// console.log(circle.toString()); 
// console.log(circle.getArea());
