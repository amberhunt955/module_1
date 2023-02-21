//& The DOM (Document Object Model)

// The DOM (Document Object Model) is the in-memory 
// representation of a browser's web document. It's 
// a tree-like data structure with the top (root) 
// being the document object.

// The DOM's application programming interface (API) 
// enables developers to make the UI dynamic by using 
// JavaScript to:
  // Add/remove elements to/from the document
  // Change the content of elements
  // Change the style properties of elements

// An API is a way for two or more computer programs to 
// communicate with each other

//* Accessing the DOM
// getElementById is a method of the DOM API
// We access the DOM through the document object
const titleEl = document.getElementById("title");
titleEl.style.backgroundColor = "purple";
titleEl.style.padding = "50px";
titleEl.style.color = "white"
// console.log(titleEl);
// console.dir(titleEl);

const h2 = document.querySelector("h2");
const h1Class = document.querySelector(".main-title");
const h1ID = document.querySelector("#title");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3")

console.dir(h2);
console.dir(h1Class);
console.dir(h1ID);
console.dir(h1);
console.dir(h3);

const h2All = document.querySelectorAll("h2");
console.log(h2All);
console.dir(h2All);

const p = document.querySelector("p");
console.log(p);
console.dir(p);

p.innerText = "Yay!"
p.innerHTML = "New string value";

console.log(p);
console.dir(p);

// Big difference between innerText and innerHTML
// innerText puts everything as text
// innerHTML lets you wrap things in elements
p.innerText = "This is the <i>list of values</i>"
p.innerHTML = "This is the <i>list of values</i>"

console.log("----------------------------");
//* Looping through
// Shopping List
const lis = document.querySelectorAll("li");
console.log(lis);

for (liElement of lis) {
    console.log(liElement);
    if (liElement.innerText === "Eggs") {
        console.log("Price is going up!");
        break;
    }
}

console.log("Now let's see the forEach loop");

// Normally, Abraham uses forEach
// But! You cannot use break for forEach
// So if you want to break - you will have
// to use the for loop as seen above
lis.forEach( (liElement, index) => {
    console.log(liElement, index);
    if (liElement.innerText === "Eggs") {
        console.log("Price is going up!");
    }
})

console.log("----------------------------");
//* Manipulating classes with the DOM

// Add classes to an element class list
lis[0].classList.add("selected")
lis[1].classList.add("removed")
lis[2].classList.add("selected")

// Remove classes by an element class list
lis[2].classList.remove("selected")

// Check if the element contains the designated class
console.log( lis[0].classList.contains("selected") );

// Another way to add and remove classes
const comments = document.querySelector("#comments");
comments.classList.toggle("selected"); // adds selected class
// comments.classList.toggle("selected"); // removes selected class
console.log(comments);

// Replace an old class for a new class & return a boolean
// Can also console log this to see true or false 
// (if it was replaced as specified or not)
console.log(comments.classList.replace("selected", "removed"))

console.log("----------------------------");
//* Element collections

// Returns a NodeList
// Side note: you can add any CSS selector you want (ie, "#chat > li")
// This method is preferred & more flexible
// querySelector & querySelectorAll cover pretty much everything
const chatLis = document.querySelectorAll("#chat > li")
console.log(chatLis);

// Returns an HTMLCollectionList
// This collection will not give you a forEach
// You have to use extra work if you use this method
const allLis = document.getElementsByTagName("li")
console.log(allLis);

// Create a regular array from a collection of values
// Returns an array with all the methods you want
// We passed the HTMLCollectionList in here to get what we want
// This is a static array
// We don't need to create an instance of an array first
const arrayOfLis = Array.from(allLis);
console.log(arrayOfLis);
