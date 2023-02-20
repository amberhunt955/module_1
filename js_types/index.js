// Can use "" or '' in JS
// Can also use `` but avoid for now
// camelCase is best for JS


// === Primitive Types === //

// Type String
var message = "Hello, world!";
console.log(message);
console.log(typeof message);

// This is still a string in JS,
// even though it is one character
var firstLetter = "a";
console.log(firstLetter);
console.log(typeof firstLetter);

// Type Number
var age = 18;
console.log(age);
console.log(typeof age);

// Boolean
var isAdult = true;
var isChild = false;
console.log(isAdult);
console.log(typeof isAdult);
console.log(isChild);
console.log(typeof isChild);

// Null Value
var accountNumber = null;
console.log(typeof accountNumber);
// re-assigning the value of the variable
accountNumber = 123456;
console.log(accountNumber);
console.log(typeof accountNumber);

// Undefined Value
var userAddress;
console.log(userAddress);
console.log(typeof userAddress);
// Assigned undefined by default



// === Reference Types === //

// Arrays
// Arrays are in []
var namesArray = ["Colton", "Anthony", "Ranciel", "Faye"];
var agesArray = [23, 12, 8, 11];
console.log(namesArray);
console.log(typeof namesArray);
console.log(agesArray);
console.log(typeof agesArray);

// Objects
// Objects are in {}
var userDetails = {
    userName: "John",
    userLastname: "Wright",
    age: 22,
    hobbies: ["swimming", "running"]
};
console.log(userDetails);
console.log(typeof userDetails);


