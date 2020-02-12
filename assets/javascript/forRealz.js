//goals for the app:
    //modularized functions that are called at the right times
    //asks user for input to start the game
    // picks a ranodm word from an array
    //shows blanks equal in number to letters in the word
    //accepts only a-z letters as input
    //accepts each letter only once
    //if a letter is guessed correctly all coresponding blanks are replaced with that letter
    //incorrectly guessed letters reduce number of guesses by on and are displayed in the appropirate field.
    //if all the letters are guessed correctly, win conditions are met:
        //wins are increased by one
        //a picture and brief description of the climber appears
        //user is prompted to try again, and if they wish the game restarts but the score persists.
    //if the guesses reach 0 before the word is built, loss conditions are met:
        //losses are increased by one
        //the user is prompted to try again, and if the wish the game restarts but the score persists.

//initial var's and arr's are defined

//gameStart function does the following:
    //picks a random number from a range equal to the length of the array of words, and uses that to pick a word
    //clears the guessed letters from the html and the array
    //set the number of guesses to six

//wordBuild function does the following:
    //prints a blank for each letter of the word

//guesses function does the following:
    //limits the input to letters only
    //replaces blanks with correctly guessed letters
    //adds incorrectly guessed letters to the display and subtracts a remaining guess

//win/loss function does the following:
    //checks to see if the word has been completed
        //if so it adds 1 to the wins
        //asks the user to play again
        //if so it calls the game start function
    //checks to see if the guesses remaining = 0
        //if so it adds 1 to the losses
        //asks the user to play again
        //if yes it calls the game start function

//initial variables and arrays:
var wrongLetters = "";
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var word = "";
var remainingLtrs = 0;
var picBoxText = document.getElementById("pBHeader");
var guessMeArray = [];

var words = [
    "tommy",
    "conrad",
    "margo",
    "chris",
    "brad",
    "hazel",
    "adam"
];

//function to start and restart the game:
function gameReset() {
    word = words[Math.floor(Math.random() * words.length)];
    console.log("The name is: ", word);
    guessesLeft = 6;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    pBHeader.innerHTML = "Press the spacebar to start!"
    document.getElementById("wrongLtrs").innerHTML = "";
    wrongLetters = "";
}
gameReset();

//try moving gameStart outside the document function, renaming it gameSetup, and then wrapping the document function in a gameStart function maybe?

//gamestart event and functions:
document.onkeyup = function(event) {
    console.log("My event", event);

    //spacebar starts teh game:
    if (event.keyCode === 32) {
        //fucntion starts the game:
        function gameStart() {
            document.getElementById("pBHeader").innerHTML = "Can you guess the climber?"
            //loop the word to generate blanks and print them
            for (i = 0; i < word.length; i++) {
                guessMeArray[i] = "_";
                console.log(guessMeArray);
            }
            var status = document.getElementById("gameBlanks");
            status.innerHTML = (guessMeArray.join(" "));
            //show current score
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("losses").innerHTML = losses;            
        }
        gameStart();

        //limit input to letters and handle guesses
        document.onkeyup = function(event) {
            var userGuess = event.key;
            if (event.keyCode > 64 && event.keyCode < 91) {
                console.log("Yup, that's a letter alright. ", userGuess)
                //check to see if the userGuess is in the word
                if (word.includes(userGuess)) {
                    console.log("The guess is in the word!")
                    remainingLtrs = remainingLtrs - 1;
                    //replace the corresponding blanks with correctly guessed letter
                    let indices = [];
                    for (i = 0; i < word.length; i++) {
                        if (word[i] === userGuess)
                        indices.push(i);
                    }
                    for (i = 0; i < indices.length; i++) {
                        guessMeArray[indices[i]] = word[indices[i]];
                    }
                    console.log("indices: ", indices);
                    console.log("guessMeArray: ", guessMeArray);
                    document.getElementById("gameBlanks").innerHTML = guessMeArray.join(" ");
                } else if (wrongLetters.includes(userGuess)) {
                    console.log("Already guessed: ", userGuess)
                    alert("You've already tried the letter " + userGuess)
                } else {
                    guessesLeft = guessesLeft - 1;
                    document.getElementById("guessesLeft").innerHTML = guessesLeft;
                    wrongLetters = wrongLetters.concat(userGuess);
                    console.log("Wrong Lettes: ", wrongLetters)
                    document.getElementById("wrongLtrs").innerHTML += userGuess += ", ";
                    
                    if (guessesLeft <= 0) {
                        losses = losses + 1
                        document.getElementById("losses").innerHTML = losses
                        if (confirm("Better luck next time.  Try again?")) {
                            console.log("restart")
                            gameReset();

                        }
                    }
                }


            } else {
                console.log("Not a letter.")
                alert("Please enter only letters.")
            }

        }
    }
}


