
/*••••• Function - Arrow Function => ••••••*/

/*
••• adding flavor to the classic function, make function easier to read.

••• if not object, classes, callback don't use arrow function.Í
*/

// example 

// Function 1
function add(num1, num2) {
  return num1 + num2;
}
// CODE
var add = (num1, num2) => num1 + num2;


// Function 2
function subtract(num1, num2) {
  return num1 - num2;
}
// CODE
var subtract = (num1, num2) => num1 - num2;


// Function 3
function double(num) {
  return num * 2
}
// CODE
var double = num => num * 2;



/*••• Mini project•••*/

/* # 1.1
Create a one line ES6 arrow function called isGreaterThanTwenty that will take in a parameter 
and return true if the parameter is greater than 20. The function should return false otherwise.  
*/
var isGreaterThanTwenty = num => num > 20;



/* # 1.2
Create a one line ES6 arrow function called seven that will return the number 7.  
*/
var seven = () => 7;



/* # 1.3
Re-write the ES5 functions provided as ES6 arrow functions.
Name your functions the same as the ES5 versions provided. 
*/
// Function 1
// function add(num1, num2){
//   return num1 + num2;
// }
var add = (num1, num2) => num1 + num2;


// Function 2
// function subtract(num1, num2){
//   return num1 - num2;
// }
var subtract = (num1, num2) => num1 - num2;


// Function 3
// function double(num){
//   return num * 2
// }
var double = num => num * 2;



/* # 1.4
Create an ES6 arrow function called multiply that will take in two parameters and return the product of the two parameters.  
*/
var multiply = (num1, num2) => num1 * num2;



/* # 1.5
Create an ES6 arrow function called add that will take in two parameters, both numbers. 
The function will need to add the two parameters passed in.   
*/
var add = (num1, num2) => num1 + num2;



/* # 1.6
Use the built in filter method to filter over the jobs array of objects and return 
the object of the person with a job as a programmer. Make sure to use the arrow function 
in conjunction with the filter method.  
*/
var jobs = [{ receptionist: "James" },
{ programmer: "Steve" },
{ designer: "Alicia" }];

// code
var solution = jobs.filter((obj) => obj.programmer);



/* # 1.7 
Write a multi-line arrow function called gemInfo that takes in three parameters: 
a gem type, gem size, and  a gem weight. Have the gemInfo function return an object
with the values of those parameters set to these three keys, gemType, gemSize, gemWeight.  
*/
var gemInfo = (gemType, gemSize, gemWeight) => {
  return {
    gemType,
    gemSize,
    gemWeight
  };
};



/* # 1.8
Inside the evens function use the built in filter method to filter over the array called 
numbers and return a new array with only the even numbers. 
Make sure to use the arrow function combined with the filter method.
*/
var numbers = "TBD";

// code
var evens = () => {
  return numbers.filter(num => num % 2 === 0);
};



/* # 1.9
Inside the startWithLetterA function use the built in filter method to filter over 
the array called strings and return a new array with only the strings that start 
with a letter "a". Make sure to use the arrow function combined with the filter method.  
*/
var strings = "TBD";

// code
var startWithLetterA = () => {
  return strings.filter(str => str.charAt(0) === 'a');
};



/* # 2.1
Inside the formalGreeting function use the built in .map method to map over the array called 
mes and return a new array with "Hello, " appended to the beginning of each name. 
Make sure to use the arrow function combined with the map method.    
*/
var names = "TBD";

// code
var formalGreeting = () => {
  return names.map(name => "Hello, " + name);
};



/* # 2.2 
Inside the productOfArray function use the built in reduce method to loop over the array 
called numbers and return the product of all the numbers in the array. 
Make sure to use the arrow function combined with the reduce method.    
*/
var numbers = "TBD";

// code
var productOfArray = () => {
  return numbers.reduce((accumulator, num) => accumulator * num);
};