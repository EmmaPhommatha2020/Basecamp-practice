/* 03.20.2018 Toy problem

FizzBuzz
write a function that takes in one number.
Starting at 1, console log every number up to the number passed in.
If the number being logged is divisible by 3 log 'Fizz' instead.
If the number is divisible by 5 we will log 'Buzz' instead.
If they are divisible by both 3 and 5 we will log 'FizzBuzz'
*/
function fizzBuzz(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3); // return => 1 2 Fizz




/* 03.21.2018 toy problem 

Swap Case
Below is a function that takes in a string and reverses the case of every character 
and returns the new string.
It is currently in a broken state and does not run properly.
It is possible to fix the code by only modifying the existing code, not adding new lines.

test data
'This Is An Example' becomes 'tHIS iS aN eXAMPLE'
'boB rOss IS thE OrIgInAl GanGster' Becomes 'BOb RoSS is THe oRiGiNaL gANgSTER'
*/
function caseReverse(str) {
  var strArray = str.split(' ');
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i].toUpperCase()) {
      strArray[i].toLowerCase();
    } else {
      strArray[i].toUpperCase();
    }
  }
  return strArray;
}

console.log(caseReverse('boB rOss IS thE OrIgInAl GanGster'));
// // return => [ 'boB', 'rOss', 'IS', 'thE', 'OrIgInAl', 'GanGster' ]


// answer
function caseReverse(str) {
  var strArray = str.split('');
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[i].toUpperCase()) {
      strArray[i] = strArray[i].toLowerCase();
    } else {
      strArray[i] = strArray[i].toUpperCase();
    }
  }
  return strArray.join('');
}

console.log(caseReverse('boB rOss IS thE OrIgInAl GanGster'));
// return => BOb RoSS is THe oRiGiNaL gANgSTER




/* 03.22.2018 toy problem 

Below is some broken code. Read over all the code below, at the end you will
see that the results are not what you would expect. Look over the code and
try and identify where the issue is caused. You will want to console log
oldInventory and newInventory often to see how it changes.
*/
let oldInventory = [
  ['calico', 'tabby'],
  ['lab', 'corgi', 'rottweiler'],
  ['goldfish', 'beta', 'angel fish', 'flounder']
];

// Write a function to count the number of animals in the pet shop's old inventory

function countInventory(arr) {
  let count = 0;

  arr.forEach(group => count += group.length);

  return count;
}
console.log('countInventory:', countInventory(oldInventory)); // => countInventory: 9


// All of the animals were very popular and were all sold in the past week
// these same animals were ordered for the next week

// code //
let newInventory = oldInventory.splice();

// some new, exotic animals were ordered for the next week as well.
newInventory.push(['gorilla', 'alligator', 'lion', 'humpback whale']);

console.log("New Inventory", newInventory);
// => New Inventory [ [ 'gorilla', 'alligator', 'lion', 'humpback whale' ] ]

console.log("Old Inventory", oldInventory);
// => Old Inventory [ [ 'calico', 'tabby' ],[ 'lab', 'corgi', 'rottweiler' ],[ 'goldfish', 'beta', 'angel fish', 'flounder' ] ]

// the pet store needs to know how many more pens they need for the new animals
// write a new function to count the number of animals in both the old and new inventory.
// this function should return the difference in number of animals between the old and new inventories (new - old)

function compareInventory(oldArr, newArr) {
  let oldCount = 0, newCount = 0;

}





/* 03.26.2018 toy Problem */

function roll(n = 6) {
  let d = Math.floor((Math.random() * n) + 1);
  return d;
}
roll();// return =>3; =>1; =>6; =>2; =>4

//or

function rool(n, x) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    let d = Math.floor((Math.random() * n) + 1);
    arr.push(d);
  }
  return arr;
}
rool(6, 2); // return => [ 6, 5 ]; => [ 2, 3 ]





/* 03.28.2018 toy problem */

// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "Your mother was a hamster and your father smelt of elderberries!"; // -> 20

function vowelCounter(str) {

  let array = str.toUpperCase().split('');

  let total = 0;

  array.forEach((item, i) => {
    switch (item) {
      case 'A':
        total += 1;
        break;
      case 'E':
        total++;
        break;
      case 'I':
        total++;
        break;
      case 'O':
        total++;
        break;
      case 'U':
        total++;
        break;
    }
  });
  return total;
}

console.log(vowelCounter(vowelString));






