/*-----------
 Problem-3
---------------
At first, Declare a function where gem1, gem2, gem3 are parameters. parameter receive three number. Then declare the gem power for three friends.Then convert gems into diamond with different input number and then calculate total diamond number.If total is greater than 2000, then differentiate from total to 2000 otherwise return the total number.If input is not a number, then print the error message.
 */
function gemsToDiamond(gem1, gem2, gem3){

    let firstFriendGemPower = 21,
    secondFriendGemPower = 32,
    thirdFriendGemPower = 43;

    let msg = "Please enter the valid input";

    let gemIntoDiamond1 = firstFriendGemPower *gem1;
    let gemIntoDiamond2 = secondFriendGemPower *gem2;
    let gemIntoDiamond3 = thirdFriendGemPower *gem3;

    let total = gemIntoDiamond1 + gemIntoDiamond2 +gemIntoDiamond3;
    
    if( total>2000){
        let remainderDiamond = total - 2000;
        return remainderDiamond;
    }
    else if(total<2000){
        return total;
    }
    else{
        return msg;
    }

}

let gems = gemsToDiamond(100, 5, 1);
console.log(gems);