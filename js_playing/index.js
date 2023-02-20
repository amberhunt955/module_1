// Determine if a number is an armstrong number

function isArmstrong(num) {
    // separate the digits of the number using an array
    let array = num.toString().split("");

    let power = array.length;
    let sumOfDigits = 0;

    for (item of array) {
        // add digits (each to the power of num (array) length)
        sumOfDigits += Math.pow(item, power);
    }

    if (sumOfDigits === num) {
        return true;
    } else {
        return false;
    }
}



class Person {
    constructor(name) {
        this.name = name;
    }
    crossTheRoad() {
        console.log("Hello from the other side...");
    }
}
const adele = new Person("adele")
adele.crossTheRoad();


