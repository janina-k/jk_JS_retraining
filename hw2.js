// #1

// let x = 1;
// let y = 2;
// let res1 = ("" + x + y);
// console.log(res1);
// console.log( typeof res1); 

// let res2 = ("" + (x==x) + y);
// console.log(res2); 
// console.log( typeof res2);

// let res3 = (x != y);
// console.log(res3); 
// console.log( typeof res3);

// let res4 = parseInt("a" + x + y);
// console.log(res4); 
// console.log( typeof res4); 

// #2

// solution 1 

// let num = prompt("Provide a valid number: ");

// if (num >= 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

// if ((num % 2) == 0) {
//   console.log("Mod 2");
// } else {
//   console.log("Not Mod 2");
// }

// if ((num % 7) == 0) {
//   console.log("Mod 7");
// } else {
//   console.log("Not Mod 7");
// }

// solution 2

// let num = parseInt(prompt("Enter a number:"));

// if (isNaN(num)) {
//     console.log("Please enter a valid number.");
// } else if (num % 2 === 0 && num % 7 === 0) {
//     console.log(num + " is even and a multiple of 7.");
// } else {
//     console.log(num + " does not meet the criteria.");
// }

// #3

// const myArray = [];
// myArray[0] = 77;
// myArray[1] = "whatever";
// myArray[2] = true;
// myArray[3] = null;
// console.log(myArray.length);

// myArray[4] = prompt("Enter any value:");
// console.log(myArray[5]);

// myArray.splice(0, 1)
// const iterator = myArray.keys();
// for (const key of iterator) {
//   console.log(`${key}: ${myArray[key]}`);
// }

// #4

// let cities = ["Rome", "Lviv", "Warsaw"];

// let ribbon = cities[0];

// for (let i = 1; i < cities.length; i++) {
//   ribbon = ribbon + '*' + cities[i];
// }

// console.log(ribbon);


// #5

// const isAdult = +prompt("How old are you?");

// if (isAdult >= 18) {
//     console.log("You have reached the age of majority.");
// } else {
//     console.log("You're still too young.");
// }

// #6

// let t1 = prompt("Side of triangle 1: ");
// let t2 = prompt("Side of triangle 2: ");
// let t3 = prompt("Side of triangle 3: ");
// let t1Type = typeof t1
// let t2Type = typeof t2
// let t3Type = typeof t3

// // Calculate the semi-perimeter

// const s = (t1 + t2 + t3) / 2;


// if ((t1Type = 'number') && (t2Type = 'number') && (t3Type = 'number')) {
//    const area = Math.sqrt(s * (s - t1) * (s - t2) * (s - t3));    
//    console.log(parseFloat(area.toFixed(3)));
// } else {
//     console.log("Wrong data type");
// }

// #7

const now = new Date();
const hour = now.getHours();
let greeting;

if (hour >= 23 || hour < 5) {
    greeting = "Good night!";
} else if (hour >= 5 && hour < 11) {
    greeting = "Good morning!";
} else if (hour >= 11 && hour < 17) {
    greeting = "Good day!";
} else if (hour >= 17 && hour < 23) {
    greeting = "Good evening!";
}

console.log(greeting);

// switch (true) {
//     case (hour >= 23 || hour <= 5):
//         alert("Good night!");
//         break;
//     case (hour > 5 && hour <= 11):
//         alert("Good morning!");
//         break;
//     case (hour > 11 && hour <= 17):
//         alert("Good day!");
//         break;
//     case (hour > 17 && hour < 23):
//         alert("Good evening!");
//         break;
// }