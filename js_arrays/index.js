//* Movies Array
const movies = ["Caddyshack", "Interstellar", "Scarface"];
console.log(movies);
console.log(movies[2]);

const favMovie = console.log(movies[1]);

//* Updating a value inside of an array
movies[2] = "Transformers"; // updates movie
movies[3] = "MR Robot"; // adds new movie
console.log(movies);

//* Add elements to the end of an array
movies.push("Trading Places", "Antitrust");
console.log(movies);

//* Add elements to the start of an array
movies.unshift("Star Wars");
console.log(movies);

//* Pop! Remove an element from end of the array
let removedMovie = movies.pop();
console.log(movies);
console.log(removedMovie + " was removed.");

//* Shift! Remove an element from start of array
removedMovie = movies.shift();
console.log(movies);
console.log(removedMovie + " was removed.");

//* Splice
//* movies.splice(3, 1, "Four Brothers", "Black Hawk Down");
//* console.log(movies);
//* Four Brothers replaces index 3
//* Black Hawk Down goes after index 3
//* BHD does not replace because we are only replacing 1

movies.splice(3, 2, "Spaceballs", "Alien");
console.log(movies);

function sayHello() {

}

//* For Each Loops
movies.forEach(function(movie) {
    console.log(movie);
})

movies.forEach(function(movie, idx) {
    console.log(idx, movie);
})

//* For Of Loops
for (let movie of movies) {
    console.log(movies);
} 

//* For Loop
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

//* Slice copies a section of the array
//* It returns a new array
//* It does not change the original array
const lastTwoMovies = movies.slice(0, 2);
lastTwoMovies.push("Toy Story");
console.log(movies);
console.log(lastTwoMovies);

//* Spread operator
const moviesCopy = ["Star Wars", ...movies, "Contact"]
console.log(moviesCopy);
console.log(movies);

//* Show that these are different arrays
//* Even though they are already diff (Contact, Star Wars)
moviesCopy.push("Up");
console.log(moviesCopy);
console.log(movies);

//* Convert array to a string
const moviesStr = moviesCopy.join(", ");
console.log(moviesStr);

