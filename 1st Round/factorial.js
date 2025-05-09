
function calculateFactorial(inputNumber) {


    if(inputNumber < 0) {
        throw new Error("inputNumber should be greater than or equal to zero");
    }

    let result = 1;
    for( i = 1 ; i <= inputNumber ; i++ ){

        result = result * i;

    }
    return result;
}

console.log("6",calculateFactorial(6));
console.log("4!",calculateFactorial(4));
console.log("2!",calculateFactorial(2));
// console.log("-2!",calculateFactorial(-2));

