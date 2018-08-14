
/*••••• Object - Copying with Assign•••••*/

/* 
••• Object.assign: copies all properties and values from source objects to a target object.

••• target object: will be returned by the function.

••• source object: the properties from the object will be copies to the target object.
*/

// example

// Object.assign is a function used to copy properties from one object to another

Object.assign( destination, source )

Object.assign( { }, { name: "Me" } )

// Object.assign copies from the right to the left and returns the final copy
Object.assign( { age: 27 }, { name: "Myself"}) 

var result = Object.assign( { age: 27 }, { name: "Myself"}) 

// Can copy multiple times
var result = Object.assign( { age: 27 }, { name: "Myself"}, { color: "Red"}, { food: "Wings" }) 



// example

var obj = {
  name: 'Joseph'
};
var obj2 = Object.assign({}, obj);

obj.name = 'Joe';
obj; // return => { name: 'Joe' }

obj2; // return => { name: 'Joseph' }


// example

var cat = {
  name: 'Fluffles'
};
var tuna = {
  container: 'can'
};
var dogFood = Object.assign({}, cat, tuna);
dogFood; // return => { name: 'Fluffles', container: 'can' }

cat; // return => { name: 'Fluffles' }
cat.name = 'Pookie';
cat;// return => { name: 'Pookie' }

