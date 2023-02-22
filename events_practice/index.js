//* Event Listeners

// Get the element we want to attach the event listener to
const button = document.querySelector("button")
const input = document.querySelector("input");

// Attach the event listener to the element
// When the "click" happens, the function happens
// You don't have to declare the function here
// You can declare the function outside if you want
// This is an anonymous function because it has no name
button.addEventListener("click", function(event) {
    const li = document.createElement("li");
    li.textContent = input.value;
    
    // document.querySelector("ul").appendChild(li);
    const ul = document.querySelector("ul");
    ul.appendChild(li);
    input.value = "";
})

button.addEventListener("click", function(e) {
    console.log("Second Event Listener");
})

button.addEventListener("click", sayHello);

// -----------------------------------------
// You can't have two event listeners with onclick
// This will not work! so I won't fill out these functions
button.onclick = function() {

}

button.onclick = function() {
    
}
// -----------------------------------------

// Keydown example
// input.addEventListener("keydown", function() {
//     console.log(input.value);
// })

function sayHello() {
    console.log("Hello from function!");
}

// Remove an event listener
// button.removeEventListener("click", sayHello);

// Another way to remove an event listener
const removeEventLi = document.getElementById("remove");

removeEventLi.addEventListener("click", function() {
    button.removeEventListener("click", sayHello)
});

//* Event Bubbling

// Create ul in global scope. Also create body
const ul = document.querySelector("ul");
const body = document.querySelector("body");

ul.addEventListener("click", function(e) {
    console.log("From UL || Event on: ", e.target);
    e.target.remove();
    e.stopPropagation();
})

body.addEventListener("click", function(e) {
    console.log("From Body || Event on: ", e.target);
})

//* About Event Delegation...
// Event bubbling allows us to implement event delegation

// Event delegation allows us to register a single event 
// listener that can respond to events triggered by any of 
// its descendants. Much more efficient!