/* 03.29.2018 toy problem


my_var_name => myVarName

(my_var_name).split(/ - | _ /)

// psuedo code
for(var i =1; i<arr.length; i++){
  var word = arr[i]
  arr[i] = word[0].toUpperCase() + word.slice(1) // from index 1 to the end
}
return arr.join('')
*/






//04.03.2018 toy problem

/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/


function duplicateCount(text) {
  let distChars = [];
  let repeatChars = [];

  let inArr = text.toUpperCase().split("");

  for (var i = 0; i < inArr.length; i++) {
    if (distChars.indexOf(inArr[i]) == -1) {
      distChars.push(inArr[i]);
    }
    else {
      if (repeatChars.indexOf(inArr[i]) == -1) {
        repeatChars.push(inArr[i]);
      }
    }
  }

  return repeatChars.length;
}

duplicateCount("aA11"); // return => 2

duplicateCount("indivisibility"); // return => 1





// practice problem
let names = ['lloyd', 'tiarra', 'trent']

let str = 'WPR-35 usually likes their mentors: lloyd, tiarra, and trent'

function capAll(str, arr) {
  for (var i = 0; i < arr.length; i++) {
    let name = arr[i]
    str = capName(str, name)
  }
  return str
}

function capName(str, name) {
  if (str.includes(name)) {
    //cap the first letter
    let upperCaseName = name[0].toUpperCase() + name.slice(1)
    console.log(upperCaseName)
    //replace name in string
    let newStr = str.replace(name, upperCaseName)
    return newStr
  } else {
    return str
  }
}

capAll(str, names)








/*pracpice problem
Over a few toy problems we will be building out a class that constructs a cart object and also includes 
a few methods to manipulate the data, things like adding to the cart and calculating the total.
To start you will want to make a class called Cart that includes a constructor function. 
Have the constructor function take in a single parameter that will be the items in the cart. 
Set that value equal to a value called this.cart
Second we will want to create a method that will take in an id and then remove the item from the cart with the matching id
Test your class by creating a your own Cart object and invoking your method that removes an item. 
You will want to save this because we will be adding to it in the future.
*/

let testItems = [{
  id: 1,
  product: 'Bob Ross/Thomas Kinkade Paint Kit',
  price: 45.99,
  quantity: 2
}, {
  id: 2,
  product: 'Paint Palette',
  price: 7.99,
  quantity: 3
}, {
  id: 3,
  product: 'Paint Thinner',
  price: 15.99,
  quantity: 2
}];


// code
class Cart {
  constructor(items) {
    this.cart = items;
  }

  remove(id) {
    this.cart.forEach((value, i) => {
      (id === value.id) ? this.cart.splice(i, 1) : ""
    })
    return this.cart
  }
}
var myCart = new Cart(testItems)
myCart.remove(1) // remove id 1
// return => [ { id: 2, product: 'Paint Palette', price: 7.99, quantity: 3 },
//{ id: 3, product: 'Paint Thinner', price: 15.99, quantity: 2 } ]











// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function helper(str, quotient, last) {
  if (quotient < 10) {
    str.push("0");
  }
  str.push(quotient);
  if (last === false) {
    str.push(":");
  }
}

function secondsToHours(sec) {

  var strOut = [];
  var quotient = Math.floor(sec / 3600);
  helper(strOut, quotient, false);

  var remainder = sec % 3600;
  quotient = Math.floor(remainder / 60);
  helper(strOut, quotient, false);

  remainder = remainder % 60;
  quotient = Math.floor(remainder / 60);
  helper(strOut, quotient, true);

  return strOut.join("");
}

secondsToHours(359999);










// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// Examples: 
// validParentheses( "()" ) => returns true 
// validParentheses( ")(()))" ) => returns false 
// validParentheses( "(" ) => returns false 
// validParentheses( "(())((()())())" ) => returns true 

// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

function validParentheses(str) {
  let openCount = 0;
  let arr = str.split("");
  for (var i = 0; i < str.length; i++) {
    if (arr[i] === "(") {
      openCount++;
    } else if (arr[i] === ")") {
      if (openCount > 0) {
        openCount--;
      } else {
        return false;
      }
    }
  }
  if (openCount !== 0) {
    return false;
  } else {
    return true;

  }
}

validParentheses("()"); // return => true
validParentheses("("); // return => false
validParentheses(")"); // return => false





// 04.17.2018 toy problem
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing

function breakCamel(str) {
  str = str.split('').map(function (bc) {
    if (bc === bc.toUpperCase()) {
      bc = ' ' + bc;
    }
    return bc;
  });
  return str.join('');
}

breakCamel('camelCasing'); // => 'camel Casing'

