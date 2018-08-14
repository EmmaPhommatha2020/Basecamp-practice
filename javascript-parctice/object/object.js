
/*••••• Object ••••••*/

/* 
••• key - value pair.  

••• dictionary: and look up.

••• collection of lelated information and store in a single variables.

••• dot notation: the name of an object followed by a period and the name of the 
property on that object, can be used to access, change or create a property on an object.

••• bracket notation: alternate syntax for accessing properties on an object, 
must be used for properties with numeric keys.

••• object - method: a property of an object whose value is a function. 
can be added to existing objects using dot notation or bracket notation.
other properties on the object must be accessed with fall dot notation from a method.

••• objects - creating with functions: returning an object from a function allows us to 
easily create multiple, distinct instances of a similar structure.
*/

// dot notation
var favorites = {
  food: "pizza",
  hobby: "soccer",
  movie: "minions",
};
console.log(favorites); // return => { food: 'pizza', hobby: 'soccer', movie: 'minions' }
console.log(favorites.food); // return => pizza



// bracket notation
var myObj = {
  1: "one",
  two: 2
};
var prop = "two";
myObj[prop]; uesing // return => 2



// bracket notation
var shelevs = {
  1: ["Beowulf", "Sherlock Holmes"],
  2: "trophy"
};
shelevs[1]; // return => [ 'Beowulf', 'Sherlock Holmes' ]
shelevs[1][0]; // return => 'Beowulf' 
shelevs[1][1]; // return => 'Sherlock Holmes'
shelevs[1 + 1]; //return => 'trophy'



// bracket notation && dot notation
var chameleon = {
  color: "red",
  texture: "scaly"
};
function changeProp(propName, newValue) {
  chameleon[propName] = newValue;
}
changeProp("color", "fucsia"); // updated the color
chameleon.color; // return => 'fucsia'



// object method
var myCar = {
  miles: 20000,
  drive: function () {
    myCar.miles++;
  }
};
myCar.drive();
myCar.miles; // return => 20001



// objects - creating with functions
function carMaker(doors) {
  return {
    wheels: 4,
    doosr: doors
  };
}
var coupe = carMaker(2);
coupe.wheels; // return => 4
coupe.doors; // return => 2

var sedan = carMaker(4);
sedan.wheels; // return => 4
sedan.doors; // return => 4



/* •• Mini project •• */

/* # 1.1
Use dot notation to return the firstname.
*/
function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
  };
  // code
  return person.firstname;
}
personName(); // return => 'sally'



/* # 1.2
Use bracket notation to return the location.
*/
function personName() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT'
  };
  // code
  return person['location'];
}
personName(); // return => 'Orem, UT'



/* # 1.3
Use dot notation to add a new property to the object backpack called frontpocket with the 
value equal to "compass".
*/
var backpack = {};

// code
backpack.frontpocket = "compass";

backpack; // return => { frontpocket: 'compass' }



/* # 1.4
Use dot notation to access the frontpocket property on the backpack object and assign 
its value to the variable backpackFrontpocket.
*/
var backpack = {
  frontpocket: "compass"
};

// code
var backpackFrontpocket = backpack.frontpocket;

backpack; // return => { frontpocket: 'compass' }



/* # 1.5
Use bracket notation to add a new property named material to the box object with the 
value equal to "cardboard".
*/
var box = {};

// code
box['material'] = 'cardboard';

box; // return => { material: 'cardboard' }



/* # 1.6
Create a variable called name. Assign it the value of the firstname property by using dot notation.
*/
var person = {};

person["firstname"] = "sally";

// code						
var name = person.firstname;

person; // return => { firstname: 'sally' }



/* # 2.1
In the function personalize, change the value of name to Ryan, change the value of pwHash 
to 43df90w_h and change the value of username to ryanleeeallred. 
After you have updated all the values return the new object.
*/
var user = {
  name: 'Sally Rally',
  pwHash: 'U+Ldlngx2BYQk',
  username: 'SallyRally801'
};

function personalize(obj) {
  // code
  obj.name = 'Ryan';
  obj.pwHash = '43df90w_h';
  obj.username = 'ryanleeeallred';
  return obj;
}

//personalize(user); // return => { name: 'Ryan', pwHash: '43df90w_h', username: 'ryanleeeallred' }



/* # 3.1
Inside the function updateEmail, update the email property to be the value of the parameter str. 
Return the updated object.
*/
function updateEmail(obj, str) {
  // code
  obj.email = str;
  return obj;
}



/* # 3.2
Write a function called isOldEnough that takes a person obj and checks the age property to see if the person is old enough to enter the club.  
If they are 21 or older return true else return false.
*/
// code
function isOldEnough(person, age) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}



/* # 3.3
Create a function called addRole that takes in a user object as the first parameter and a string as the second parameter.  
The string will represent the user's new role in the system (i.e. admin, creator, editor, visitor). 
Create a new property on the user object called "role" and assign the passed in string to it, then return the updated object.
*/
// code
function addRole(user, str) {
  user.role = str;
  return user;
}
