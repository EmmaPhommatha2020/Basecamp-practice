
/*••••• For Loops ••••••*/

/* 
••• for loop: block of code that repeats under specified conditions.

••• 3 parts: 
• initialization: define the iterator or counter.

• condition: defines the conditions

• final statement: evaluated after loop runs

• loop backward is to check everything if delete same element more than one. 
• don't use the forward is will skip the number index in the begining.
*/

var threeHellos = [];
for (var i = 0; i < 3; i++) {
  threeHellos.push('hello');
}
threeHellos; // return => [ 'hello', 'hello', 'hello' ]



var countToThree = [];
for (var i = 1; i <= 3; i++) {
  countToThree.push(i);
}
countToThree; // return => [ 1, 2, 3 ]



var nums = [2, 31, 47, 16];
var evenNums = [];

for (var i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNums.push(nums[i]);
  }
}
evenNums; // return => [ 2, 16 ]


