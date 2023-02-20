var num1 = 100;
var num2 = 50;
var value;

value = num1 + num2;
value = num1 - num2;
value = num1 * num2;
value = num1 / num2;

// Find the remainder
// Useful for defining if number is even/odd
num1 = 2
value = num1 % 2;
console.log(value);
// Remainder is 0 - even number
num1 = 3
value = num1 % 2;
console.log(value);
// Remainder is 1 - odd number

// Importance of Order of Operations
num1 = 100
num2 = 50
value = num1 + num2 / 2
console.log(value);
// You get 125
num1 = 100
num2 = 50
value = (num1 + num2) / 2
console.log(value);
// You get 75

// Math Object
// not really understanding the point here...
// console.log(value)
// var console = {
    // log: "string"// do something
// }

// == Useful math stuff == //
// find pi
value = Math.PI;
console.log(value);
// round down
value = Math.round(2.3);
console.log(value);
value = Math.floor(2.9);
console.log(value);
// round up
value = Math.round(2.9);
console.log(value);
value = Math.ceil(2.3)
console.log(value);
// return largest number
value = Math.max(2, 33, 543, 43, 3, 3);
console.log(value);
// return smallest number
value = Math.min(2, 33, 543, 43, 3, 3);
console.log(value);
// return random # between 0 and 1
value = Math.random();
console.log(value);
// return random # between 0 and 10
value = Math.random()*10;
console.log(value);
// return random # between 0 and 10 (rounded down)
value = Math.floor(Math.random()*10);
console.log(value);
// return random # between another set of #s
value = Math.floor(Math.random()*10) + 1;
console.log(value);