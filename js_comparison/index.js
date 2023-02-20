console.log (5 > 2); // true
console.log(5 < 2); // false
console.log(10 == 10); // true
console.log(3 == 6); // false
console.log(3 != 6); // true
console.log(55 >= 55);
console.log(33 <= 100);

// Not Operator
console.log(3 != 6); // true

var result = 5 > 3;
console.log(result);

console.log('A' > 'a'); // false because of unicode

// My examples //

var user1 ="Alex";
var user2 = "alex";
console.log(user1 == user2);

var num1 = 5;
var num2 = "5";
console.log(num1 == num2); // true
console.log(num1 === num2); // false
//////////////


// No type conversion equality
var num1 = 5;
var num2 = '5';
console.log(num1 === num2);

console.log("RESULT -->", !false);