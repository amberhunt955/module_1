var value;

// Values to Strings
value = String(555)
value = String(true)
value = String(false)
value = String("hello")
value = String(7.5)
value = (33).toString()

// Values to Number
value = "300"
console.log(typeof value);
value = Number(value)
console.log(value);
console.log(typeof value);


// === WEIRD THINGS == //

// Converting booleans to numbers //
value = true
value = Number(value)
console.log(value);
console.log(typeof value);
// you will get 1 in console.log
value = false
value = Number(false)
console.log(value);
console.log(typeof value);
// you will get 0 in console.log

// NaN (not a number) //
value = "monday"
value = Number(value)
console.log(value);
console.log(typeof value);

/////////////////////////////////////////

// Continuing on...

// parseInt
// Rounds down
value = 100.50
console.log(value);
console.log(typeof value);
value = parseInt(value)
console.log(value);
console.log(typeof value);

// parseFloat
// Useful with playing with bigger numbers?
// Not used a ton though
value = "33.605432543829540382509483250948325"
console.log(typeof value);
value = parseFloat(value)
console.log(value);
console.log(typeof value);
value = "5473894032748930257483920574389257439257439"
console.log(typeof value);
value = parseFloat(value)
console.log(value);
console.log(typeof value);
value = "543728905n"
console.log(typeof value);
value = parseFloat(value)
console.log(value);
console.log(typeof value);


