
/*••••• Function •••••*/

/* 
••• function: re-useable buiding block of code.

••• parameter: what passed into the function.

••• argument: the data received by the function.

••• return:indicates the 'result' of the function 
   and replaces the function invocation when completed.

••• function declaration: function myFunction(){};

••• function expression: var func = function(){};
*/

function shoeMaker(color, size) {
  console.log(color + ' size' + size + ' shoe');
}
shoeMaker('red', 10); // return => red size10 shoe




function giveMe7() {
  var seven = 7;
  return seven;
}
var ten = giveMe7() + 3;
console.log(ten); //return => 10




function add(num1, num2) {
  return num1 + num2;
}
var sum1 = add(1, 2);
console.log(sum1); // return => 3 

var sum2 = add(sum1, 2);
console.log(sum2); // return => 5




function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

add(5, 1) / subtract(3, 1); // = 5+1/3-1 => 6÷2 return => 3




function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

subtract(add(5, 2), 3); // = 5+2,3 => subtract 7,3 => return => 4 




function shoeMachineMaker(color) {
  return function () {
    return color + ' shoe';
  };
}
var blueShoeMaker = shoeMachineMaker('blue');
blueShoeMaker(); // return => 'blue shoe' 

var greenShoeMaker = shoeMachineMaker('green');
greenShoeMaker(); // return => 'green shoe'




function shoeModleMaker(color, laces, soles, glitter) {
  return function (size) {
    return color + ' shoe with ' + laces + ' laces, ' + soles + ' soles, and ' + glitter + ' glitter' + ' in size ' + size;
  };
}

var moonJumperMaker = shoeModleMaker('maagenta', 'yellow', 'green', 'pink');
console.log(moonJumperMaker(7));
// return => maagenta shoe with yellow laces, green soles, and pink glitter in size 7

console.log(moonJumperMaker(5.5));
// return => maagenta shoe with yellow laces, green soles, and pink glitter in size 5.5