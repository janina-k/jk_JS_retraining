// #1

// function calcRectangleArea(width, height) {
//     if(typeof width != 'number' || isNaN(width)){
//         throw new Error("Value is not a number");
//     }
//     if (typeof height != 'number' || isNaN(width)){
//         throw new Error("Value is not a number");
//     let result = width * height;
//     return result;
// }
// let result = width * height;
//     return result;
// }

// let width = 4;
// let height = 'aaa';

// console.log(calcRectangleArea(width, height));

// #2

// function checkAge() {
//     try {
//                 let age = prompt("How old are you?")
               
//                 if (age.length == 0) {
//                     throw new Error("The field is empty! Please enter your age");
//                 }
//                 else if (Number(age) < 14) {
//                     throw new Error("You're not old enough");
//                 }else if(typeof Number(age) != 'number' || isNaN(Number(age))){
//                     throw new Error("Please enter a numeric value.");
//                 }
            
//                 alert("You can watch the movie")
               
//                 } catch(error) {
//                     console.log(error.message);
//                 }
//             }
            
//             console.log(checkAge());

// #3

// class MonthException extends Error {
//         constructor(message){
//             super(message);
//             this.name = "MonthException"
//         }
//     }
    
//     function showMonthName(month){
//         const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//         ];
        
//         if (month < 1 || month > 12) {
//             throw new MonthException('Incorrect month number');
//         }
        
//         return monthNames[month - 1];
//     }
//         try{
//             console.log(showMonthName(14));
//         }catch (error) {
//             console.log(error.name, error.message);
//         }
    
// #4
    
        // function showUser(id) {
        //     if (id < 0) {
        //         throw new Error(`ID must not be negative: ${id}`);
        //     }
        //     return { id: id };
        // }
        
        // function showUsers(ids) {
        //     const result = [];
        //     for (let id of ids) {
        //         try {
        //             const user = showUser(id);
        //             result.push(user);
        //         } catch (error) {
        //             console.error(error.message);
        //         }
        //     }
        //     return result;
        // }
        
        // const users = showUsers([7, -12, 44, 22]);
        // console.log(users);