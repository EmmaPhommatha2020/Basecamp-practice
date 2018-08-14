
/* 03.7.2018. WPR35 - Knowlege Checks */


/* #1 Create a function called getPerson. 
Inside that function, create a person object with a name property (string) 
and an age property (number) and return it.
*/

// CODE //
function getPerson(user) {
  person = {
    name: 'Emma',
    age: 24
  };
  return person;
}




/* #2 Create a newCar function that takes in two parameters: make and model.  
Using those parameters, create a car object, give it make and model properties, 
and return it from the function
*/

// CODE //
function newCar(make, model) {
  car = {
    make: make,
    model: model
  };
  return car;
}
newCar('honda', 'civic'); // return => { make: 'honda', model: 'civic' }




/* #3 Create a function called canDrive that takes in a person object that has a name and an age property. 

If the person's age is greater than or equal to 16 then return a string concatenating 
their name with the string " is old enough to drive." 

If the person's age is less than 16 then return a string concatenating their name with the string 
" is not old enough to drive."
*/

var person = {
  name: 'Emma',
  age: 24,
};

// CODE //
function canDrive(person) {
  if (person.age >= 16) {
    return (person.name + " " + 'is old enough to drive.');
  }
  else if (person.age < 16) {
    return (person.name + " " + 'is not old enough to drive.');
  }
  return person;
}

canDrive(person); // return => 'Emma is old enough to drive.'




/* #4 Create a function called changeEmail that takes in a user object and a newEmail string. 
Replace the user's current email address (assigned to the email property) with the newEmail 
string, then return the updated user object.
*/

var user = {
  email: 'amm@amm.com',
};

var newEmail = 'jen@jen.com';

// CODE //
function changeEmail(user, newEmail) {
  user.email = newEmail;
  return user;
}

changeEmail(user, newEmail); // return => { email: 'jen@jen.com' }




/* #5 Create a function called addRole that takes in a user object and a string. 
This string will represent the user's new role in the system (i.e. admin, creator, editor, visitor). 
Create a new property on the user object called "role" and assign the passed in string to it, 
then return the updated user object.
*/

var user = {
  role: 'developer'
};

// CODE //
function addRole(user, string) {
  user.role = string;
  return user;
}
addRole(user.role); // return => 'developer'




/* #6 Create a function called removeRole that takes in a user object. 
Delete the user's role property and return the updated user.
*/

var user = {
  role: 'father',
};

// CODE //
function removeRole(user) {
  delete user.role;
  return user;
}

removeRole(user); // return => {}




/* #7 Create a function called unknownPerson that takes in a person object. 
This person object will have properties such as name, age, gender, etc. 
Loop through all the properties of the object and set each value to "Unknown", then return the object. 

For example, if "person" is {name: "Dolph L.", age: 33} then the function would return {name: "Unknown", age: "Unknown"}.
*/

var person = {
  name: 'Dolph',
  age: 33,
  gender: 'male',
};

// CODE //
function unknownPerson(person) {
  for (var val in person) {    //checks each value in person
    person[val] = 'Unknown';  //the [] around val makes it work 
  }
  return person;
}

unknownPerson(person); // return => { name: 'Unknown', age: 'Unknown', gender: 'Unknown' }




/* #8 Create a function called truthyObject that takes in a user object. 
This function should loop through the user object checking to make sure that each of its values is truthy. 
If a value is not truthy then remove it from the object. 
Return the updated object after looping through it.
*/

var user = {
  name: 'Emma', // truthy value
  email: null,  // falsey value
  birthday: 0,  // falsey value
};

// CODE //
function truthyObject(user) {
  for (var val in user) //create new variable (val) in user means check all of them
    if (!user[val]) { // says if the value isn't real, 
      delete (user[val]); //then delete that user value
    }

  return user;
}

truthyObject(user); // only truthy value will return => { name: 'Emma' } 