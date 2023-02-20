// Create a new class
class Vehicle {

    constructor(vin, make, model, year) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.year = year;
        this.running = false;
    }

    // instance method to start the vehicle
    start() {
        this.running = true;
        console.log("Vehicle running.....");
    }

    // overwrite method toString(), which is from the parent class
    toString() {
        return `Vehicle ${this.vin} is a ${this.make}, model ${this.model}.`
    }

    // static method to give class info
    static vehicleInfo() {
        console.log("Vehicle class...");
    }
}

// Create an instance of the vehicle class
const car1 = new Vehicle("fd4vc3", "Honda", "civic");
const car2 = new Vehicle("al9vv2", "BMW", "m3")

console.log(car1);
console.log(car2);

// call the instance method start()
car1.start();

// call the static method vehicleInfo()
Vehicle.vehicleInfo();

// call the overwritten method
console.log(car1.toString());

// let's create a subclass
// using extends, we will inherit everything vehicle class contains
class Electric extends Vehicle {
    battery = 300
}

const car3 = new Electric();
console.log(car3);




// instance method
// const color = []
// // color.forEach()

// // static method
// Math.random();


//* BREAKOUT ROOM EXERCISES
console.log("%c--- Breakout Room Exercises ---", "color:green;");

//* ===============Exercise 1: ===========================
console.log("%cExercise 1 -->", "color:green;");
// * Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.


// You can set these object properties to whatever values you want,
// as long as name is a string, legs and tails are numbers, and friends is an array.

//Only change code below this line

const myDog = {
    name: "Flo",
    legs: 4,
    tails: 1,
    friends: ["amber", "liva", "paula", "agustin", "star", "tip"]
}

console.log(myDog);

//* ===============Exercise 2: ===========================
console.log("%cExercise 2 -->", "color:green;");
//* Setup

const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  //* Assign each variable its corresponding value from the object
  //Only change code below this line

  testObj.hat = "toque";
  testObj.shirt = "long sleeve"
  testObj.shoes = "winter boots"

  console.log(testObj);

  //* ===============Exercise 3: ===========================
  console.log("%cExercise 3 -->", "color:green;");
  //* Read the values of the properties 'an entree' and 'the drink' of testObj2 using bracket notation and assign them to two new variables entreeValue and drinkValue respectively.
  
  // Setup
  const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line

  console.log(testObj2["an entree"]);
  console.log(testObj2["the drink"]);
  const entreeValue = testObj2["an entree"];
  const drinkValue = testObj2["the drink"];
  console.log(entreeValue);
  console.log(drinkValue);

  //* ===============Exercise 4: ===========================
  console.log("%cExercise 4 -->", "color:green;");
  //* Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
  
  // Setup
  const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16; // Change this line
  const player = testObj3[playerNumber]; // Change this line
  console.log(playerNumber);
  console.log(player);
  
  //* ===============Exercise 5: ===========================
  console.log("%cExercise 5 -->", "color:green;");
  // Update the myDog2 object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
  
  // Setup
  const myDog2 = {
    name: "Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog2.name = "Happy Coder";
  console.log(myDog2);
  
  //* ===============Exercise 6: ===========================
  console.log("%cExercise 6 -->", "color:green;");
  //Add a bark property to myDog3 and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
  
  const myDog3 = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog3.bark = "woof wooooooof";
  console.log(myDog3);
  
  //* ===============Exercise 7: ===========================
  console.log("%cExercise 7 -->", "color:green;");
  //Delete the tails property from myDog4. You may use either dot or bracket notation.
  
  // Setup
  const myDog4 = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
    bark: "woof"
  };
  
  // Only change code below this line
  delete myDog4.tails;
  console.log(myDog4);
  
  //* ===============Exercise 8: ===========================
  console.log("%cExercise 8 -->", "color:green;");
  // Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
  
  const myMusic = [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true
    }
  ];
  
  // Only change code below this line

  myMusic.push({artist: "astro'n'out", title: "multivitaminu multipaka", release_year: 2019, formats: ["CD", "Spotify"]})
  console.log(myMusic);
  
  //* ===============Exercise 9: ===========================
  console.log("%cExercise 9 -->", "color:green;");
  //   Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
  
  const myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      outside: {
        trunk: "jack"
      }
    }
  };
  
  // Only change code below this line
  const gloveBoxContents = myStorage.car.inside["glove box"]
  console.log(gloveBoxContents);

  //* ===============Exercise 10: FINAL BOSS ===========================
  console.log("%cExercise 10 -->", "color:green;");
  // Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
  
  const myPlants = [
    {
      type: "flowers",
      list: ["rose", "tulip", "dandelion"]
    },
    {
      type: "trees",
      list: ["fir", "pine", "birch"]
    }
  ];
  
  // Only change code below this line
  const secondTree = myPlants[1].list[1]
  console.log(secondTree);

