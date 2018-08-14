
/*••••• Scope •••••*/

/* 
••• scope: the location in which any particular variable can be accessed.

••• location: variable defined inside a function. can be accessed within that function.

••• globlal variable: variable defined outside of any function. can be accessed anywhere in the code.

••• lexical scoping: the meaning of a variable depends on where it is called.

••• javascript is function scoped,meaning scope extends throughout the function. 
except if statements and for loops.

••• block scope: scope is defined by any code block not only functions,
but also if statements and for loops.

••• let: can be used in place of var to simulate block scoping in javascript.
*/

var globalName = "Emma";

function myName() {
  console.log("Hi, my name is " + globalName);
}
myName(); // return => Hi, my name is Emma