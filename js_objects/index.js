// Reference Types
console.log("%cReference Types", "color:red;");

const colors = ["red", "blue", "white"];

const copyOfColors = colors.slice(0);

copyOfColors.push("purple");

console.log(colors);
console.log(copyOfColors);

const carArr = ["Blue", 4000, 1989] // doesn't really tell us what the data means
const userArr = ["user1", "34", "true"]

// Objects
console.log("%cObjects", "color:red;");

const car = {
    color: "Blue", 
    horsepower: 4000,
    year: 1989 // now we have a better idea about what this data means
}

console.log(car);
console.log(car.year);

const user = {
    username: "user1",
    age: 34,
    isAdmin: true,
    address: {
        street: "123 Main St",
        apt: 122,
        state: "NY",
        zip: 10033
    },
    hobbies: ["running", "reading"]
}

// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user.address.state);
// console.log(user.hobbies);
// console.log(user.hobbies[1]);

console.log(user);
user.isAdmin = false;
console.log(user);

if (user.isAdmin || user.age > 18) {
    console.log("Hello, admin!");
} else {
    console.log("Hello, guest!");
}

const house = {
    address: {
        street: "123 Main St",
        apt: 122,
        state: "NY",
        zip: 10023
    }
};

house.rooms = 4;
house.hasPool = true;

house.address.state = "NJ";

console.log(house);

// Exercise

const pet = {}
pet.type = "cat;"
pet.name = "Pete";
pet.legs = 4;
pet.isWeird = true;
pet.likesTreats = true;
pet.quirks = ["human-like expressions", "gives hugs", "hates being picked up", "likes to lick things", "dives under blankets"]
console.log(pet);

//* Week 3, Day 3
console.log("%c---------------------", "color:green;");
console.log("%c--- Week 3, Day 3 ---", "color:green;");
console.log("%c---------------------", "color:green;");

const adventurer = {
    name: "Timothy",
    hitPoints: 10,
    belongings: ["sword", "potion", "Tums"]
}

console.log(adventurer.belongings);

for (let i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}

for (item of adventurer.belongings) {
    console.log(item);
}

for (prop in adventurer) {
    console.log(prop);
}

console.log("name" in adventurer);

adventurer.health = 1000;

adventurer.sayHi = function () {
    console.log("Hi there!");
}

adventurer.isHungry = true;
// delete a property (not used a lot)
delete adventurer.isHungry;

// create a property using square brackets
adventurer["companion"] = {
    name: "Velma",
    type: "Bat"
}

adventurer.companion.belongings = ["bugs", "sunglasses"];
adventurer.companion.sayHi = function() {
    console.log("weeeeeee!");
}

adventurer.heightInInches = 5.6;

console.log(adventurer);
adventurer.sayHi();
adventurer.companion.sayHi();

const movies = [
    { title: "Tokyo Story", minutes: 190},
    { title: "Paul Blart: Mall Cop", minutes: 190 },
    { title: "L'Avventura", minutes: 190 }
]

console.log(movies[2].title);

////////////////

const player = {
    playerName: "Josh",
    health: 1000,
    power: 500,
    stamina: 300,
    sayHi: function() {
        console.log("Hello, my name is " + this.playerName);
    }
}

const enemy = {
    enemyName: "Colton",
    health: 1000,
    power: 50000,
    stamina: 10000000,
    sayHi: function() {
        console.log("Hey, my name is " + this.enemyName);
    }
}

console.log(player);
console.log(enemy);
player.sayHi();
enemy.sayHi();