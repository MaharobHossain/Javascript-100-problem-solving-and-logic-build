
//  OddEven2.js


function checkIfEvenOrOdd2(a) {
    return a % 2 === 0 ? "even" : "odd";   //find odd-even number easy step logic 2
}

console.log(checkIfEvenOrOdd2(13));
console.log(checkIfEvenOrOdd2(-2));
console.log("0 is ", checkIfEvenOrOdd2(0));
console.log("2 is ", checkIfEvenOrOdd2(2));

console.log("-1 is ", checkIfEvenOrOdd2(-1));
console.log("1 is ", checkIfEvenOrOdd2(1));
console.log("157 is ", checkIfEvenOrOdd2(157));