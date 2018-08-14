
/*••••• Classes ••••••*/

/* 
••• Allways captalize the first letter of the class name.

••• classes: are syntactical sugar for writing constructor functions and adding methods to the prototype.

••• constructor: entry point.

••• constructor function: take in parameters and assigns properties as usual.

••• outside constructor function: define any methods you want to add to prototype.

••• outside of class: create new instances.
*/

/* Classes

• Classes are a construct to help us build objects

The class syntax allows us to define a template and then use that template repeatedly.

The keyword to define a class is class

The keyword to use an already defined class and to make an object is new

class Music {}

var pop = new Music()

• Building objects

Classes can be invoked as often as you want. 

Every time you do you will get a new object.

The setup function for a class is called constructor.

• Functions

Functions are defined on the template and then shared between every copy.

They are created as siblings to the constructor at the top level.

They must use the this keyword to access the object the function was invoked from.
*/

// example
class Animal {
  constructor(sound, species) {
    this.sound = sound;
    this.species = species;
  }

  makeSound() {
    return "The " + this.species + " says " + this.sound;
  }
}

var genny = new Animal("hhoooof", "giraffe");
var zenny = new Animal("whoop whoop", "zebra");
var lenny = new Animal("good day to you sir", "lion");

var giraffeSound = genny.makeSound();
giraffeSound; // return => 'The giraffe says hhoooof'

var zebraSound = zenny.makeSound();
zebraSound; // return => 'The zebra says whoop whoop'

var lionSound = lenny.makeSound();
lionSound; // return => 'The lion says good day to you sir'


