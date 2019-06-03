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


var guessesLeft: 10;
var i;
for (var i=10; i > 10; i--) {
    getElementById("left");
    
}
// if the numbGuesses is greater than 0 then decrement from 10 until you get to 0.



// array for letter guessed
var lettersGuessed = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","Z"];

var lettersRandom = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","Z"];


  


// var answers = [];
// for (var i=0; i < guess.length; i++){
//     ansewrs[i] = "_";
// }

// var remainingLetters = word.length;

// document.onkeyup = function(event) {

//     var userGuess = event.key;


// var userPicks = prompt("Guess a letter.");





