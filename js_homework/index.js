//* Problem 1
console.log("%cProblem 1", "color: red;");
/* Define a function, as a function declaration, 
maxOfTwoNumbers that takes two numbers as arguments 
and returns the largest of them. If they are the same, 
return that number. Use the if-else construct or a 
ternary expression - the Math.max method is not allowed.*/

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1 || num2 === num1) {
    return num2;
  }
}

// Test the function
console.log(maxOfTwoNumbers(432, 123));

//* Problem 2
console.log("%cProblem 2", "color: red;");
/* Define a function, as a function expression, maxOfThree 
that takes three numbers as arguments and returns the largest 
of them. Again, the Math.max method is not allowed. */

const maxOfThree = function (firstNum, secondNum, thirdNum) {
  if (firstNum >= secondNum && firstNum >= thirdNum) {
    return firstNum;
  } else if (secondNum >= firstNum && secondNum >= thirdNum) {
    return secondNum;
  } else if (thirdNum >= firstNum && thirdNum >= secondNum) {
    return thirdNum;
  }
};

// Test the function
console.log(maxOfThree(65, 45, 65));

//* Problem 3
console.log("%cProblem 3", "color: red;");
/* Define a function, as a function declaration, isCharAVowel 
that takes a character as an argument and returns true if it 
is a vowel, false otherwise.*/

function isCharAVowel(char) {
  char = char.toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

// Test the function
console.log(isCharAVowel("g"));

//* Problem 4
console.log("%cProblem 4", "color: red;");
/* Define a function, as a function expression, sumArray that 
takes an array of numbers and returns the sum of those numbers. 
For example, sumArray([2, 4, 5]);would return 11.*/

const sumArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    sum += num;
  }
  return sum;
};

// Test the function
console.log(sumArray([10, 2, 20, 400, 1]));

//* Problem 5
console.log("%cProblem 5", "color: red;");
/* Define a function, as a function declaration, multiplyArray 
that takes an array of numbers and returns the product those numbers. 
For example, multiplyArray([2, 4, 5]);would return 40. */

function multiplyArray(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    product *= num;
  }
  return product;
}


// Test the function
console.log(multiplyArray([5, 4, 4]));

//* Problem 6
console.log("%cProblem 6", "color: red;");
/* Define a function, as a function expression, numArgs that returns 
the number of arguments passed to the function when called. */

const numArgs = function() {
  return arguments.length;
}

// Test the function
console.log(numArgs(5,4,3));

//* Problem 7
console.log("%cProblem 7", "color: red;");
/* Define a function, as a function declaration, reverseString that 
takes a string, reverses the characters, and returns it. For example, 
reverseString('rockstar');would return the string "ratskcor". */

function reverseString(string) {
  const characterArray = [];
  for (let i = 0; i < string.length; i++) {
    characterArray.push(string.slice(i, i + 1));
  }
  let stringBackwards = ""
  for (let i = string.length - 1; i >= 0; i--) {
    stringBackwards += characterArray[i]
  }
  return stringBackwards;
}

// Test the function
console.log(reverseString("fancy"));

//* Problem 8
console.log("%cProblem 8", "color: red;");
/* Define a function, as a function expression, longestStringInArray 
that takes an array of strings as an argument and returns the length 
of the longest string. */

const longestStringInArray = function(array) {
  let longestString = "".length;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString) {
      longestString = array[i].length;
    }
  }
  return longestString;
}

// Test the function
console.log(longestStringInArray(["test", "cat", "popsicle", "boulder"]));

//* Problem 9
console.log("%cProblem 9", "color: red;");
/* Define a function, as a function declaration, stringsLongerThan 
that takes an array of strings and a number as arguments; and returns 
an array of the strings that are longer than the number passed in. For 
example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 
3);would return ["hello", "morning"] */

function stringsLongerThan(array, num) {
  let longerStringsArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > num) {
      longerStringsArray.push(array[i]);
    }
  }
  return longerStringsArray;
}

console.log(stringsLongerThan(["nyc", "boston", "san fran", "chicago"], 3));
