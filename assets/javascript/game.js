$(document).ready(function() {

})

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0
var losses = 0
var guessesLeft = 9
var userGuess = [];
var guess

for (var i = 0; i < 8; i++) {

    userGuess = prompt("What's your guess?");

    userGuess.push(guess);
  }



//You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

//Guess what letter I'm thinking of    
    
//Wins: (# of times the user has guessed the letter correctly)

//Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

//Guesses Left: (# of guesses left. This will update)

//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
    
//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
