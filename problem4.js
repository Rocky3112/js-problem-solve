/*-----------
 Problem-1
---------------
At first, Declare a function where number is a parameter. parameter receive a number.Then multiply 3 into the number then add 10 with the multiply number.After Adding,divided the number by 2 and finally subtract 5 from the calculate value.If the input value is not a number, then print the error message.
 */
function mindGame(number) {
  let msg = "Please enter a positive number";
  if (typeof number == "number") {
    if (number >= 0) {
      let total;
      total = (number * 3 + 10) / 2 - 5;
      return total;
    }
  } else {
    return msg;
  }
}
let value = mindGame(33);
console.log(value);

/*-----------
 Problem-2
---------------
At first, Declare a function where numbers is a parameter. parameter receive a string.Then count the string character if the character number is even, then print the output is even.And if the character number is odd, then print the output is odd.If the input value is not a string, then print the error message.
 */
function evenOdd(numbers) {
  let message1 = "even";
  let message2 = "odd";
  let msg = "Please enter a string";
  let count = numbers.length;
  if (typeof numbers == "string") {
    if (count % 2 == 0) {
      return message1;
    } else if (count % 2 == 1) {
      return message2;
    }
  } else {
    return msg;
  }
}
let numbers = evenOdd('phero');
console.log(numbers);

/*-----------
 Problem-3
---------------
At first, Declare a function where numbers is a parameter. parameter receive a number.Then calculate the differentiate value between input value and 7.If differentiate value is less than 7, then return the subtract value And If differentiate value is greater than 7, then return the double of the input .If input is not a number, then print the error message
 */
function isLGSeven(number) {
  let msg = "Please enter a number";
  let subtraction = number - 7;

  if (typeof number == "number") {
    if (subtraction < 7) {
      return subtraction;
    } else if (subtraction > 7) {
      let calculation = number * 2;
      return calculation;
    }
  } else {
    return msg;
  }
}

let number = isLGSeven(15);
console.log(number);

/*-----------
 Problem-4
---------------
At first, Declare a function where values is a parameter. parameter receive an array.If the array element is less than 0, thne count this negative number as a badData.If the input value is not an array, then print the error message.
 */
function findingBadData(values) {
  const msg = "Please enter an Array";
  if (Array.isArray(values) == true) {
    let badData = 0;
    for (i = 0; i < values.length; i++) {
      if (values[i] < 0) {
        badData++;
      }
    }
    return badData;
  } else {
    return msg;
  }
}
const arr = [2, -3, -12, -15, -20];
const result4 = findingBadData(arr);


/*-----------
 Problem-5
---------------
At first, Declare a function where gem1, gem2, gem3 are parameters. parameter receive three number. Then declare the gem power for three friends.Then convert gems into diamond with different input number and then calculate total diamond number.If total is greater than 2000, then differentiate from total to 2000 otherwise return the total number.If input is not a number, then print the error message.
 */
function gemsToDiamond(gem1, gem2, gem3) {
  let firstFriendGemPower = 21,
    secondFriendGemPower = 32,
    thirdFriendGemPower = 43;

  let msg = "Please enter numbers";

  let gemIntoDiamond1 = firstFriendGemPower * gem1;
  let gemIntoDiamond2 = secondFriendGemPower * gem2;
  let gemIntoDiamond3 = thirdFriendGemPower * gem3;

  let total = gemIntoDiamond1 + gemIntoDiamond2 + gemIntoDiamond3;
  if (
    typeof gem1 == "number" &&
    typeof gem2 == "number" &&
    typeof gem3 == "number"
  ) {
    if (total > 2000) {
      let remainderDiamond = total - 2000;
      return remainderDiamond;
    } else if (total < 2000) {
      return total;
    }
  } else {
    return msg;
  }
}

let gems = gemsToDiamond(100, 5, 1);

