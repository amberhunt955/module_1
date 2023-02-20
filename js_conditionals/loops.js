//* Lesson
// iterator (i), condition (i<10), incrementor (i++)
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log("break");

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//* Lab

//* Write a for loop that counts down from 10 to 1
// for (i = 10; i > 0; i--) {
//     console.log(i);
// }

//* Write a for loop for
//* the given output: 1, 3, 5, 7,
//* 9 2, 4, 6, 8, 10

// for (i = 1; i <= 9; i = i + 2) {
//     console.log(i);
//     if (i === 9) {
//         for (i = 2; i <=10; i = i+2) {
//             console.log(i);
//         }
//     }
// }

// Shilpa's way

// for (let i=1; i<=10; i+=2) {
//     console.log(i);
//     if (i===9){
//         i=0;
//     }
// }

//* create a loop that outputs multiples of
//* 3 starting at 6 ending at 60.

// for (i = 6; i <= 60; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// * create a loop for the given output
//* #
//* ##
//* ###
//* ####
//* #####
//* ######
//* #######

// My first way - look at video for what kadir did

// My (second) way

// console.log("my way");
// for (i = "#"; i <= "#######"; i = i + "#") {
//     console.log(i);
// }

// // Otmane's way

// console.log("otmane's way");
// for(let i = "#"; i.length <= 7; i+= "#") {
//     console.log(i);
// }

// // Abraham's way

// console.log("abraham's way");
// let hash = " ";

// for (let i = 0; i < 7; i++) {
//     hash = hash + "#";
//     console.log(i, hash);
// }

//* Using the remainder % operator, write a for loop
//* that iterates between 0 and 10 and prints all even numbers.<<

// for (i = 0; i <= 10; i++) {
//     if (i > 0 && i % 2 === 0) {
//         console.log(i);
//     }
// }

//* Write a for loop that iterates from 1 - 20.
//* Prints “prime” for all prime numbers,
//* “even” for all even numbers,
//* and “odd” for all odd numbers.
//* Treat 2 as an even number and 1 & 3 as odd

// let primeNumbers = [3, 5, 7];
// // Decide if number is even
// for (i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " even");
//     // Decide if number is prime, filtering out odd numbers divisible by prime numbers
//   } else if (i === 5 || (i % 3 != 0 && i % 5 != 0 && i != 1)) {
//     let isPrime = true;

//     for (j = 0; j <= primeNumbers.length; j++) {
//       if (i % primeNumbers[j] === 0) {
//         let isPrime = false;
//     }
// }
// if (isPrime) {
//     console.log(i + "%c prime", "color: red;");
//     primeNumbers.push(i);
// }
//     // Everything else is odd
//   } else {
//     console.log(i + " odd");
//   }
// }

// console.log(primeNumbers);

//* Rewriting my code as it got messy:

// let primeNumbers = [3, 5]

// for (i = 1; i <= 100; i++) {

//     let isPrime = true; 

//     // Decide if number is even
//     if (i % 2 === 0) {
//         console.log(i + " is even.");
    
//     // Cycle through array to decide if odd #s are prime
//     } else if (i === 5 || i % 3 != 0 && i % 5 != 0 && i != 1) {
//         for (j = 0; j < primeNumbers.length; j++) {
//             if (i % primeNumbers[j] != 0) {
//                 let isPrime = false;
//             }
//         }
//     }

//     if (isPrime) {
//         console.log(i + "%c is prime", "color:red;");
//     } else {
//         console.log(i + " is odd.");
//     }
// }

//* Playing with arrays

// const arrayExample = [1, 2, 3, 4, 5, 6];

// for (j = 0; j < arrayExample.length; j++) {
//     console.log(10 - arrayExample[j]);
// }

//* More loops in class
//* Prime # - Abraham's Example

// Even and Odd
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         // console.log(i + " is even.");
//     } else if (i % 2 !== 0) {
//         // console.log(i + " is odd.");
//     }
// }

// Prime Number 
// for (let i = 2; i <= 100; i++) {

//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     // console.log(j, " - ", i);
//     if (i % j === 0) {
//       isPrime = false;
//     }
//   }

//   if (isPrime) {
//     console.log(i + "%c prime", "color: red;");
//   }
// }

//* Another for loop example

// for (let i = 0; i <= 3; i++) {
//     console.log(i + "%c outer loop", "color: red;");

//     for (let j = 0; j <=3; j++) {
//         console.log(j + " inner loop");
//     }
// }
