/* ••• Closure •••

• closure is a functions that refer to variables defined in an enclosing scope.

• you can both access and manipulate the variables in the closure, 
and it will not affect the original variable or other closure copiesmade from that same funtion.

• allow you to create multiple trackable, independent states.

• keep data secure- the rst of code can only interact with those variables in the ways that you define.

• even functions returned as method on an object (or an object in an array) create closure. 

*/

// example
function loafOfBread() {
  var slices = 20; // starting number
  return {
    eat: function(numSlices) {
      slices -= numSlices;
      return slices;
    }
  };
}

var wheatLoaf = loafOfBread();
wheatLoaf.eat(2); // return => 18
wheatLoaf.eat(4); // return => 14

var sourdoughLoaf = loafOfBread();
wheatLoaf.eat(2); // return => 12
sourdoughLoaf.eat(2); // return => 18

// example
function createInventory(strNum) {
  var product = strNum;
  function checkUser() {
    return auth.checkUser();
  }
  return {
    sellProduct: function(amount) {
      product -= amount;
      return amount;
    },
    restock: function(amount) {
      if (checkUser() === "admin") {
        product += amount;
        return amount;
      }
    }
  };
}

var candyInventory = createInventory(300);

candyInventory.sellProduct(12); // return => 12

// example
function createCalculator() {
  var currentAnswer = 0;

  return {
    add: function(num) {
      currentAnswer += num;
      return currentAnswer;
    },
    subtract: function(num) {
      currentAnswer -= num;
      return currentAnswer;
    },
    clear: function() {
      currentAnswer = 0;
      return currentAnswer;
    }
  };
}

var calc = createCalculator();
calc.add(10); // return => 10
calc.subtract(3); // return => 7
calc.subtract(4); // return => 3

var calc2 = createCalculator();
calc2.add(6); // return => 6
calc2.subtract(2); // return => 4

//example
function registerTeam(name) {
  var teamName = name;
  var record = {
    win: 0,
    losses: 0
  };
  return {
    win: function() {
      record.wins++;
      return record;
    },
    lose: function() {
      record.losses++;
      return record;
    }
  };
}

var flyingTunas = registerTeam("Flying Tunas");
flyingTunas.win(); // return => { win: 0, losses: 0, wins: NaN }
flyingTunas.lose(); // return => { win: 0, losses: 1 }

var tigers = registerTeam("Tigers");
tigers.win(); // return => { win: 0, losses: 0, wins: NaN }
tigers.lose(); // return => { win: 0, losses: 1 }

// example
function listCreator() {
  var list = [];
  return {
    addItem: function(item) {
      list.push(item);
      return list;
    },
    removeItem: function(itm) {
      list.splice(list.indexOf(item), 1);
      return list;
    },
    checkList: function() {
      return list;
    }
  };
}

var todoList = listCreator();
todoList.addItem("code"); // return => [ 'code' ]

var wishList = listCreator();
wishList.addItem("shopping"); // return => [ 'shopping' ]
wishList.addItem("food"); // return => => [ 'shopping', 'food' ]
