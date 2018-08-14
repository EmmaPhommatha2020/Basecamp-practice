
/*••••• Array more Methods ••••••*/

/* 
••• .indexOf(): finds the first instance of a value, if the value is not found, indexOf will return -1.

••• .forEach(): run a function based on each element.

••• .map(): creates a new array based on the original array.

••• .filter(): creates a new array of only elements that pass criteria.

••• .reduce(): method applies a function against an accumulator and each element in the array 
(from left to right) to reduce it to a single value. use when return 1 thing. use when ask for sum. use when ask to return total number of thing.
let X = arr.reduce((acc, cv, i ,arr) => {}, 0)  // (0) meant initial value.  //(acc) meant keep track of the total.

••• .split(): breaks a string based on a character, returns an array with each chunk as a new item.

*/



// array.indexOf();

var fruits = ["apple", "banana", "cherry"];

var bananaPlace = fruits.indexOf("banana");

console.log(bananaPlace); // return => bananaPlace = index 1
fruits.indexOf("cherry"); // return => index 2

var fruits = ['apple', 'banana', 'cherry', 'apple'];

var bananaPlace2 = fruits.indexOf('apple');
console.log(bananaPlace2); // return => bananaPlace2 = index 0
//.indexOf only find the first a current of a match on the String, 
//so it return the 'apple' on the index 0, but not 'apple' on the index 3//




// .forEach();

var myNumber = [1, 3, 5];

var addThree = myNumber.forEach((val, i, arr) => {
  arr[i] = val + 3;
  console.log(arr);
});
// return =>
[4, 3, 5] // first loop 1+3 = 4
[4, 6, 5] // second loop 3+3 = 6
[4, 6, 8] // third loop  5+3 = 8






// .map(); 

var myNumbers = [2, 3, 4];
var doubled = myNumbers.map(num => num * 2);  //.map
console.log(doubled); //-->[ 4, 6, 8 ] //return new arr//

console.log(myNumbers); //-->[ 2, 3, 4 ]//return original array without modifying the array//





// .filter(); 

var myPals = ["Bryan", "Landy", "Cam", "Ian", "Corey", "Taylor", "Megan"];

var longNames = myPals.filter((val, i, arr) => {
  return arr[i].length > 4;
});
console.log(longNames); //return [ 'Bryan', 'Landy', 'Corey', 'Taylor', 'Megan' ]

/* or this way//both work */
var myPals = ["Bryan", "Landy", "Cam", "Ian", "Corey", "Taylor", "Megan"];

var longNames = myPals.filter(name => name.length > 4);
console.log(longNames); //return [ 'Bryan', 'Landy', 'Corey', 'Taylor', 'Megan' ] 




// .reduce();

array.reduce( function( prev, item, index, arr) { } )
// or
array.reduce( ( prev, item, index, arr) => { } )


//adds a starting value after the function
array.reduce( function( prev, item, index, arr) { }, startingValue )
//or
array.reduce( ( prev, item, index, arr) => { }, startingValue )
//prev is whatever value the previous invocation returned


array.reduce( function( prev, item, index, arr) { return prev + next }, 0 )
//or
array.reduce( ( prev, item, index, arr) => prev + next, 0 )
//reduce is great for running totals

var array = [1, 2, 4, 10, 11]

var reduceResult = array.reduce( function( prev, item ) { return prev + item }, 0 )

var reduceResult = array.reduce( ( prev, item ) => prev + item, 0 )

reduceResult; // return => 28

array; // return => [1, 2, 4, 10, 11]





// .split();

// breaks a string based on a character
"hello, my, name, is, Jeremy".split(',')

// hard coded strings or variables

str.split(',')

// returns an array with each chunk as a new item

var splitArr = "hello, my, name, is, Jeremy".split(',')

splitArr; // return => ["hello", " my", " name", " is", " Jeremy"]


var string = "Your poopy face smells like chihuha";
var badWords = ["poopy", "chihuha"];

var filtered = badWords.reduce((prev, item) => prev.replace(item, "gumdrops"), string);

filtered; // return => 'Your gumdrops face smells like gumdrops'








