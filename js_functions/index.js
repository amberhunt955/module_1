//* Function Examples
//* There are 3 primary ways to define functions in JS
console.log("%cSay hello and goodbye", "color:red;");
sayHello()

// First Way - function declaration
function sayHello(name) {
    console.log("Hello, " + name + "!");
}

// Second Way - function expression
const sayBye = function() {
    console.log("Goodbye!");
}

sayBye()

// Third Way - arrow function
// Can avoid curly brackets if only one line of code
console.log("%cArrow function", "color:red;");
const sayHelloWorld = () => console.log("Hello, world!");
sayHelloWorld()


//* Here are two functions that do the same thing
console.log("%cTwo functions, same way", "color:red;");

// return the addition of two numbers
function add(num1, num2) {
    console.log("From first function", num1, num2);
    return num1 + num2;
}
const resultOne = add(3, 5)
console.log("Result is", resultOne);

// return the addition of two numbers
const addTwo = (a, b) => a + b
const resultTwo = addTwo(3, 5);
console.log("Second function result is", resultTwo);

//* Let's write a function (class exercise)
// 0 is true, 1 is false in js
console.log("%cAre both even?", "color:red;");
// first way
console.log("%cfirst way", "color: red;");
function areBothEven(n1, n2) {
    console.log(n1 % 2 === 0 && n2 % 2 === 0);
}

// now let's test the first function
areBothEven(3, 7)

// second way (shortcut)
console.log("%csecond way", "color: red;");
function areBothEvenSecond(n1, n2) {
    console.log(!(n1 % 2) && !(n2 % 2));
}

// now let's test the second function
areBothEvenSecond(2, 4)

//* Another class example
console.log("%cgetDevObject Example", "color:red;");

function getDevObject(name) {
    const skills = [];

    for (let i = 1; i < arguments.length; i++) {
        skills.push(arguments[i])
    }

    return {
        devName: name,
        skills: skills
    }
}

const devObj = getDevObject("Maria", "HTML", "CSS", "JavaScript")
console.log(devObj);

//* And here's a better way to do that
console.log("%cgetDevFullObject Example", "color:red;");
function getDevFullObject(name, lastName, ...skills) {
    return {
        devName: name,
        devLastName: lastName,
        devSkills: skills
    }
}

const devFullObject = getDevFullObject("John", "Davidson", "python", "html", "css");
console.log(devFullObject);

//* Default Parameters
// Provide a default value for a parameter if one is not provided
// Try to avoid more than one default parameter though (bad practice)
console.log("%cDefault Parameters Example", "color: red;");
function setColor(bike, color = "purple") {
    return {
        bikeType: bike,
        bikeColor: color
    }
}

const bikeObj = setColor("bmx");
console.log(bikeObj);

//////////////////////* Exercises ///////////////////////////////
console.log("%c ----- EXERCISES -----", "color: red;");


//* Exercise 1 - Write a Function Declaration
console.log("%cExercise 1 - Compute Area", "color: red;");
// Write a function named computeArea using the function declaration approach.
// It will have two parameters: width& height.
// It will compute the area of a rectangle (width X height) and return a string in the following form:
// The area of a rectangle with a width of _ and a height of _ is ___ square units.
// Invoke the function to test it.

function computeArea(width, height) {
    const area = width*height
    return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + area 
}

console.log(computeArea(5, 5));

//* Exercise 2 - Write a Function Expression
console.log("%cExercise 2 - Planet has water?", "color: red;");
// Write a function named planetHasWater using the function expression syntax.
// It will have one parameter: planet.
// Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!

const planetHasWater = function(planet) {
    planet = planet.toLowerCase()
    let hasWater = false;
    if (planet === "earth" || planet === "mars") {
        hasWater = true;
    } 
    return "The planet " + planet + " has water: " + hasWater;
}

console.log(planetHasWater("eArTh"));

//* Lab - Practice What You Learned
console.log("%cLab - Practice What You Learned", "color: red;");
/*
Challenge: addList

=======Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5

*/

// Your solution for 01-addList here:

function addList() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(addList(5, 10, 20));
