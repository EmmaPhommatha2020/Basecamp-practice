
/*••••• Array and Array methods••••••*/

/* 
••• for(declaration; condition; iterator){}

••• brackets: mark the beginning and end [].

••• brackets indicate that you are accessing an element of the array.

••• first index of an array is 0.

••• each element can be any type of data.

••• can't compare NaN to other data type. other data types are ok to compare to any data type.

••• don't use compare with array use if statement.


*••• add items on array use:
// .push() : add the element to the end of the array

// .unshift() : add the element to the start of the array


*••• remove items from the array use:
// .pop() : removes the last element and return it, and updated original array.

// .shift() : removes the first element and return it, and updated original array.

// .splice(0,1)(0 at which index to start, 1 how many item to remove) :
 removes a specified portion and return it, and updated orginal array.
 can also use to add item to the array, and updated original array.

 // .slice(1,3,4)(1 at which index to start, 3 at which index to stop, 4 put back to the array):
 returns a copy of a specified portion, keep original array.

 // before you aplice, you should slice, only splice what you have slice.
*/

// example of Array 
myArray = [2, 4, 6, 8, 10, 12, 14];

myArray[2] = 'A';
myArray; // return => [ 2, 4, 'A', 8, 10, 12, 14 ]

myArray[5] = myArray[2];
myArray; // return => [ 2, 4, 'A', 8, 10, 'A', 14 ]



// .push() 
myFriends = ['Joey', 'Elle', 'Maria', 'Yang'];

myFriends.push('Max');
myFriends; // return => [ 'Joey', 'Elle', 'Maria', 'Yang', 'Max' ]



// .unshift() 
var purchases = ['bike', 'shirt', 'hat', 'pizza'];

purchases.unshift('mug');
purchases; // return => [ 'mug', 'bike', 'shirt', 'hat', 'pizza' ]



// .pop()
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];

letters.pop();
letters; // return => [ 'a', 'b', 'c', 'd', 'e' ]

var lastElement = letters.pop();
lastElement; // return => 'e'

letters; //return => [ 'a', 'b', 'c', 'd' ]



// .shift()
var toDos = ['study', 'eat', 'sleep', 'code', 'nap', 'shop'];

toDos.shift(); // take out 'study'
toDos; // return => [ 'eat', 'sleep', 'code', 'nap', 'shop' ]

var removeItem = toDos.shift();
removeItem; // return => 'eat'

toDos; // return => [ 'sleep', 'code', 'nap', 'shop' ]



// .splice()

var line = ['Sue', 'Mo', 'Ted', 'Wendy', 'Theo', 'Fred', 'Stan'];

line.splice(1, 2); // start from index[1],and remove 2items: removes => [ 'Mo', 'Ted' ]
line; // return => [ 'Sue', 'Wendy', 'Theo', 'Fred', 'Stan' ]

line.splice(3, 0, 'Joey'); // start from index[3], remove zero item, add 'Joey' on the array index[3]
line; // return => [ 'Sue', 'Wendy', 'Theo', 'Joey', 'Fred', 'Stan' ]

var sorrySue = line.splice(0, 1); // remove index[0], 1item 
sorrySue; // return => [ 'Sue' ]
line; // return => [ 'Wendy', 'Theo', 'Joey', 'Fred', 'Stan' ]



// .slice()
var line = ['Sue', 'Mo', 'Ted', 'Wendy', 'Theo', 'Fred', 'Stan'];

var wholeLineCopy = line.slice();
wholeLineCopy; // return => [ 'Sue', 'Mo', 'Ted', 'Wendy', 'Theo', 'Fred', 'Stan' ]

var lastThreeCopy = line.slice(4);
lastThreeCopy; // return => [ 'Theo', 'Fred', 'Stan' ]

var middleThreeCopy = line.slice(2, 5);
middleThreeCopy; // return => [ 'Ted', 'Wendy', 'Theo' ]

line; // return => [ 'Sue', 'Mo', 'Ted', 'Wendy', 'Theo', 'Fred', 'Stan' ]



/*••• Mini project •••*/

/* # 1.1
Return the first element in the array that is being passed in.
*/
function first(arr) {
  // code
  var firstItem = arr[0];
  return firstItem;
}
first([1, 2, 3]); // return => 1



