// #1

// let numbers = [2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// let i = 0
// while (i < numbers.length){ // numbers.length = 4
//     console.log(numbers[i]);
//     i++;
// }

// #2

// for (let i = 0; i <= 15; i++){
//     if (i % 2 === 0){
//         console.log(i + " is even")
//     } else {
//             console.log(i + " is odd");
//         }
// }

// #3

// function randArray(k) {
//         const array = [];
//         for (let i = 0; i < k; i++) {
//             const randomNumber = Math.floor(Math.random() * 500) + 1;
//             array.push(randomNumber);
//         }
//         return array;
//     }
//     console.log(randArray(5));

// #4

// function raiseToDegree(a, b) {
//     let result = a ** b;
//     return result;
// }

// let a = +prompt("Provide number a");
// let b = +prompt("Provide number b")

// console.log(raiseToDegree(a, b));

// #5

// function findMin() {
//     let min = arguments[0]
//     for (let i = 1; i < arguments.length; i++){
//        if (min > arguments[i]) {
//         min = arguments[i];
//        }
//     }
//     return min;
// }

// console.log(findMin(12, 14, -4, 0.2));

// #6

// function findUnique(arr) {
//     for (let i = 0; i < arr.length - 1; i++){
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(findUnique([1,2,3,4,5,6]));
// console.log(findUnique([1,2,3,6,4,5,6]));

// #7

// function lastEl(arr, x) {
//     if (isNaN(x) ) return arr.slice(-1);
//     if (x <= 0) return [];
//     return arr.slice(-x);

// }

// console.log(lastEl([3, 4, 10, -5]));
// console.log(lastEl([3, 4, 10, -5],2));
// console.log(lastEl([3, 4, 10, -5],8));

// #8

function capitalFirstLetter(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

let input = 'i love java script';
let output = capitalFirstLetter(input);
console.log(output);