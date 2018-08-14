
/*••••• Callbacks ••••••*/

/*
••• callbacks can be used as pieces of larger functionality.

••• function that passed in as a parameter into another function which invokes it.

••• callback: can be either a named function or an anonymous function.

••• callback function: a function that is passed as a parameter into another function which invokes it.

••• setTimeout is one of the build in function.

••• use: to use the result of a function that takes a long time, without holding up the rest of the code.
*/

// example
function phone() {
  var calledUsingPhone = "it's later"; // after 1000 return => "it's later" and than go down and out of the function.
  calledUsingPhone;
}
setTimeout(phone, 1000);


// example
setTimeout(function () {
  console.log("I'm done!");
}, 1000); // run 1sec and return => I'm done!


// example
function delayedBirthday() {
  console.log('Happy Late Birthday!');
}
setTimeout(delayedBirthday, 1000); // run 1sec and return => Happy Late Birthday!


// example
array = [2, 4, 6, 8];

array.forEach(function (num, i, arr) {
  return arr[i]++;
});
array; // return => [ 3, 5, 7, 9 ]


// example
function getUserInfo(firstName, lastName, callback) {
  var name = firstName + ' ' + lastName;
  return callback(name);
}
function greetUser(name) {
  return 'hello, ' + name + '!';
}
getUserInfo('Emma', 'Phommatha', greetUser); // return => 'hello, Emma Phommatha!'


// example
function prepNumber(data, cb) {
  if (typeof data === "string") {
    data = Number(data);
  }
  return cb(data);
}
prepNumber("123.14", Math.floor); // return => 123


// example
function repeathMe(numTimes, callback) {
  for (var i = 0; i < numTimes; i++) {
    callback();
  }
}
function sayHello() {
  console.log('hello!');
}
repeathMe(5, sayHello); //return the numTimes = 5 times; and the callbcak sayHello = 'hello!' to each numTimes//
// hello!
// hello!
// hello!
// hello!
// hello!


// example
var array = [1, 2, 3];
var oneUp = [];
array.map(function (num) {
  oneUp.push(num + 1);
});
onUp; // return => [2,3,4]


// example
function map(array, callback) {
  var arrayCopy = [];
  for (var i = 0; i < array.length; i++) {
    arrayCopy[i] = callback(array[i]); //arrayCopy invoke callback
  }
  return arrayCopy;
  //return => [2,3]
}
var twoThree = map([1, 2], function (num) { //invoke the function map//
  return num + 1;
});




/*••• Mini project•••*/

/* # 1.1
Create a function called outerFn, that takes in a callback as a parameter, and then returns that callback invoked.
To see it working, invoke outerFn at the bottom, passing in the InnerFn as the callback. 
You should now see "The innerFn is a callback!" in the console.
*/

function outerFn(callback) {
  return callback();
}


// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function innerFn() {
  return "The innerFn is a callback!";
}
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //
outerFn(innerFn); // return => 'The innerFn is a callback!'




/* # 1.2
Create a function called fullName, that takes in three parameters: firstName, lastName, and a callback.
The fullName function should return the callback, passing in firstName and lastName as parameters.
To test, invoke fullName with your first name, last name and the welcomeMessage function as arguments.
*/

function fullName(firstName, lastName, callback) {
  return callback(firstName, lastName);
}

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function welcomeMessage(first, last) {
  return `Welcome to DevMountain, ${first} ${last}!`
}
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

fullName('Emma', 'Phommatha', welcomeMessage);// return => 'Welcome to DevMountain, Emma Phommatha!'




/* # 1.3
Create a function called canDrink that will take in three parameters. 
The first parameter will be an number representing an age. The second and third parameters will be callbacks. 
The functions drinkSoda and drinkAlcohol are examples of callbacks that could be passed into your function. 

•If the age is below 21, return the invocation of the first callback
•If the age is 21 or greater, return the invocation of the second callback
*/

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function drinkSoda() {
  return "Come back when you are legally allowed a drink!"
}

function drinkAlcohol() {
  return "Drink responsibly!"
}
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

function canDrink(age, one, cb) {
  if (age < 21) {
    return one();
  }
  else {
    return cb();
  }
}
canDrink(24, 'yes', drinkAlcohol); // return => 'Drink responsibly!'



/* # 1.4
Write two functions, one called add and one called multiply, 
that each takes in two numbers and returns the appropriate new value.

Write a function called math that takes in two numbers, and a callback 'operator' as parameters.
This function should return a operator invoked with the appropriate arguments.
*/

// code
var add = function (num1, num2) {
  return num1 + num2;
};
var multiply = function (num1, num2) {
  return num1 * num2;
};
function math(num1, num2, cb) {
  return cb(num1, num2);
}

math(2, 3, add);      // return => 5
math(2, 3, multiply); // return => 6




