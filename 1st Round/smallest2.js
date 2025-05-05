
// function checkSmall 2(a,b,c)

function smallestOfThree2(a, b, c) {  //cheak samll number logic 2
    let smallestNumber = a;
    if(b < smallestNumber) {
        smallestNumber = b;
    }
    if(c < smallestNumber) {
        smallestNumber = c;
    }

    return smallestNumber;
}

console.log("smallestOfThree2(3, 1, 6)", smallestOfThree2(3, 1, 6));
console.log("smallestOfThree2(-1, -6, 9)", smallestOfThree2(-1, -6, 9));

console.log("smallestOfThree2(3, 3, 3)", smallestOfThree2(3, 3, 3));
console.log("smallestOfThree2(3, 3, 1)", smallestOfThree2(3, 3, 1));
console.log("smallestOfThree2(3, 3, 4)", smallestOfThree2(3, 3, 4));