//* While Loops
console.log("%cCounter Example", "color: red;");

let counter = 0;

while (counter <= 5) {
    console.log(counter);

    if (counter === 3) {
        counter++ // you need this, or you will create infinity loop
        // continue; // skip one iteration
    }

    if (counter === 4) {
        break; // stop or break out of loop
    } else {
        console.log("Counter is NOT 4");
    }

    counter++
}

//* Countdown
console.log("%cCountdown Example", "color: red;");

// variable definition
let countdown = 10;

// condition
while (countdown >= 0) {
    console.log(countdown);

    // decrementor 
    countdown--
}

//* Exercise 1
// Keep printing integers in multiples of 3 
// as long as integers are less than 35 using a while loop
console.log("%cExercise 1", "color: red;");

let threeMultiple = 3;

while (threeMultiple <= 35) {
    if (threeMultiple % 3 === 0) {
        console.log(threeMultiple);
    }
    threeMultiple++
}

//* Exercise 2
// Keep printing integers in multiples of 5 
// as long as integers are less than 100

console.log("%cExercise 2", "color: red;");

let fiveMultiple = 5;

while (fiveMultiple < 100) {
    if (fiveMultiple % 5 === 0) {
        console.log(fiveMultiple);
    }
    fiveMultiple++
}

//* Alifa's Example 2
console.log("%cAlifa's Example", "color: red;");

let alifa = 0;

while (alifa < 100) {
    console.log(alifa += 5);
}

//* Exercise 3
// Using a while loop print integers between 0 and 20. 
// All numbers divisible by 2 should be multiplied by 
// 3 before they are output. All other integers 
// should not be output.
// Hint: use Modulo
console.log("%cExercise 3", "color: red;");

let number = 0;

while (number <= 20) {
    if (number % 2 === 0) {
        console.log(number*3);
    }
    number++
}

//* Exercise 4
// Using a while loop, print 
// out all prime numbers between 0 - 20
console.log("%cExercise 4", "color: red");

let num = 2;

while(num <= 20) {
    let isPrime= true;
    let i = 2;

    // checks if num is divisible
    // by any number from i to num
    while (i < num) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++
    }

    if (isPrime) {
        console.log(num);
    }

    num++
}

//* Bonus Logical Question
// Nando went to the vending machine 
// to buy himself a cookie. The cookie 
// costs $4 dollars. He paid with a $10 
// bill, the vending machine paid him 
// back in quarters. Write a loop that 
// says how many quarters he got in return.
console.log("%cBonus Logical Question", "color: red;");

let quarters = 0;

for (dollarsBack = 1; dollarsBack <= 6; dollarsBack++) {
    quarters += 4;
}

console.log(quarters);





