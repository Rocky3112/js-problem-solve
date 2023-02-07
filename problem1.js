/*-----------
 Problem-1
---------------
At first, Declare a function where number is a parameter. parameter receive a number.Then multiply 3 into the number then add 10 with the multiply number.After Adding,divided the number by 2 and finally subtract 5 from the calculate value.If the input value is not a number, then print the error message.
 */
function mindGame(number)
{
    let msg = "Please enter the valid input";
    if(number>=0){
        let total;
        total = (((number * 3) + 10) / 2) - 5;
        return total;
    }
    else{
        return msg;
    }
    
}
let value = mindGame(33);
 console.log(value);
