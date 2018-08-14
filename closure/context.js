/* ••• Context •••

• Explicit a function is given the specific context to use for 'this'.
• bind: a method that allows us to create a copy of a function where we define the value of 'this'.


• Implicit context is implied by the object from which the method was called.
• Find the value of Implicit implied context: context is inferred to be the object left of the dot when the function is invokeed, not when it is defined.


• Default if context is not defined explicitly or implicily, the context is default- in the browser, that is the window.
• use strict make your code savfer. but try to avoice the default 


• 'this' is reserved keyword used to access context in a function.


• 'new' keyword create a new object to be the context, then runs the constructor function using thet new emply object as the context.


• arrow functions, do not create their own scope. 'this' will defer to its containing scope. they can be used to pass in argruments. 
can't change the context.


• private data cannot be accessed from outside the function. you can create public methods that give limited access to private data.


• constructor functions use assigning instead of object literal. 
• we can use parameters to assign diffrent values to the initial properties.
• we can add methods to the constructor, although this may not be the best option.
• use 'new' to create a new object to initialize with the constructor function.  
*/

// example Implicit
var student = {
  name: "Mia Sanchez",
  sayName: function() {
    return this.name; // 'this' value is student object.
  }
};

student.sayName(); // context of the 'this' keyword is student and student is an object.

// more example
function eat() {
  this.food = 2;
  return this.food;
}

var dogBowl = {
  food: 30,
  eatFood: eat
};

dogBowl.eatFood();

// example Default
function defaultContext() {
  return this;
}

defaultContext() === window; // => true

// example Explicit
var scores = [87, 98, 91];

function removeFirst() {
  return this.shift();
}

var removeFirstScore = removeFirst.bind(scores);
removeFirstScore(); // return => 87
removeFirstScore(); // return => => 98

console.log(scores); // return => [ 91 ]

// more example
function Person(name) {
  (this.name = name),
    (this.age = 0),
    (this.birthday = function() {
      this.age++;
    });
  console.log(this); // return => Person { name: 'Blake', age: 0, birthday: [Function] }
}

var blake = new Person("Blake");

// arrow function
var Owl = function() {
  this.prey = ["mice", "sparrow"];

  var hunt = () => {
    this; //  'this' keyword share context with the parent, the value is {prey:['mice', 'sparrows']}
    return this.prey;
  };
  hunt();
};

// private
function Superhero() {
  var secretIdentity = "Billy Joe Jarvis";

  this.powers = ["laser vision", flight];
  this.fightEvil = function() {};
  this.revealSecretIdenity = function() {
    return secretIdentity;
  };
}

var mouseMan = new Superhero();

mouseMan.revealSecretIdenity(); // return => Billy Joe Jarvis
