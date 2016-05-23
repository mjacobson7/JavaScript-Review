var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
  function last(threeItems) {
    alert(threeItems[threeItems.length-1]);
  }

last(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
  for(var i = 0; i < evenArray.length; i++) {
    if(evenArray[i] % 2 !== 0) {
      evenArray.splice(i, 1);
      i--;
    }
  }


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'.
//Your job is to write a function that will get a random number, then loop through the array to see if that random number is
//in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

  function myFunc(randomNumber, randomArray) {
  	var chosenNumber = randomNumber();
  	for(var i = 0; i < randomArray.length; i++) {
  	if(chosenNumber === randomArray[i]) {
  		return true;
  		}
  	}
  	return false;
  }

  myFunc(getRandomArbitrary, randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this,
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
  second = first.slice(0,5);
  second.push(6, 7);



alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here

  function longest(sentence) {
    var string = sentence.split(" ");
    var longestWord = "";
    for(var i = 0; i < string.length; i++) {
      if(longestWord.length < string[i].length) {
        longestWord = string[i];
      }
    }
    return longestWord;
  }
longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
  function capitalize(myPoem) {
    var newPoem = myPoem.split(" ");
    for(var i = 0; i < myPoem.length; i++) {
      var currentWord = newPoem[i];
      var firstLetter = currentWord.charAt(0);
      var capital = firstLetter.toUpperCase;
    }
  }



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(myString) {
  var totalVowels = 0;
  for(var i = 0; i < myString.length; i++) {
    if(myString[i] === 'a' || myString[i] === 'e' || myString[i] === 'i' || myString[i] === 'o' || myString[i] === 'u') {
      totalVowels++;
    }
  }
  return totalVowels;
}

vowelCounter(theOdyssey);
t
