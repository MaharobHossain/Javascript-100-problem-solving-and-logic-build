
function reverseAString2(inputString) { 
    const splittedInput = inputString.split('');
    const reversedArray = splittedInput.reverse();
    const result = reversedArray.join('');
    return result;
}


console.log("reverseAString2")
console.log(reverseAString2("Ashish"));
console.log(reverseAString("Software development"));