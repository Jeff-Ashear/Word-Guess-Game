//global variables related to game logic:
    var wins = 0
    var losses = 0
    var guessesLeft = 6
    var word = "";
    var words = "";
    var guessMeArray = [];
    var alphaSet = [];
    var userGuess = "";
    var remainingLtrs = 0


//global variables related to UI changes:
    //interface:
    var picBoxtext = document.getElementById("pBHeader");

//array of famous climbers:
    var words = [
        "tommy",
        "conrad",
        "margo",
        "chris",
        "brad",
        "hazel",
        "adam"
    ];

//function that picks a word from the array:
var word = words[Math.floor(Math.random() * words.length)];
console.log("The name is: ", word)


//fixed array of letters of the alphabet for the starting game state
var alphaLocked = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("alphaLocked: ", alphaLocked)


//initialize the starting game state:
function gameStart() {
    pBHeader.innerHTML = "Press the spacebar to start!";
    for (var i = 0; i < word.length; i++){
        remainingLtrs = word.length
        guessMeArray[i] = "_";
        console.log(guessMeArray);
        guessesLeft = 6;
        alphaSet = [];
        console.log("alphaLocked again: ", alphaLocked)
        console.log("alphaSet: ", alphaSet)
    }
}

gameStart();

//gameloop:
//user presses space to start the game
document.onkeyup = function(event) {
    console.log("My event: ", event)
        //check for the space bar to start the game.
    if (event.keyCode === 32) {
        //alert user the game has begun
        var picBoxtext = document.getElementById("pBHeader");
        pBHeader.innerHTML = "Can you guess the climber?";

        //show score
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;

        //show guesses remaining
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        //display the random name as blanks in the appropriate field when the game starts
        var status = document.getElementById("gameBlanks");
        status.innerHTML = (guessMeArray.join(" "));

        //store user guess as a variable
        var userGuess = event.key;
        console.log("user guess: ", userGuess);
   
    } else {
        //limit game input to letters only
        console.log("the key event is now: ", event)
        userGuess = event.key;
       if (event.keyCode > 64 && event.keyCode < 91) {
            console.log("A letter was pressed")  
            console.log("word: ", word)
            console.log("It's in the word: ", word.includes(userGuess))

            //compare the user guess to the word:
            if (word.includes(userGuess)) {
                remainingLtrs = remainingLtrs - 1;
                console.log("remaining letters: ", remainingLtrs)
                
                //push the user guess into the array of blanks
                let indices = [];
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === userGuess)
                    indices.push(i);
                    console.log("Indices: ", indices)
                }
                for (let i = 0; i < indices.length; i++) {
                    guessMeArray[indices[i]] = word[indicies[i]];
                }
                console.log("indices: ", indices)
                console.log("guessMeArray: ", guessMeAray)
                document.getElementById("gameBlanks").innerHTML = guessMeArray.join(" ");
                //if the user guess isn't in the word                
                
            // } else if (! alphaSet.includes(userGuess)) {
               
            //     console.log("This letter was already incorrectly guessed: ", userGuess)


            // } else {
            //     guessesLeft = guessesLeft - 1;
            //     console.log("guessesLeft: ", guessesLeft);

            //     //updates guesses remaining
            //     document.getElementById("guessesLeft").innerHTML = guessesLeft;
            //     document.getElementById("wrongLtrs").innerHTML += userGuess += ", ";

            //     // modifyable array of letters of the alphabet to filter user input
                
            //     alphaSet.push(userGuess);
                
            //     console.log("Filtered array: ", alphaSet)



            }
          

        } else {
            console.log("That's not a letter: ", userGuess)
            alert("Only letters please!")
        }
    }
    
}












//funtion that converts the word into blank spaces to be guessed and appends those blanks to the interface