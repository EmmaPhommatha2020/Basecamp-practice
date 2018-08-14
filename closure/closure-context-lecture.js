// ••• implicit binding -- Gold Star •••

let brack = {
  hunger: 15,
  money: 50,
  eatSushi: function() {
    this.hunger -= 5;
    this.money -= 15;
  }
};

brack.eatSushi();

let joe = {
  hunger: 150,
  money: 500
};

joe.eatSushi = brack.eatSushi;

joe.eatSushi();
console.log(joe);

// ••• explicit binding -- React uses bind fairly often when attaching things to button / events •••

let brackEatSushi = brack.eatSushi.bind(brack);

brackEatSushi();

joe.eatSushi = brack.eatSushi.bind(brack);

joe.eatSushi();

console.log(brack);

joe.eatSushi();

console.log(brack);
joe.eatSushi();

console.log(brack);
// ••• explicit binding •••

let jsx = `<button 
  click={brack.eatSushi.bind(brack)}
  click={() => brack.eatSushi()}> Brack Eat Sushi </button> `;

button.click = brack.eatSushi;

// ••• Arrow functions automatically use explicit binding.•••

let game = {
  scores: [],
  requiredScore: 15,
  findWinners: function() {
    this;
    return this.scores.filter(e => {
      return e > that.requiredScore;
    });
  }
};

game.findWinners();

let myFunc = game.findWinners;

myFunc();

// ••• default -- useless thing you don't want •••

function noContext() {
  console.log(this);
}

noContext();

// ••• new -- Only for constructor functions / classes •••
// Cap the function

function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.mileage = 0;
}

Car.prototype.driveCar = function() {
  this.mileage += 10;
};

class Truck {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.mileage = 0;
  }

  driveCar() {
    this.mileage += 10;
  }
}

let myTruck = new Car();

console.log(myTruck);

let car = new Car("Ford", "Focus", "Yellow");
car.driveCar = function() {
  this.mileage += 30;
};
car.driveCar();
car.driveCar();
car.driveCar();
car.driveCar();
myTruck.driveCar();
console.log(car);
console.log(myTruck);

Array.prototype.coolNewFeature = function() {
  console.log("it's gonna be dope");
};

let a = [1, 2, 3];
a.coolNewFeature();

Array.prototype.indexOf = function(yo) {
  console.log("so dope" + yo);
};

a.indexOf(2);

function delayMessage(msg, delay) {
  setTimeout(() => console.log(msg), delay);
}

// delayMessage("Yo I waited", 3000);
console.log("Way before");

for (var i = 0; i < 10; i++) {
  // delayMessage(i, i*500)
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 500);
  }, 500);
}

for (var i = 0; i < 10; i++) {
  let outer = function() {
    let myNum = i;
    setTimeout(() => console.log(myNum), i * 500);
  };
  outer();
}





//  ••• example from Tiara ••• 
for (var i = 0; i < 10; i++) {
  let num = i;
  setTimeout(() => {
    console.log(num);
  }, 500 * i);
}
// When functions in JavaScript execute, they use the same scope chain that was in effect when they were created.
//The trick seems to be with 'let' vs 'var'. With the current code, we have 'let num = i'. Let defines num with block scope, not global scope, thereby preserving the value of i with each iteration.
//block scope makes it so that with each interation of the for-loop, num gets defined for that block of code. If num or i are global variables, their values get overwritten each time i increases.
//Using 'let' to define variables within block is what allows us to do the following and have two nested for-loops using the same variable.

for (let i = 0; i < 10; i++) {
  console.log("top", i);
  for (let i = 0; i < 10; i++) {
    console.log("bottom", i);
  }
}

//Create an protoype method on a string called vowelCounter that counts the number of vowels in a string. The vowelCounter function is already written. How do I change it to be a prototype on a String?

String.prototype.vowelCounter = function() {
  var vowelArray = ["a", "e", "i", "o", "u"];
  var counter = 0;
  for (var index in this) {
    let letter = this[index];
    vowelArray.includes(letter) ? ++counter : counter;
  }
  return counter;
};

// vowelCounter: (string) =>{
//   var vowelArray=['a','e','i','o','u'];
//   var counter = 0;
//   for (var index in string){
//     let letter = string[index];
//     (vowelArray.includes(letter)) ? ++counter : counter
//   }
//   return counter;
// }

//What does a prototype method do? What is it's purpose in life?
//It saves space to put it on the prototype rather than put this method on every instance of that object.

//What is the context of 'this'in your prototype method - default, implicit, explicit? How can you tell?
//implicit - gets context from the object that is to the left of the dot.

"hello".vowelCounter();

//Can you use arrow functions in constuctors? Why?
//They automatically bind to the parent, which frequently defaults to the window object.

function Cat(color, size, catNipAddictionLevel) {
  this.color = color;
  this.size = size;
  this.catNipAddictionLevel = catNipAddictionLevel;
}

var Pippin = new Cat("dirt", "large", 8);

Cat.prototype.nap = function() {
  return `Pippin is ${this.color} and ${this.size}.`;
};

Pippin.nap();

//How do you create explicit binding?
//Use .bind, .apply, or .call

function camelRider() {
  return `${this.name} is my owner`;
}

var person = {
  name: "Tiarra"
};

var camelOwner = camelRider.bind(person);

camelOwner();

//Why do you use explicit binding in React?
//To make sure the function you are passing to a child component knows which component state to update (e.g. the state of the parent conmponent, not the state of the child)

//Closure - 'A closure is a record storing a function together with an environment.'

function iceCreamBowl(icecream) {
  var bowl = [icecream];
  return function toppings(topping) {
    bowl.push(...topping);
    return bowl;
  };
}

//How do I create a closure with an initial value of "vanilla"?

var vanilla = iceCreamBowl("vanilla");

//Now how do I add new toppings to our closure?

vanilla(["sprinkles", "snickers", "hot fudge"]);

//Can I create multiple closures using the same iceCreamBowl setup?

var spumoni = iceCreamBowl("spumoni");

spumoni(["hot fudge", "marshmallow"]);
