 
/*••••• Prototypes ••••••*/

/*
••• adding methods to the prototype instead of the constructor function.

••• invoke methods on prototype as if they were properties of the object itself,
javascript will search first for a method on the object, then look to the prototype.
*/

// example

function Dog() {
  this.legs = 4;
}
Dog.prototype.bark = function () {
  return 'arf arf';
};
Dog.prototype.eat = function () {
  return 'petdegree';
};
var corgi = new Dog();
corgi; // return => Dog { legs: 4 }
corgi.bark(); // return => 'arf arf'
corgi.eat(); // return => 'petdegree'




// example

function Flower(color) {
  this.color = color;
  this.blossomed = false;
}
Flower.prototype.bloom = function () {
  this.blossomed = true;
};
var rose = new Flower('red');
var lilac = new Flower('purple');

rose.bloom();
rose; // retur => Flower { color: 'red', blossomed: true }


lilac.bloom();
lilac; // return => Flower { color: 'purple', blossomed: true }




// example

Array.prototype.firstItem = function () {
  return this[0];
};
var myArray = ['first', 'second', 'third'];
myArray.firstItem(); // return => 'first'
