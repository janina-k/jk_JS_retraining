// #1

// function getPromise(message, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(message);
//       }, delay);
//     });
//   }

// getPromise("test promise", 2000).then(function(data) {

//     console.log(data);
    
//     });
    
    // Result : after 2 seconds , "test promise" is displayed in the console

    // #2

    
// function calcArrProduct(arr) {
//   return new Promise((resolve) => {
//     const allNumbers = arr.every(item => typeof item === 'number' && !isNaN(item));
//     if (allNumbers) {
//       const product = arr.reduce((acc, num) => acc * num, 1);
//       resolve(product);
//     } else {
//       resolve("Error! Incorrect array!");
//     }
//   });
// }

// // Example usage:
// // calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
// calcArrProduct([5, "string", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"

// #3

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

// function showNumbers() {
//     let promiseChain = Promise.resolve();
    
//     for (let i = 0; i <= 10; i++) {
//         promiseChain = promiseChain.then(() => {
//             const randomTime = Math.random() * 3000;
//             return delay(i, randomTime).then(result => {
//                 console.log(result);
//             });
//         });
//     }
// }

// showNumbers();

// #4

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i <= 10; i++) {
        const randomTime = Math.random() * 3000; 
        const result = await delay(i, randomTime);   
        console.log(result);                         
    }
}

showNumbers();

