//  OddEven.js


function checkIfEvenOrOdd(a) {
    const remainder = a % 2;

    if(remainder === 0) {      // find odd-even number easy step logic 1
        return "even"
    }
    else {
        return "odd";
    }
}


console.log(checkIfEvenOrOdd(13));
console.log(checkIfEvenOrOdd(-2));
console.log("0 is ", checkIfEvenOrOdd(0));
console.log("2 is ", checkIfEvenOrOdd(2));

console.log("-1 is ", checkIfEvenOrOdd(-1));
console.log("1 is ", checkIfEvenOrOdd(1));
console.log("157 is ", checkIfEvenOrOdd(157));
