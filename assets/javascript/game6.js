// ask user for input
var picBoxtext = document.getElementById("pBHeader");
pBHeader.innerHTML = "Press the spacebar to start!";

// some global variables
var wrongLetters = "";

// computer picks a word randomly
//list of possible words

var words = [
    "tommy",
    "conrad",
    "margo",
    "chris",
    "brad",
    "hazel",
    "adam"
];


//selects one of the possible words at random

var word = words[Math.floor(Math.random() * words.length)];
console.log(word)

//create an array of the same number of blank spaces as there are letters in the chosen word

var guessMeArray = [];
for (var i = 0; i < word.length; i++) {
    guessMeArray[i] = "_";
    console.log(guessMeArray);
}

//variable to track how many letters are left to be guessed 

var remainingLtrs = word.length;
console.log("remaining letters: ", remainingLtrs)

//variable to track how many attempts remain

var guessesLeft = 6;

//vars to track score
var wins = 0
var losses = 0

function gameStart() {
    word = words[Math.floor(Math.random() * words.length)];
    console.log("word again: ", word)
    for (var i = 0; i < word.length; i++) {
        guessMeArray[i] = "_";
    }
    remainingLtrs = word.length;
    status = document.getElementById("gameBlanks");
    status.innerHTML = (guessMeArray.join(" "));
}


//begin the game loop
// user presses a key to and the funtion starts

document.onkeyup = function(event) {
    console.log("my event: ", event)
        // check for space to start the game.
    if (event.keyCode === 32) {
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

        console.log("attempting to limit duplicates: ", wrongLetters.includes(userGuess))
    

        //limit game input to letters only
    } else if (event.keyCode <= 64 || event.keyCode >= 91) {
        alert("Please enter only letters, or the spacebar to start the game.")
    } else if (wrongLetters.includes(userGuess)) {
        console.log("This letter was already guessed: ", userGuess)
        alert("You've already incorrectly guessed this letter.")
    
    } else {
        console.log("the key event now is: ", event)
        userGuess = event.key;
        console.log("word: ", word)
        console.log("isInWord", word.includes(userGuess))
        if (word.includes(userGuess)) {
            remainingLtrs = remainingLtrs - 1;
            console.log("remaining letters: ", remainingLtrs)
            
            let indices = [];
            for (let i = 0; i < word.length; i++) {
                if (word[i] === userGuess)
                    indices.push(i);
                    
            }
            for (let i = 0; i < indices.length; i++) {
                guessMeArray[indices[i]] = word[indices[i]];
            }
            console.log("indices ", indices)
            console.log("guessMeArray", guessMeArray)
            document.getElementById("gameBlanks").innerHTML = guessMeArray.join(" ");
         



        } else {
            document.getElementById("wrongLtrs").innerHTML += userGuess += ", "
               
            guessesLeft = guessesLeft - 1;
            console.log("guessesLeft: ", guessesLeft);

            //update guesses remaining:
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            wrongLetters = wrongLetters.concat(userGuess);
            console.log("Wrong Letters: ", wrongLetters)


            if (guessesLeft <= 0) {
                if (confirm("You Lose... Try again?")) {
                    losses = losses + 1;
                    document.getElementById("losses").innerHTML = losses;
                    guessesLeft = 6;
                    console.log("guessesLeft: ", guessesLeft);
                    document.getElementById("guessesLeft").innerHTML = guessesLeft;
                }
            }
        }

        setTimeout(function() {
            if (word === guessMeArray.join("")) {
                wins = wins + 1;
                console.log("wins: " + wins);
                document.getElementById("wins").innerHTML = wins;
                if (confirm("You Win! Try again?")) {
                    guessesLeft = 6;
                    word = ("");
                    gameStart();
                }
            }
        }, 1000)
    }

};



/*
document.onkeyup = function(gameLoop) {
    if (gameLoop.keyCode > 64 && gameLoop.keyCode < 91) {
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
            console.log("USERGUESSS", userGuess)
            document.getElementById("wrongLtrs").innerHTML += userGuess += ", ";


            //loss conditions:
            if (guessesLeft === 0) {
                document.getElementById("pBHeader").innerHTML = "You Lose... Try Again!";

            }


        }

    }

}*/