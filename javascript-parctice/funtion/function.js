
/* 03.8.2018. WPR35 - Knowlege Checks */


/* # 1 Create a function called myFunc that returns true. */
// CODE //
function myFunc() {
  return true;
}



/* #2 Create a function called sayHi that returns the string "Hi" */
// CODE //
function sayHi() {
  return "Hi";
}



/* #3 Create a function called centsInDollar that returns the number 100. */
// CODE //
function centsInDollar() {
  return 100;
}



/* #4 Create a function called double that takes in a number parameter, multiplies it by two, 
and returns the doubled number.  
*/
// CODE //
function double(num) {
  return num * 2;
}
double(2); // return => 4




/* #5 Create a function called favFood. 
This function should take whatever is passed in as the food parameter and concatenate it with the phrase 
"My favorite food is " (Concatenate a fancy word for adding two strings together to create one big string).   
*/
// CODE //
function favFood(food) {
  return "My favorite food is " + food;
}
favFood("pizza"); // return => 'My favorite food is pizza'




/* #6 Create a function called addition that takes in two parameters, adds them together, and returns the result. */
// CODE //
function addition(num1, num2) {
  return num1 + num2;
}
addition(10, 10); // return => 20




/* #7 Create a function called favColor that takes in a color parameter. 
If the color that is passed in is the string "blue",  return "That's my favorite color too!" 
If it's anything else then return "What a lame color." 
*/
// CODE //
function favColor(color) {
  if (color === "blue") {
    return "That's my favorite color too!";
  } else {
    return "What a lame color.";
  }
}
favColor("pink"); // return => 'What a lame color.'




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




/* #9 Create a function called numCompare that takes in two number parameters. 
If the first parameter is greater than the second, return "Greater Than". 
If the first parameter is less than the second, return "Less Than". 
If the two are equal return "Same Number".
*/
// CODE //
function numCompare(num1, num2) {
  if (num1 > num2) {
    return "Greater Than";
  } else if (num1 < num2) {
    return "Less Than";
  } else if (num1 === num2) {
    return "Same Number";
  }
}
numCompare(2, 1); // return => 'Greater Than'
numCompare(1, 2); // return => 'Less Than'
numCompare(2, 2); // return => 'Same Number'




/* #10 If statements are all about making decisions based on certain parameters.
Let's decide what you should wear today based on the temperature outside and the weather. 
Create a function called myOutfit that takes in a temperature and a weather parameter. 
• If the temperature is greater than or equal to 72 and weather is "rainy"
return "shorts and t-shirt, bring umbrella".
• If the temperature is greater than or equal to 72 and the weather is "sunny" return "shorts and t-shirt".
• If the temperature is less than 72 and the weather is "rainy" return "long pants and rain coat".
• If the temperature is less than 72 and the weather is "sunny" return "long pants and sweater".
*/
// CODE //
function myOutfit(temperature, weather) {
  if (temperature >= 72 && weather === "rainy") {
    return "shorts and t-shirt, bring umbrella";
  } else if (temperature >= 72 && weather === "sunny") {
    return "shorts and t-shirt";
  } else if (temperature < 72 && weather === "rainy") {
    return "long pants and rain coat";
  } else if (temperature < 72 && weather === "sunny") {
    return "long pants and sweater";
  }
}
myOutfit(72, "rainy"); // return => 'shorts and t-shirt, bring umbrella'
myOutfit(72, "sunny"); // return => 'shorts and t-shirt'





