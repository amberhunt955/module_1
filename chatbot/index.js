// Ask user for input
var userName = prompt("Hello, what is your name?");
var mood = prompt("How are you, " + userName + "?");

// Alert the user
alert("Cool " + userName + ", I'm happy you are feeling " + mood + "!");

// Template String
// $ allows to put variables right in the string without having to use spaces
// \n creates a new line for you
alert(`Awesome ${userName}!\nThanks for chatting with me!\nAnd thanks for letting me know your mood is ${mood}.`);

// === Find what year the user was born in == //

// Ask the user how old they are
var age = prompt("Now I have another question.\nHow old are you?");

// Ask user if they have had birthday in 2023
// Still having trouble making this work!
var birthdayYet = prompt(
  "Have you had your birthday yet in 2023? Type 'yes' or 'no'."
);

if ((birthdayYet === "yes")) {
  yearBorn = 2023 - age;
  alert("You were born in " + yearBorn + ".\nI'm so smart!");
} 
else if ((birthdayYet === "no")) {
  yearBorn = 2022 - age;
  alert("You were born in " + yearBorn + ".\nI'm so smart!");
} 
else {
  alert("You didn't answer 'yes' or 'no'.");
}

