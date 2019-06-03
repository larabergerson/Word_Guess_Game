// var welcome = "Welcome to the game!";
// alert("are you ready to play?");

// variables:

var gotCharacters = [
    "Jon",
    "Arya", 
    "Sansa", 
    "Tyrion", 
    "Cersei", 
    "Dany", 
    "Drogon"]

var outcome = true

var guess = gotCharacters[Math.floor(Math.random() * gotCharacters.length)]; 
console.log (Math.floor (Math.random() * gotCharacters.length));
console.log (guess);
console.log(guess.length);

var blanks = [];
for (var i = 0; i < guess.length; i++){
blanks.push("_");
}
console.log (blanks);

var answer = document.getElementById("word");
console.log (answer)
answer.innerHTML = blanks.join(" ");

// trying to get to the point where I understand what to do here. I want the 3 of available guesses left to decrement after the user releases the key. 
var guesses = 10
for (var i = 10; i >= 1; i--){
}
document.getElementById("left")

var left = document.getElementById("left");
left.innerHTML = guesses
    
// for (var j = 10; j > 0; j--){
//     document.getElementById("left");     
//     }
console.log (guesses);

// Letters guessed section: I want the doc to log the user input here. The letters chosen.I want to pull the index value to the html.

function myFunction(){
    var x = document.getElementById ("letters");
}
var lettersGuessed = " "
input 

var lettersRandom = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","Z"];

// Here I want to increment the # of wins by 1 if the user successfully guesses the character before his/her tries expires. if the user wins the value increments.
var win = " "
  
// Here I want to increment the value on the html by 1 if the user fails to discover the character name.
var lose
// var answers = [];
// for (var i=0; i < guess.length; i++){
//     ansewrs[i] = "_";
// }

// var remainingLetters = word.length;

// document.onkeyup = function(event) {

//     var userGuess = event.key;


// var userPicks = prompt("Guess a letter.");





