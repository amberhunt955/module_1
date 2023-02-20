//* Ending recursive calls with base cases

function printXTimes(n) {
    // the base case
    if (n < 0) return;
    // the action
    console.log(`${n} more prints to go`);
    // the recursive call
    printXTimes(n-1);
}

printXTimes(3);

//* Call stack example

function factorial(n){
    if (n <= 0) return 1;
    console.log(`Will return ${n} * factorial(${n - 1})`)
    return n * factorial(n-1);
}

factorial(4);