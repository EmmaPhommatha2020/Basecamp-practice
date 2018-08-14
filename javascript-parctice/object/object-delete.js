
/*••••• Object - Delete •••••*/

/* 
••• delete: operator that deletes selected property from its parent object.

••• delete is a reserved keyword

••• delete will remove a property from an object, permanently

••• delete obj.prop - Will remove prop from obj

••• delete removes the key and the value.

••• setting something = to null does not

••• works with square bracket notation

••• delete person["name"] - removes the name key and value from person
*/

// example

myObj = {
  code: 'awesome',
  boredom: 'lame'
};
delete myObj.boredom;
myObj; // return => { code: 'awesome' }


// example

var work = {
  success: 'great',
  mistake: 'woops'
};
work.mistake = undefined;
work; // return => { success: 'great', mistake: undefined }

delete work.mistake;
delete work['success'];
work; // return => {}




