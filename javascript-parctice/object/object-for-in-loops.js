
/*••••• Object - For in Loops •••••*/
/*
••• for in loop: loop that runs a block of code of each of an object's own properties.
••• ex: for(var prop in myObj){myObj[prop];}
(prop) => create variable that will stand for each property key.
(myObj) => the object to loop through.
[prop] => the property key variable can be referred to inside the loop use bracket notation.
*/

/* For In Loops

Use the for key word

for() {}

use in the in keyword to indicate they are a different kind of for loop

for(... in ...) {}

need a variable to the left of the in

for(var key in ...) {}

place the object you are looping over to the right of the in

for(var key in object){}

Are used to loop over all of the keys of an object
*/
// example

var drink = {
  color: 'orange',
  taste: 'orange',
  carbonated: true,
  brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'
for (var key in drink) {
  var val = drink[key];
  key; // => color, taste, carbonated, brand
  val; // => orange, orange, true, sunkisser
  if (val === 'orange') {
    drink[key] = 'cherry'
  }
}


// example

var favorites = {
  color: 'red',
  flavor: 'vanilla'
};
for (var prop in favorites) {
  console.log(favorites[prop]);
  // return => red
  // => vanilla
}


// example

var employees = {
  tom: 'designer',
  chris: 'engineer',
  james: 'developer'
};
var employeeNames = [];
for (var prop in employees) {
  employeeNames.push(prop);
}
employeeNames; // return => [ 'tom', 'chris', 'james' ]


// example

var employees = {
  tom: 'designer',
  chris: 'engineer',
  james: 'developer'
};
var employeeNames = [];
for (var prop in employees) {
  employeeNames.push(prop); // ()--> return key
}
employeeNames; // return => [ 'tom', 'chris', 'james' ]

var employeeRoles = [];
for (var prop in employees) {
  employeeRoles.push(employees[prop]); // []--> return value
}
employeeRoles; // return => [ 'designer', 'engineer', 'developer' ]


// example

var payroll = {
  josie: 400,
  mark: 380,
  tonya: 200,
  miguel: 250
};
for (var prop in payroll) { // prop is each key in the object.
  payroll[prop] = 300;
}
payroll; // return => { josie: 300, mark: 300, tonya: 300, miguel: 300 }


// example

var suitcase = {
  shirt: 'white',
  tie: 'skinny',
  jeans: 'black'
};
for (var prop in suitcase) {
  delete suitcase[prop];
}
suitcase; // return => {}


// example

var user = {
  name: 'Emma', // truthy value
  email: null, // falsey value
  birthday: 0, // falsey value
};

function truthyObject(user) {
  for (var val in user) //create new variable (val) in user means check all of them
    if (!user[val]) { // says if the value isn't real, 
      delete (user[val]); //then delete that user value
    }

  return user;
}

truthyObject(user); // only truthy value will return => { name: 'Emma' }


// example

var values = {
  one: 'These',
  two: ' are',
  three: ' the',
  four: ' property',
  five: ' values.'
};

for (var key in values) {
  console.log(values[key]); // return => These are the property values
}

for (var key in values) {
  console.log(key); // return => one two three four five
}



/*••• Mini project •••*/

/* # 1.1
Here we have a function called objectLooper that will take a number object and loop over it.  
Inside this loop, change the value of each property to 0.
*/
var number = {
  age: 30,
  score: 100,
  length: 12,
  year: 2016
};

function objectLooper(number) {
  for (var key in number) {
    // code
    number[key] = 0;
  }
  return number;
}
//objectLooper(number); // return => { age: 0, score: 0, length: 0, year: 0 }



/* # 1.2
Check each value inside the prewritten for in loop. If a value is greater than 3,000,000 set it to 0.
*/
var state = {
  utah: 2942902,
  texas: 26956958,
  california: 38802500
};

function stateLooper(obj) {
  for (var key in obj) {
    // code
    if (obj[key] > 3000000) {
      obj[key] = 0;
    }
  }
  return obj;
}
//stateLooper(state); // return => { utah: 2942902, texas: 0, california: 0 }



/* # 1.3
Here is a function named cleanUser that will be passed an object. 
Inside of this function, loop over the object so that every property with a falsy value is removed. 
Once all falsy values and their properties are removed, return the object.
*/
function cleanUser(obj) {
  // code
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  return obj;
}



/* # 1.4
Create a function called zeroOut that takes a user object and loops over that object 
to change all the object property values to 0. Return the updated user object.
*/
// code
function zeroOut(user) {
  for (var key in user) {
    user[key] = 0;
  }
  return user;
}
