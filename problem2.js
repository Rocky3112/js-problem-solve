/*-----------
 Problem-2
---------------
At first, Declare a function where numbers is a parameter. parameter receive a string.Then count the string character if the character number is even, then print the output is even.And if the character number is odd, then print the output is odd.Otherwise print the error message
 */
function evenOdd(numbers)
{
    let message1 = 'even';
    let message2 = 'odd';
    let msg = "Please enter the valid input";
    let count = numbers.length;
    if(typeof numbers == 'string'){
    if(count % 2 == 0){
        return message1;
    }
    else if(count % 2 == 1){
        return message2;
    }
}
else{
    return msg;
}
}
let numbers =evenOdd(12);
console.log(numbers);