breakCamel('iThinkIGotIt'); // => => 'i Think I Got It'

breakCamel('thisFunctionCouldBeHard'); // => 'this Function Could Be Hard'



//or
var test = 'camelCaseHumpDay'

//Solution 1
var solution = s => s.split(/(?=[A-Z])/).join(' ')

//Solution 2
var solution = s => s.split('').reduce((a, c) => c == c.toUpperCase() ? a + ' ' + c : a + c)
console.log(solution(test))


//Solution 3
function solution(string) {
  let tempArray = string.split('');
  tempArray.forEach((letter, index) => {
    (letter === letter.toUpperCase()) ? tempArray[index] = ` ${letter}` : letter;
  })
  return tempArray.join('')
}

//Solution 4
function solution(string) {
  return (string.replace(/([A-Z])/g, ' $1'))
}



//Solution 5
var breakCamel = (string) => {
  let tempArray = string.split('')
  tempArray.forEach((letter, index) => {
    (letter === letter.toUpperCase()) ? tempArray[index] = ` ${letter}` : tempArray[index] = letter;

  })
  return tempArray.join('');
}

breakCamel(test)





// 05.16.2018
//This kata is designed to test your ability to extend the functionality of built-in ruby classes. 
//In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().



Array.prototype.square = function () {
  return this.map(number => {
    return number * number;
  })
}

Array.prototype.cube = function () {
  return this.map(number => {
    return Math.pow(number, 3);
  })
}

Array.prototype.average = function () {
  if (this.length === 0) {
    return NaN
  }
  let product = this.reduce((ac, num) => {
    return ac + num;
  })
  return product / this.length;
}

Array.prototype.sum = function () {
  if (this.length === 0) {
    return NaN
  }
  return this.reduce((ac, num) => {
    return ac + num;
  })
}

Array.prototype.even = function () {
  return this.filter(number => number % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter(number => number % 2 !== 0)
}





//In this toy problem, you are going to create your own JS promise. Create a function that returns a custom promise. This promise returns an array of five games after 100ms. DO NOT CREATE AN ARRAY THAT'S A GLOBAL VARIABLE. It should be defined and returned in your promise. After you receive your promise, RANDOMLY select a game from the array for you and your friends to play.
//(You will probably have to use Google to figure out how to do custom JS promises)

function creatingPromises() {
  return new Promise(function (resolve, reject) {
    let gamesArray = ["Dominion", "Mysterium", "Fury of Dracula", "Curses", "Cards Against Humanity"]
    setTimeout(
      () => {
        resolve(gamesArray)
      }, 100
    )
    if (gamesArray.length === 0) {
      reject("You are a boring person with no games")
    }
  })
}

creatingPromises().then(res => {
  let randomNum = Math.floor(Math.random() * 5)
  // console.log(res[randomNum])
  return res[randomNum]
}).catch(err => console.log(err))






/*Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. 
Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) 
and return a list of snapshots after each change of the initial list.
*/

function bubblesSort(arr) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp;
      }
    }
  }
  return arr
}
let arr = [9, 8, 6, 7, 5, 4, 3, 2, 1]

console.log(bubblesSort(arr))





// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// For example:

// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'
// If something in the string is not in the alphabet (punctuation, spaces), simply leave it as is

function CaesarCipher(num){
  this.encode = function(str){
    let upper = str.toUpperCase().split('');
    let enc = upper.map(function(a){
        console.log(a.charCodeAt())
      if(a.charCodeAt() < 65 || a.charCodeAt() > 90){
        return a;
      } else {
        let code = a.charCodeAt() + num;
        if(code > 90){ return String.fromCharCode(code - 26) }
        else return String.fromCharCode(code);
      }
    })
    return enc.join("");
  }
  this.decode = function(str){
    let strArr = str.split("");
    let dec = strArr.map(function(a){
      if(a.charCodeAt() < 65 || a.charCodeAt() > 90){
        return a;
      } else {
        let code = a.charCodeAt(0)- num;
        if(code < 65){ return String.fromCharCode(code + 26) }
        else return String.fromCharCode(code);
      }
    })
    return dec.join("");
  }
}

var c = new CaesarCipher(5);
c.encode('codewars');
// c.decode('BFKKQJX');





// 6.11.2018
// A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// In most programming languages there is a modulus type function for determining the remainder of a division between two numbers. 
// We can certainly use this concept for determining if a number is prime because a modulus expression will return zero if the number isn’t prime.

function isPrime(value) {
  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
          return false;
      }
  }
  return value > 1;
}


