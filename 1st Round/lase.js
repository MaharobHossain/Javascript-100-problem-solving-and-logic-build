
// 3. write a funstion that calculates and prints the area of a rectangle give its lenght and width?

function calculateArea( lenght, width ) {

    if( lenght <= 0){
        throw new RangeError("Lenght should be a positive number");
        //  console.log("Lenght should be a positive number");
    }

    if( width <= 0){
         throw new RangeError("Width should be a positive number");
        //  console.log("Width should be a positive number");
    }


    const area = lenght * width;
    console.log("The rectangle area is: ", area);
}

calculateArea(3, 8);
calculateArea( 25, 847);
 calculateArea( -6, 3);    // lenght is negative
 calculateArea( 9, -7);    // Width is negative

