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
    document.getElementById("pBHeader").innerHTML = "Press the spacebar to start!";
    document.getElementById("wrongLtrs").innerHTML = "";
    wrongLetters = "";
    guessMeArray = [];
    document.getElementById("gameBlanks").innerHTML = "";
    document.getElementById("pic").src="assets/images/QuestionMark2.jpg"
    document.getElementById("climberBio").innerText = "";
}
gameReset();

//try moving gameStart outside the document function, renaming it gameSetup, and then wrapping the document function in a gameStart function maybe?

//gamestart event and functions:
function gameStart() { 
    document.onkeyup = function(event) {
        console.log("My event", event);

        //spacebar starts teh game:
        if (event.keyCode === 32) {
            //fucntion starts the game:
            function gameSetup() {
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
                if (word === "tommy") {
                    document.getElementById('pic').src="../images/tommy.jpg"
                } else if (word === "conrad") {
                    document.getElementById('pic').src="../images/conrad.jpg"
                } else if (word === "margo") {
                    document.getElementById('pic').src="../images/margo.png"
                } else if (word === "chris") {
                    document.getElementById('pic').src="../images/chris.jpg"
                } else if (word === "brad") {
                    document.getElementById('pic').src="../images/brad.jpg"
                } else if (word === "hazel") {
                    document.getElementById('pic').src="../images/hazel2.jpg"
                } else if (word === "adam") {
                   document.getElementById('pic').src="../images/adam.jpg" 
                }
            }
            gameSetup();

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
                                gameStart();
                            }
                        }
                    }   
                } else {
                    console.log("Not a letter.")
                    alert("Please enter only letters.")
                }
                //win conditions funtion
                
                
                
                if (word === guessMeArray.join("")) {
                    if (word === "tommy") {
                        document.getElementById("climberBio").innerText = "Tommy Caldwell, from Estes Park Colorado, is a master of hard, risky traditional free climbing, and big-wall free climbing.  He made first free ascents of multiple routs on El Capitan in Yosemite, most notably, the first free ascent of the Dawn Wall.  At the time the 19 day ascent was considered by some the most difficult successful rock climb in history.  He was the first to send Flex Luthor, a 5.15a route at the Fortress of Solitude in Colorado.  Interestingly, he is missing much of his left index finger."
                    } else if (word === "conrad") {
                        document.getElementById("climberBio").innerText = "Conrad Anker, from Bozeman Montana, is a world-class climber and mountaineer.  His list of first ascents is long and storied.  Most notably perhaps is his first ascent of the Shark's Fin route on Meru Peak; one of the most difficult climbs ever accomplished by the human species.  He also discovered and recovered the body of Sir Edmund Hillary on Everest, as leader of the expedition sent to seach for it."
                    
                    } else if (word === "margo") {
                        document.getElementById("climberBio").innerText = "Margo Hayes, from Boulder Colorado, specializes in incredibly difficult sport climbing.  In 2016, she won both the Bouldering and Lead Climbing events at the World Youth Championships in Guangzhou.  On February 26, 2017, Hayes became the first woman ever to climb a route graded at 5.15a.  82 people who have ever lived have manged to climb a 5.15a route.  This picture of her is from the moment she touched ground after accomplishing this monumental achievement."
                    } else if (word === "chris") {
                        document.getElementById("climberBio").innerText = "Chris Sharma, born in Sanat Cruz California, is known for super challanging sport climbing, bouldering, and deep-water soloing.  For quite some time he was harder routes than anyone else in the world.  He was the first climber ever to redpoint a route graded 5.15b and the second to climb both 5.15a and 5.15c routes.  He has bolted and first ascended many of the most difficult routes in Catalonio region of Spain near his current residence in Barcelona.  He opened a gym there and is currently designing what will be the worlds larges climbing gym in Mardrid."
                    } else if (word === "brad") {
                        document.getElementById("climberBio").innerText = "Brad Gobright was born in Orange County, California and lived for many years in Boulder Colorado.  In contrast to the other climbers featured here, he never really had much of a carreer.  He lived in his car working odd jobs all winter so he could climb in the spring, summer and fall for most of his adult life.   He is know for free-soloing some of the most difficult, dangerous routes in the world in locations like El Dorado Canyon, El Potrero Chico, and Yosemite.  Amusingly, his free solos have made Alex Honnold (the most famous free soloist to date) genuinely uncomfortable.  Sadly, he died in a repelling accident in Potrero on November 27, 2019."
                    }   else if (word === "hazel") {
                        document.getElementById("climberBio").innerText = "Hazel Findlay, born in Pembrokeshire England, is known for sending extremely difficult, highly sketchy trad routes.  She was the first female british climber to trad climb 5.14b.  She's made many first female ascents all over the globe.  Climbing magazine gave her their Golden Piton award for trad climbing in 2013.  She began climbing at the age of seven with her father and subsiquently spent several years winning indoor climbing comps.  Eventually she gave up competitive climbing to focus on trad."
                    } else if (word === "adam") {
                        document.getElementById("climberBio").innerText = "Adam Ondra, from Brno in the Czech Republic, specializes in extremely difficult lead climbing and bouldering; and is the only male ever to have won World Championship titles in both disciplines in the same year(2014), as well as both World Cup titles (though in different years).  He climbed his first route graded 5.14d at age 13.  As of November 2018, Ondra had climbed 1,550 routes graded between 5.13b and 5.15d.  He is the frist climber ever to have redpointed a routes graded 5.15c as well as 5.15d.  He is also the first comber to flash a 5.15a.  He may be the climber with the largest number of the hardest known routes in the world in the bag.  As of January of 2020, Ondra is the only person who has ever lived to climb a route graded 5.15d."
                    }
                }
                
                setTimeout(function() {
                    if (word === guessMeArray.join("")) {
                        wins = wins + 1;
                        document.getElementById("wins").innerHTML = wins;
                        if(confirm("You win! Try again?")) {
                            gameReset();
                            // gameSetup();
                            gameStart();
                        }
                    }
                }, 1000);
            }   
        }
    }    
}
gameStart();
