// Revers A Straing js logic build

function reverseAString(inputString) {

    if(typeof inputString !== 'string') {
        throw new Error("Only strings are allowed");
    }
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--) {
        //result = result + inputString[i];
        result += inputString[i];
    }

    return result;
}



console.log(reverseAString("Ashish"));
console.log(reverseAString("Software development"));
