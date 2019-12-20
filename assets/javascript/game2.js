// ask user for input
var picBoxtext = document.getElementById("pBHeader");
pBHeader.innerHTML = "Press any key to start!";

// when input is recieved, start the game

document.getElementById("pBHeader").onkeyup = function() { gameLoop() };

function gameLoop() {
    var picBoxtext = document.getElementById("pBHeader");
    pBHeader.innerHTML = "Can you guess the climber?";
}




// computer picks a word randomly
//computer displays blanks equal to the number of letters in the word
//computer listens for letters to be pressed


//computer checks to see if any more letters neeed to be guessed?
//when a letter is pressed:
//computer checks to see if it matches a letter in the word
//computer prevents that letter from being used again
//if it does match:
//the matching blank is converted to display that letter
//score goes up by one
//if it doesn't match:
//the letter pressed is displayed in the guessed letters
//number of guesses is reduced by 1