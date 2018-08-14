
/* 03.8.2018. WPR35 - Knowlege Checks */


/* #1 Create a function called first that has one parameter, which will be an array. 
first should return the first element of an array that is passed to it.
*/
// CODE //
function first(array) {
  return array[0];
}
first([1, 2, 3]); // return => 1



/* #2 Create a function called last that has one parameter, which will be an array. 
last should return the last element of an array that is passed to it. 
It should work for an array of any length.
*/
// CODE //
function last(array) {
  return array[array.length - 1];
}
last([1, 2, 3, 4, 5]); // return => 5




/* #3 Create a function called myLoop that takes in two parameters. 
The first parameter should represent a starting number and the second is how many times the 
starting number should be incremented.  
Use a for loop to increment the first parameter a number of times equal to the second parameter.  
Then return the modified number.   

For example, if the first parameter is 3 and the second parameter is 4, the number three should be 
increased by one each time the for loop runs, and the for loop should run 4 times. 
This should return the number 7 
*/
// CODE //
function myLoop(start, times) {
  for (var i = 0; i < times; i++) {
    start++;
  }
  return start;
}
myLoop(3, 4); // return => 7
myLoop(1, 2); // return => 3




/* #4 Create a function called exponent that takes in two parameters. 
The first parameter should represent a number to be multiplied against itself and the second 
parameter should represent how many times it is multiplied by itself. 
The function should return the result of this operation. 
exponent(2,3) should return 8. 
*/
// CODE //
function exponent(num, times) {
  var answer = num;
  for (var i = 1; i < times; i++) {
    answer *= num;
  }
  return answer;
}
exponent(2, 3); // return => 8




/* #5 For loops are especially useful when combined with arrays. Create an empty array called myArray 
Then create a function called arrayFiller that takes one parameter (the parameter will be a number). 
Then fill myArray with the string "item" the number of times indicated by the parameter. 
Return the filled array. 
• For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] . 
*/
// CODE //
var myArray = [];
function arrayFiller(numItems) {
  for (var i = 0; i < numItems; i++) {
    myArray.push("item");
  }
  return myArray;
}
arrayFiller(2); // return => [ 'item', 'item' ]
arrayFiller(5); // return => [ 'item', 'item', 'item', 'item', 'item' ]




/* #6 Write a function called 'maker' that creates an array and fills that array with 
numbers 1 to 25, then returns the array. 
*/
// CODE //
function maker() {
  var array = [];

  for (var i = 1; i <= 25; i++) {
    array.push(i);
  }
  return array;
}
maker();




/* #7 Create a function called "looper" that when passed an array of numbers will increment 
each value in the array by 5 and then return the updated array. 
For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ] 
*/
// CODE //
function looper(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += 5;
  }
  return arr;
}
looper([2, 7]); // return => [ 7, 12 ]




/* #8 Create a function called 'reversedLooper' that will be passed one parameter, which will be an array. 
The function will loop through the array backwards and do the following: 

• Subtract 2 from the last element 
• Subtract 1 from the second to last element 
• Subtract 0 from to the third to last element 
• Add one to the fourth to last element
• Add 2 to the fifth to last. 
• Continue increasing the amount added by 1, until it reaches the front of the array.  

Return the modified array when you are done 
*/
// CODE //
function reversedLooper(arr) {
  var increaseBy = -2;
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i] += increaseBy;
    increaseBy++;
  }
  return arr;
}
reversedLooper([10, 10, 10, 10, 10, 10]); // return => [ 13, 12, 11, 10, 9, 8 ]




/* #9 Create a function called evenFinder that takes an array as an argument and 
returns an array with all of the odd numbers removed. 
*/
// CODE //
function evenFinder(arr) {
  var evens = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}
evenFinder([1, 2, 3, 4]); // return => [ 2, 4 ]Í




/* #10 Write a function called "oddsAndEvens" that loops through a parameter "nums" (an array).
For each number in the given array, if it is even, it is added to the evens array, 
if the number is odd, is added to the odds array. 
*/
var evens = [];
var odds = [];

// CODE //
function oddsAndEvens(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    } else if (nums[i] % 2 !== 0) {
      odds.push(nums[i]);
    }
  }
}




/* #11 Write a function called 'findInArray' that takes in two parameters. 
The first parameter represents the array to be searched and the second parameter 
represents the value to be searched for. 
Return true if the value exists in the array. If it doesn't exist return false.
*/
// CODE //
function findInArray(myArray, myValue) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === myValue) {
      return true;
    }
  }
  return false;
}

var arr = [1, 2, 3, 4];
findInArray(arr, 1); // return => true
findInArray(arr, 5); // return => false




/* #12 You are provided some code that adds a set of random numbers to both arr1 and arr2.
Write a function called 'longer' that is given arr1 and arr2 as its only arguments 
and returns the array that is longer.
*/
// CODE //
var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for (var i = 0; i < num1; i++) {
  arr1.push(i);
}
for (var i = 0; i < num2; i++) {
  arr2.push(i);
}
// Do NOT change the code above

// CODE //
function longer(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  }
  else if (arr2.length > arr1.length) {
    return arr2;
  }
  return "Lengths are the same";
}

// This is for testing purposes. Do not change.
var longerArray = longer(arr1, arr2);




/* #13 Write a function called removeItem with two parameters.
The first parameter is an array called myGroceryList, and the second 
is an item to remove from myGroceryList. 
If the second argument (the item to remove) matches an item in myGroceryList, 
remove that item from your grocery list.
Return the new, updated grocery list. 

Once you do that, write another function called addItem with two parameters. 
The first is myGroceryList and the second is an item to add to your grocery list. 
If the item is already in the grocery list, do not add it a second time. 
If it's not in the list, then add it to the end of the array.
Return the new list. 
*/
// CODE //
function removeItem(myGroceryList, item) {
  for (var i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList[i] === item) {
      myGroceryList.splice(i, 1);
      i--;
    }
  }
  return myGroceryList;
}
removeItem(['water', 'eggs', 'milk'], 'eggs'); // return => [ 'water', 'milk' ]



function addItem(myGroceryList, item) {
  if (myGroceryList.indexOf(item) === -1) {
    myGroceryList.push(item);
  }
  return myGroceryList;
}
addItem(['water', 'eggs', 'milk'], 'salad'); // return => [ 'water', 'eggs', 'milk', 'salad' ]




/* #14 Write a function called addTen that is given 'numbers' as it's only argument and 
returns a new array after adding ten to each item in numbers. 
*Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58] 
*/
var numbers = [5, '9', 16, 19, '25', '34', 48];

// CODE //
function addTen(arr) {
  var newNumers = [];
  for (var i = 0; i < arr.length; i++) {
    newNumers.push(Number(arr[i]));
    newNumers[i] += 10;
  }
  return newNumers;
}

addTen(numbers); // return => [ 15, 19, 26, 29, 35, 44, 58 ]


// OR //
function addTen(nums) {
  return nums.map(function (num) {
    return Number(num) + 10;
  });
}

addTen(numbers); // return => [ 15, 19, 26, 29, 35, 44, 58 ]




/* #15 Write a function called 'reverse' with one parameter (string) 
The function should return that string after it's been reversed.

For example, if the passed in string is "this is my sentence", 
the function should return "ecnetnes ym si siht"
*/
// CODE //

function reverse(string) {
  return string.split('').reverse().join('');

}

reverse("ecnetnes ym si siht"); // return => 'this is my sentence'


//you split it. then you reverse it. then you join it back together