/* # 1.2
Return the length of the array that is being passed in.
*/
function length(arr) {
  // code
  var lengthCount = arr.length;
  return lengthCount;
}
length([1, 2, 3]); // return => 3



/* # 1.3
Return the last element of the array that is being passed in.
*/
function last(arr) {
  // code
  var lastItem = arr[arr.length - 1];
  return lastItem;
}
last([1, 2, 3, 4]); // return => 4



/* # 1.4
Add a number to the end of the array that is being passed in.
*/
function addItem(array, number) {
  // code
  array.push(number);
  return array;
}
addItem([], 1); // return => [ 1 ]



/* # 1.5
Remove the last element from the array that is being passed in.
*/
function removeLast(array) {
  // code
  array.pop();
  return array;
}
removeLast([1, 2, 3]); // return => [ 1, 2 ]



/* # 1.6
Remove the first element from the array that is being passed in.
*/
function removeFirst(array) {
  // code 
  array.shift();
  return array;
}
removeFirst([1, 2, 3]); // return => [ 2, 3 ]



/* # 2.1
Modify the given for loop to push i into the numbers array. If done correctly numbers should equal:
*/
function maker() {
  var numbers = [];
  for (var i = 0; i <= 25; i++) {
    // code
    numbers.push(i);
  }
  return numbers;
}
maker(); // return => numbers 1 -> 25



/* # 2.2
Fill the numbers array with numbers 0-31.
*/
function count31() {
  var numbers = [];
  // code
  for (var i = 0; i <= 31; i++) {
    numbers.push(i);
  }
  return numbers;
}
count31(); // return => numbers 1 -> 31



/* # 2.3
Using the given for loop, fill the newArray with the passed in array's elements in reverse order.
*/
function backWards(arr) {
  var newArray = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    // code
    newArray.push(arr[i]);
  }

  return newArray;
}
backWards([1, 2, 3]); // return => [ 3, 2, 1 ]



/* # 2.4
Search the passed in array with the passed in value. If the array contains the value, 
return true. Otherwise return false.
*/
function findInArray(arr, value) {
  // code
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return true;
    }
  }
  return false;
}
findInArray([1, 2, 3], 1); // return => true
findInArray([1, 2, 3], 4); // return => false




/* # 2.5
Modify the given for loop to add ten to each element in the passed in array and then push t
he sum into the newArr array. You can assume that all items in the array will be numbers.
*/
function addTen(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    // code
    newArr.push(arr[i] + 10);
  }
  return newArr;
}
addTen([1, 2, 3]); // return => [ 11, 12, 13 ]




/* # 2.6
 Modify the given for loop to add ten to each element in the passed in array and then 
 push the sum into the newArr array. This array will contain a combination of strings 
 and numbers. You will have to figure out a way to end up with an array of numbers only.
*/
function addTen(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    // code
    newArr.push(Number(arr[i]) + 10);
  }
  return newArr;
}
addTen([1, 2, 3]); // return => [ 11, 12, 13 ]




/* # 3.1
Given an array full of user objects, complete the function to delete a user object from the array.
*/
function deleteUser(array, property, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][property] === value) {
      // code
      array.splice(i, 1);
    }
  }
  return array;
}



/* # 3.2 
Given an array of user objects, update the user's email property if the condition is met.
*/
function updateUserEmail(array, property, value, newEmail) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][property] === value) {
      // code 
      array[i].email = newEmail;
    }
  }
  return array;
}



/* # 3.3
Given an array of user objects, loop through the users and check to see they have a given property that equals a given value. 
If that user object does, then update its password to the value of newPassword.
*/
function changePassword(array, property, value, newPassword) {
  for (var i = 0; i < array.length; i++) {
    // code
    if (array[i][property] == value) {
      array[i].password = newPassword;
    }
  }

  return array;
}



/* # 3.4 
Create a function called updateUserInfo that has five parameters (array, propertyKey, propertyValue, newEmail, newName ). 
You can assume that array will always be an array of objects. Loop through array and if any objects have a property name 
of propertyKey that has the value of propertyValue, update that object's email and name properties to the values of 
newEmail and newName. Then return array.
*/
// code
function updateUserInfo(arr, prop, val, newEmail, newName) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][prop] === val) {
      arr[i].email = newEmail;
      arr[i].name = newName;
    }
  }

  return arr;
}



