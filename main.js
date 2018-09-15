'use strict';

var userName = '';

while(!userName) {
  userName = prompt('What is your name?');
}

alert('Hello ' + userName + '! We are going to play yes or no game. Please answer yes or no to each of the following questions:');

var Q1 = prompt('Is Aaron 6 ft tall?');
var Q2 = prompt('Is Aaron from Seattle?');
var Q3 = prompt('Does Aaron love Weat Seattle?');
var Q4 = prompt('Is Aaron\'s hair brown?');
var Q5 = prompt('Has Aaron lived in Alaska?');

var min = Math.ceil(1);
var max = Math.floor(10);
var randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
// random number from MDN docs
console.log(randomNumber);

var maxAttempts = 4;

while (maxAttempts > 0) {
  var Q6 = prompt('What is my fav number?');
  maxAttempts--;
  if (Q6 < randomNumber) {
    alert('Too low, try again. ' + maxAttempts + ' attempts remaining.');
  } else if (Q6 > randomNumber) {
    alert('Too high, try again. ' + maxAttempts + ' attempts remaining.');
  } else {
    alert('Good job, you got it right!');
    break;
  }
}


var states = ['michigan', 'ohio', 'new york', 'washington'];
maxAttempts = 6;
while (maxAttempts > 0) {
  var Q7 = prompt('Guess a state I\'ve lived in.');
  maxAttempts--;
  if (states.includes(Q7)){
    alert('Good job! I have lived there!');
    break;
  } else {
    maxAttempts--;
    alert('Your guess was wrong, try again. ' + maxAttempts + ' attempts remaining.');
  }
}

