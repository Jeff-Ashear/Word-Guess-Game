
var words = [
    "tommy",
    "conrad",
    "margo",
    "chris",
    "brad",
    "hazel",
    "adam"
];

var wins = 0;
var losses = 0;
var totalGuess = 0;
var guessedLetters = [];
var matchedLetters = [];
var letterOfTheword = [];
var word = null;
var letterGuessed = null;


function startGame(){
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word)

    letterOfTheword = word.split("");
    builsWord();
    workOnUserGuess();
}
function builsWord(){
    var wordBuild = "";
    for(var i=0; i<letterOfTheword.length; i++){
        if(matchedLetters.indexOf(letterOfTheword[i]) !== -1){
            wordBuild += letterOfTheword[i]
        }
        else{
            wordBuild += "&nbsp;_&nbsp";
        }
    }
    document.getElementById("gameBlanks").innerHTML = wordBuild;

}
function workOnUserGuess(){
    totalGuess = letterOfTheword + 10;
    guessLeft =  totalGuess;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
}
startGame();

document.onkeyup = function(event){
    if(event.keycode >=49 && event.keycode <=90){
        letterGuessed = event.key.toLocaleLowerCase();
        updatePage(letterGuessed)
    }
}
function updatePage(letter){


}