// //? DECLARE A NEW PLAYER CLASS
// class Player {
//   // default values
//   legs = 2;
//   arms = 2;
//   eyes = 2;
//   health = 500;
//   damage = 100;

//   // create a private property
//   #hairColor;

//   // constructor function
//   constructor(name, age, hairColor) {
//     this.name = name;
//     this.age = age;
//     this.#hairColor = hairColor;
//     // can also put default values here
//     this.lovesPizza = true;
//   }

//   // instance method (by default)
//   // instance method only callable by an instance
//   // (such as mario or luigi)
//   // cannot call from the player class
//   greet(otherCharacter = "friend") {
//     console.log(`Hello, ${otherCharacter}!`);
//   }

//   attack() {
//     console.log(`${this.name} is attacking.`);
//   }

//   takeDamage(damage) {
//     this.health -= damage;
//     console.log(`${this.name} now has a health level of ${this.health}.`);
//   }

//   // setter method
//   setHair(newHairColor) {
//     this.#hairColor = newHairColor;
//   }

//   // getter method
//   getHair() {
//     console.log(this.#hairColor);
//     return this.#hairColor;
//   }
// }

// //* Create two players, Mario and Luigi
// const mario = new Player("Mario", 32, "black");
// const luigi = new Player("Luigi", 30, "purple");

// //* Log Mario and Luigi in the console
// console.log(mario);
// console.log(luigi);

// //? CREATE THE FRIEND CLASS
// //? (as an extension of the player class)
// class Friend extends Player {
//   constructor(name, age, hairColor, ...skills) {
//     super(name, age, hairColor); // send the values to the parent
//     this.skills = skills; // new array of skills
//   }

//   fly() {
//     console.log(`${this.name} is flying...`);
//   }

//   attack() {
//     console.log("Toad sends a fireball!!!!!!");
//   }

//   doubleAttack() {
//     // call the attack function from the parent (player) class
//     super.attack();
//     // call the attack function from this (friend) class
//     this.attack();
//   }
// }

// //* Create a new friend named Toad
// const toad = new Friend("Toad", 18, "rainbow", "builder", "jumper", "runner");

// //* Log Toad in the console
// console.log(toad);

// //? CREATE THE ENEMY CLASS
// //? (as an extension of the player class)
// class Enemy extends Player {}

// //* Create a new enemy named Bowser
// const bowser = new Enemy("Bowser", 38, "red");

// //& GAME RULES

// const randomNum = Math.floor(Math.random() * 2);
// console.log(randomNum);
// if (randomNum < 1) {
//   bowser.takeDamage(luigi.damage);
// }

// //! --- PLAYING THE GAME ---
// //* Have the players interact a bit
// mario.greet("Luigi");
// luigi.greet("Mario");

// toad.fly();
// mario.attack();
// luigi.takeDamage(50);
// toad.attack();
// mario.takeDamage(100);
// luigi.takeDamage(100);
// luigi.attack();
// toad.takeDamage(200);
// toad.doubleAttack();

// //* Check if mario is in the player class
// console.log(mario instanceof Player);

// //* Can't update a private property this way
// // mario.#hairColor = "yellow";
// //* And the following will just add a new property ->
// // mario.hairColor = "yellow";

// //* But you can update it this way
// // mario.setHair("red");

// //* log mario and luigi in the console to check the final result
// console.log(mario);
// console.log(luigi);

//^ ----- EXERCISES -----

//! Week 3, Day 2 Homework

// //* Exercise 1 
// //? Create the cat class
// class Cat {
//     // default values
//     legs = 4;
//     eyes = 2;
//     tails = 1;
//     health = 100;

//     constructor(name, age, color) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }

//     // create a method to pet the cat
//     petCat() {
//         this.health += 100;
//         console.log(`${this.name} loves pets! Health has increased to ${this.health}.`);
//     }

//     // create a method to take walk
//     takeWalk() {
//         this.health -= 10;
//         // console.log(`${this.name} loves to walk! But it's not always safe outside... health has decreased to ${this.health}.`);
//     }

//     // create a method for the cat to meow
//     meow(isHappy) {
//         if (isHappy === true) {
//             this.health += 50;
//             // console.log(`${this.name} did a happy meow. Health has increased by 50.`);
//         } else {
//             this.health -= 50;
//             // console.log(`${this.name} did a sad meow. Health has decreased by 50.`);

//         }
//     }
// }

// //* Create two instances the cat class
// const pete = new Cat("Pete", 12, "brown");
// const penny = new Cat("Penny", 8, "orange");

// // log both instances
// console.log(pete);
// console.log(penny);

// // invoke (use/apply) the petCat() method
// pete.petCat();
// penny.petCat();

// // invoke the takeWalk() method
// pete.takeWalk();
// penny.takeWalk();

// // invoke the meow() method
// pete.meow(true);
// penny.meow(false);

// console.log(pete);
// console.log(penny);

//* Exercise 2
// class Pirate {
//     // default values
//     wealth = 100;

//     constructor(name, moustache, hair){
//         this.name = name;
//         this.moustache = moustache;
//         this.hair = hair;
//     }

//     // create method to attack
//     attack() {
//         wealth += 100;
//         console.log(`${this.name} attacks!`);
//     }

//     // create method to sail
//     sail() {
//         console.log("${this.name} is sailing...");
//     }

//     // create method 
//     rob() {
//         wealth += 500
//         console.log(`${this.name} is robbing...`);
//     }
// }

// // creating 3 instances of the pirate class
// const pirate1 = new Pirate("pirate1", true, "black");
// const pirate2 = new Pirate("pirate2", false, "brown");
// const pirate3 = new Pirate("pirate3", false, "red");

// const jollyRoger = [pirate1, pirate2, pirate3]
// // const blackPearl = [new Pirate(), new Pirate(), new Pirate()]

// console.log(jollyRoger);
// // console.log(blackPearl);

// for (i = 0; i < jollyRoger.length; i++) {
//     console.log(jollyRoger[i].name);
//     console.log(jollyRoger[i].moustache);
//     console.log(jollyRoger[i].hair);
// }

//* Exercise 3
class Person {
    // default value
    energy = 100;

    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    goSleep() {
        energy += 100;
        console.log(`${this.name} is sleeping...`);
    }

    eat() {
        energy += 50;
        console.log(`${this.name} is eating...`);
    }

    running() {
        energy -= 50
        console.log(`${this.name} is running...`);
    }

    finishWork() {
        energy += 400
        console.log(`${this.name} is done with work!!!`);
    }
}

class PostalWorker extends Person {
    
    constructor(name, age, height, yearsOnJob) {
        super(name, age, height);
        this.yearsOnJob = yearsOnJob;
    }

    deliversMail() {
        energy -= 100;
        console.log(`${this.name} is delivering the mail...`);
    }
}

class Chef extends Person {
    cooking(meal) {
        if (meal === "steak") {
            energy -= 100
        } else if (meal === "sandwich") {
            energy -= 20
        } else {
            energy -= 50
        }
    }
}

// Create a postal worker
const jack = new PostalWorker("jack", 32, 6, 4);
console.log(jack);

const marina = new Person("marina", 29, 5)
console.log(marina);

//?--------------------------

//static class
// class Governor {
//     // static methods and properties
//     static title = "Government"
//     static location = "Capital Office"
//     static outfit = "suit"

//     static voting() {
//         console.log("Govenor is voting");
//     }
// }

// // maybe you use static when you need to call a method or
// // a function without making a specific instance

// let brad = new Governor
// console.log(brad);

// // we don't need a specific instance of governor for this
// Governor.voting();