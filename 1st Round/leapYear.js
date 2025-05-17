//this year is leap year ? true or false find it problem solving

function isLeapYear(year) {
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
    
console.log("2022 year is leap year true of false: " ,isLeapYear(2022));
console.log("2022 year is leap year true of false: " ,isLeapYear(2023));
console.log("2022 year is leap year true of false: " ,isLeapYear(2024));
console.log("2022 year is leap year true of false: " ,isLeapYear(2025));