// example
class BankAccount {
  constructor(accountNum, startingAmount) {
    this.balance = startingAmount;
    this.accountNum = accountNum;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

var marconesAccount = new BankAccount(22, 100102010);
marconesAccount; // return => BankAccount { balance: 100102010, accountNum: 22 }

marconesAccount.withdraw(9000000);
marconesAccount; // return => BankAccount { balance: 91102010, accountNum: 22 }

marconesAccount.deposit(102011312);
marconesAccount; // return => BankAccount { balance: 193113322, accountNum: 22 }

var karynsAccount = new BankAccount(18, 1000);
karynsAccount; // return => BankAccount { balance: 1000, accountNum: 18 }

karynsAccount.withdraw(900);
karynsAccount; // return => BankAccount { balance: 100, accountNum: 18 }

karynsAccount.deposit(100);
karynsAccount; // return => BankAccount { balance: 200, accountNum: 18 }


marconesAccount; // return => BankAccount { balance: 193113322, accountNum: 22 }

karynsAccount; // return => BankAccount { balance: 200, accountNum: 18 }


// example
class Movie {
  constructor(title, year, director) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.ratings = [];
  }

  addRating(score) {
    this.ratings.push(score);
  }

  averageRating() {
    var sum = this.ratings.reduce((sum, next) => sum + next);
    return sum / this.ratings.length;
  }
}

var harryPotter = new Movie("Harry Potter", 1998, "J.K.");
harryPotter.addRating(5); // => 5
harryPotter.addRating(5); // => 5
harryPotter.addRating(3); // => 3

var avg = harryPotter.averageRating();
avg;// return => 4.333333333333333


// example
class Burger {     //class name Burger//
  constructor(layers) {   //function constructor is the entry point, every class can have access to this function
    this.layers = layers; //when the new key word is use and Burger invoke//
    this.percentLeft = 100;
  }
  eat() {     //eat(); is a function to use in class Burger,we can use (Burger.eat) 
    this.percentLeft--; //and return Burger decement --1 each time. 
    //every function that you add in class will add the prototype for you.
    //and group every funtionality Burger in one place//
  }
}
var tripleBigBoy = new Burger(3); // tripleBigBoy = new Burger that have 3 layers//
//invoke it like a function, but when we invoke it the entry point is constructor//
tripleBigBoy.eat; // to cedement the amout of the Burger lelf//


// example
class Tree {
  constructor(height) {
    this.height = height;
    this.food = 'photosynthesis';
  }
  grow() {    //grow function that increase height by +1 to the Tree//
    this.height++;
  }
}
//first Tree
var oak = new Tree(10);
console.log(oak); // return Tree { height: 10, food: 'photosynthesis' }
oak.grow();
oak; // = Tree { height: 11, food: 'photosynthesis' }
console.log(oak); //return Tree { height: 11, food: 'photosynthesis' }

//second Tree
var tawen = new Tree(5);
console.log(tawen); //return Tree { height: 5, food: 'photosynthesis' }
tawen.grow();
tawen; // = Tree { height: 6, food: 'photosynthesis' }
console.log(tawen); //return Tree { height: 6, food: 'photosynthesis' }


// example
class Student {
  constructor(name, cohort) {
    this.name = name;
    this.cohort = cohort;
  }
  sayName() {
    return "Hi I am " + this.name
  }
}
var emma = new Student("Emma", 35);
console.log(emma.name) // return => "Emma"
var alan = new Student("Alan", 13);
alan.sayName(); // return => 'Hi I am Alan'



/*••• Mini project •••*/

/* # 1.1
The class should have a constructor that accepts three parameters: happiness, energy, and behavior.
*/
class Puppy {
  constructor(happiness, energy, behavior) {
    this.happiness = happiness;
    this.energy = energy;
    this.behavior = behavior;
  }
}



/* # 1.2
Create a class called Car that creates two properties on each Car object.
The first property should be called manufacturer and the second property should be called year.
The class should also have a method called displayManufacturer that returns the manufacturer.
It should also have a method called displayYear that returns the year.
*/
// code
class Car {
  constructor(manufacturer, year) {
    this.manufacturer = manufacturer,
      this.year = year;
  }
  displayManufacturer() {
    return this.manufacturer;
  }
  displayYear() {
    return this.year;
  }
}
var BillysFirstCar = new Car('Tesla', 2017)
BillysFirstCar.displayManufacturer();
BillysFirstCar.displayYear(); // return => 2017



/* # 1.3
Using the provided Puppy class, create three new puppies, each with whatever value you
want for their happiness, energy, and behavior.
Name each of the puppies larry, moe, and curly, respectively.
*/
class Puppy {
  constructor(happiness, energy, behavior) {
    this.happiness = happiness
    this.energy = energy
    this.behavior = behavior
  }
}
// code
var larry = new Puppy(10, 20, 30);
var moe = new Puppy(40, 50, 60);
var curly = new Puppy(70, 80, 90);



/* # 1.4
The class Puppy needs two methods.
The getsTreats method should accept one parameter, the number of treats. 
It should increase happiness by 20 for each treat received, then return the new happiness value.
The takesNap method should decrease energy by 45 and increase behavior by 15.
Make sure you make the puppy take his nap in order to change his energy and behavior levels.
*/
class Puppy {

  constructor(happiness, energy, behavior) {
    this.happiness = happiness
    this.energy = energy
    this.behavior = behavior
  }
  // code
  getsTreats(numTreats) {
    this.happiness = this.happiness += 20 * numTreats;
    return this.happiness;
  }

  takesNap() {
    this.energy -= 45;
    this.behavior += 15;
  }
}

var Charles = new Puppy(75, 25, 30)
Charles.takesNap()





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
  constructor(items){
    this.cart = items;
  }

remove(id){
  this.cart.forEach((value, i) =>{
    (id === value.id) ? this.cart.splice(i, 1) : ""
  })
  return this.cart
 }
}
var myCart = new Cart(testItems)
myCart.remove(1) // remove id 1
// return => [ { id: 2, product: 'Paint Palette', price: 7.99, quantity: 3 },
//{ id: 3, product: 'Paint Thinner', price: 15.99, quantity: 2 } ]