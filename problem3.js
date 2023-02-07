/*-----------
 Problem-3
---------------
At first, Declare a function where numbers is a parameter. parameter receive a number.Then calculate the differentiate value between input value and 7.If differentiate value is less than 7, then return the subtract value And If differentiate value is greater than 7, then return the double of the input .if input is not a number, then print the error message
 */
function isLGSeven(number){
    let msg = "Please enter the valid input";
    let subtraction = number - 7;
    if(subtraction<7){
        return subtraction;
    }

    else if(subtraction>7){
        let calculation = number * 2;
        return calculation;

    }
    else{
        return msg;
    }

}

let number = isLGSeven(15);
console.log(number);