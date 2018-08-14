
/*••• Object Destructuring ••••*/

/*
•• {} leftside of = mean destructuring; in the ({}){} mean code block and destructuring;
{} on the rightside of = mean object.

•• Destructuring is a shortcut for pulling properties off of an object

•• move the property name(s) from the dot notation on the right into the curly braces on the left

•• Destructuring is triggered by curly braces on the left side of an assignment

• var name = employee.first_name;

becomes => var {first_name} = employee


• var object = {
    x: 7,
    y: 8
}

* Yup 
var { x } = object; 

* Nope
var { newX } = object;
*/




/*••• Mini project •••*/

// example

/* Object destructuring allows you to "unpack" properties from objects and assign them to variables. 
An example of this is the object numbers as seen in the code. On line 9, variables one,
two and three are receiving the property values from the numbers object. 
If you uncomment and run the code, it will print to the console '1 2 3'.
*/
var numbers = {
  one: '1',
  two: '2',
  three: '3'
}
var { one, two, three } = numbers

console.log(one, two, three); // return => 1,2,3



// example

/* Now that you have some experience with destructuring, we will take it one step further. 
Instead of using a variable to assign values, we will use an object literal. 
*/
var { one, two, three } = { one: '1', two: '2', three: '3' }

console.log(one, two, three)



// example

/* We have an object called nums and a function called addition. In this function, 
we are using object destructuring to unpack the objects values and assign them to new 
variables. We then will add these values together and return the result.
If you uncomment and run the code, you'll see that the result is 6.
*/
var nums = {
  one: 1,
  two: 2,
  three: 3
}

var addition = (obj) => {
  var { one, two, three } = obj;
  var total = one + two + three;
  return total
}

addition(nums)



// example

/* Now that you've practiced object destructuring inside of a function with that function's parameter, 
we will take it one step further.
Instead of using object destructuring inside of the function, we can declare a destructured 
object as our parameter.
If you uncomment and run the example code, you will see that the function immediatelyDestructured 
has a parameter that is a destructured object. This is useful because we can immediately use the 
variables one, two and three in the function instead of having to destructure the object parameter inside of the function. 
*/
var immediatelyDestructured = ({ one, two, three }) => {
  return one + two + three
}

immediatelyDestructured({ one: 1, two: 2, three: 3 })



/* # 1.1
Here you are given the object animalCount. Destructure this object so that you 
have 3 distinct variables with the values of the matching properties from animalCount
*/
// code
var animalCount = {
  cats: 2,
  dogs: 5,
  mice: 0
};
var { cats, dogs, mice } = animalCount;

console.log(cats, dogs, mice); // return => 2 5 0




/* # 1.2
Create an object literal to assign the variables students, mentors and instructors a value through 
destructuring. Set the value of students to be 24, mentors to be 3, and instructors to be 5.
*/
var { students, mentors, instructors } = { students: 24, mentors: 3, instructors: 5 };

console.log(students, mentors, instructors); // return => 24 3 5




/* # 1.3
Create an object named languages. Give it the properties 'french', 'english' and 'spanish'. 
Give these properties the value true if you speak the language, false if you do not.
Use destructuring to assign the values of these properties to new variables.
*/
var languages = {
  french: false,
  english: true,
  spanish: false
};
var french = languages.french;
var english = languages.english;
var spanish = languages.spanish;



/* # 1.4
Write a function called subtraction with an object parameter.
The object passed in this function will have the property names num1 and num2. 
Use object destructuring to assign the values of these properties to new variables. 
Subtract num2 from num1 and return the result. 
*/
function subtraction(obj) {
  var { num1, num2 } = obj;
  var total = num1 - num2;
  return total;
}


/* # 1.5
Create a function called zooAnimals that will take an object parameter. 
The object passed to this function will have the property names lion, tiger, and bear. 
The values of these properties will be a number representing the count of that animal in the zoo. 
Using object destructuring, return the value of all of these properties combined.
*/
var animals = {
  lion: 1,
  tiger: 2,
  bear: 3
};
function zooAnimals(obj) {
  var { lion, tiger, bear } = obj;
  var total = lion + tiger + bear;
  return total;
}
zooAnimals(animals); // return => 6



/* # 1.6
Write a function called greeting. Instead of giving it an object parameter, give it a 
destructured object as it's parameter. The properties of this object will be name and title.
Return from this function a greeting sentence that should say "Hello, <title> <name>!". 
Title and name in this sentence should be replaced with the values of the destructured 
object variables. 
*/
function greeting({ name, title }) {
  return "Hello, " + title + " " + name + "!";
}



/* # 1.7
Create a function called truthyFalsy that takes a destructured object as it's parameter.
The properties of this object will be number and string. One of these properties will be truthy, 
the other will be falsy. Return the value that is truthy.   
*/
function truthyFalsy({ number, string }) {

  return number ? number : string;
}

