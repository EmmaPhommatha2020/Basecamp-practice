 
/*••••• Ternary ••••••*/

/* 
••• Ternary only work with (if && else) nothing more or nothing less.
*/


/* •• Mini project •• */

/* # 1.1
• Ternary operators are similar to if-statements. Below is the basic structure of a ternary statement.

• condition ? firstExpression : secondExpression
If condition evaluates to true, firstExpression is executed. What do you think will happen if condition evaluates to false?

• Our checkAge function accepts one parameter, and declares a variable that will have one of two values depending on that parameter.

1. Examine -- don't run -- the code.
2. What is the condition being tested in checkAge?
3. If this condition evaluates to true, what will happen? If it evaluates to false?
4. Determine the value of oldEnough on lines 10-12
5. Run the code to see if you're correct
*/
function checkAge(age) {
  var oldEnough = age >= 21 ? 'Yup' : 'Nope';
  console.log(oldEnough);
}

// oldEnough can only be one of two values. 
// It can be 'Yup' or 'Nope', 
// and that depends on the result of the 'age >= 21' condition.
// What will the value of oldEnough be?

checkAge(2); // console.log(oldEnough) return => Nope

checkAge(24); // console.log(oldEnough) return => Yup

checkAge(85); // console.log(oldEnough) return => Yup




/* # 1.2
Re-write the if-statement using the ternary operator.
*/
function schoolStatus(status) {

  var parentsMessage;

  // if (status == 'Good') {
  //   parentsMessage = 'Wow, great job kiddo!'
  // } else {
  //   parentsMessage = 'No more video games!'
  // }
  // code    
  status = 'Good' ? parentsMessage = 'Wow, great job kiddo!' : parentsMessage = 'No more video games!';

  return parentsMessage;

}

schoolStatus('Good'); // return => 'Wow, great job kiddo!'




/* # 1.3 
Complete the messageBasedOnAge function by using a ternary statement to return a string based on the age parameter.
•If age is less than 18, return: Not quite old enough, sorry.
•If age is 18, return: Congrats on being an adult!
•If age is greater than 18, return: Somebody is really getting up there, huh?
*/
function messageBasedOnAge(age) {
  //code here
  var result;
  age < 18 ? result = 'Not quite old enough, sorry.' : (
    age === 18 ? result = 'Congrats on being an adult!' : result = 'Somebody is really getting up there, huh?');
  return result;
}
messageBasedOnAge(17); // return => 'Not quite old enough, sorry.'

messageBasedOnAge(18); // return => 'Congrats on being an adult!'



