/* Declare and Define the functions here that will make the function calls below work properly */

function first(names, myFunc) {
  return myFunc(names[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function last(names, myFunc) {
  myFunc(names[names.length-1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
function contains(checkName, myArr, myFunction) {
  for(var i = 0; i < myArr.length; i++) {
    if(checkName === myArr[i]) {
      return myFunction(true);
    } else {
      return myFunction(false);
    }
  }
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var newArray = [];

function map(theArray, cb) {
  for(var i = 0; i < theArray.length; i++) {
    var newNum = cb(theArray[i]);
    newArray.push(newNum);
  }
  return newArray;
}

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var uniqArr = [];

function uniq(theArr, theFunc) {
  theArr.sort();
  for(var i = 0; i < theArr.length; i++) {
    if(theArr[i] !== theArr[i + 1]) {
      uniqArr.push(theArr[i]);
    }
  }
  return theFunc(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function each(arr, theCallback) {
  for(var i = 0; i < arr.length; i++) {
    theCallback(arr[i], i);
  }
  return theCallback;
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function getUserById(userId, users, thisCallback) {
  for(var i = 0; i < users.length; i++) {
    if(userId === users[i].id) {
      thisCallback(users[i]);
    }
  }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function find(numArr, truthChecker) {
  for(var i = 0; i < numArr.length; i++) {
    if(truthChecker(numArr[i]) === true) {
      return numArr[i];
    }
  }
}


//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){
  return num % 2 == 0; //should return 2
})
