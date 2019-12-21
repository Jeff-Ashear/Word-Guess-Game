// ask user for input
var picBoxtext = document.getElementById("pBHeader");
pBHeader.innerHTML = "Press any key to start!";

// when input is recieved, start the game






// computer picks a word randomly
//list of possible words

var words = [
    "conrad",
    "margot",
    "chris",
    "brad",
    "hazel",
];


//selects one of the possible words at random

var word = words[Math.floor(Math.random()) * words.length];
console.log(word)

//create an array of the same number of blank spaces as there are letters in the chosen word

var guessMeArray = [];
for (var i = 0; i < word.length; i++) {
    guessMeArray[i] = "_";
    console.log(guessMeArray);
}

//variable to track how many letters are left to be guessed 

// var remainingLtrs = word.length;

//variable to track how many attempts remain

var guessesLeft = 15;

//vars to track score
var wins = 0
var losses = 0


//begin the game loop
// user presses a key to and the funtion starts

document.onkeyup = function(event) {

    //alert user game is running

    var picBoxtext = document.getElementById("pBHeader");
    pBHeader.innerHTML = "Can you guess the climber?";

    //show score on start
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

    //Show guesses remaining on start:
    document.getElementById("guessesLeft").innerHTML = guessesLeft;




    //user's guess is stored as a variable.
    // while (remainingLtrs > 0 && guessesLeft > 0) {

    var userGuess = event.key;
    console.log(userGuess);

    //display the random name as blanks in the appropriate field when the game starts

    var status = document.getElementById("gameBlanks");
    // status.innerHTML = (word);
    status.innerHTML = (guessMeArray.join(" "));

    //check if userGuess matches a character in the "word" string

    var isLetter = word.includes(userGuess);
    if (isLetter === true) {
        console.log("ture");
        var letterPosition = word.indexOf(userGuess);
        console.log(letterPosition);

        //a test to see if I  can change the blanks into the word
        document.getElementById("gameBlanks").innerHTML = word;

        //trying to replace only one blank with a correct guess:

        // function replacer() {
        //     var strScan = document.getElementById("gameBlanks").innerHTML;
        //     var strReplacer = strScan.replace(letterPosition, userGuess);
        //     document.getElementById("gameBlanks").innerHTML = strReplacer;
        // }


        //tyring to update the score:
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;



    } else {
        console.log("false")
            //count and display losses
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;

        //track and display remaining guesses
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        //track and display letters already guessed incorrectly
        document.getElementById("wrongLtrs").innerHTML += userGuess += ", ";


        //loss conditions:
        if (guessesLeft === 0) {
            document.getElementById("pBHeader").innerHTML = "You Lose... Try Again!";

        }

    };

    // if (userGuess) = word.includes


    //}

};



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