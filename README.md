# Thank you for looking at Climber Hangman!
A word guess game to demonstrate facility with array sorting and modification.

My portfolio:

		https://tinyurl.com/jeff-ashear-portfolio


*Please note:

	 that there is a footer containing a link to a cheat sheet for those who are interested in the assessing the  function of the code and not interested in the climbing nerdisms.  If you are interested in the climbing nerdisms, but don’t know about climbing, there are also brief descriptions of the terms and concepts that are referenced in the reward text.

Relevant links:

	

![Welcome](./assets/images/Wordguess.JPG)

	This assignment was very difficult for me to get all the pieces that I wanted to function together without breaking each other.  After multiple complete re-codings, I arrived at the following goals for the app:
-Modularized functions that work independently and can be called at the right points in in the game-state.

-Asks the user for input to start the game.

-Shows dynamically generated blanks equal to the number of letters in the word.

-Accepts only letters A-Z as input once the game is running until it finishes.

-Accepts each letter only once.

-If a letter is guessed correctly all corresponding blanks are dynamically replaced with that letter.

-If all the letters are guessed correctly before the guess limit reaches 0, win conditions are met:
	-user is alerted and congratulated
	-wins are increased by 1.
	-a picture and brief description of the climber appears.
	-the user is prompted to try again
	-if the user tries again the game restarts but the score persists.

-If the guesses reach 0 before the word is built, loss conditions are met
	-user is alerted and chastized. (just kidding)
-losses are increased by 1.
	-the user is prompted to try again
	-if the user tries again the game restarts but the score persists.

-Dynamic reward feedback
	-Display a picture of the climber when that climber’s name is chosen at random.
	-If the round is won, display a brief bio of that climber.
	-Clear the text and re-display the question mark image when a new round starts.


I will try the following solution:
	-A game start function doing the following:
		-picks a word  by selecting a random number from a range equal to the number of available words in an array.
		-clears the guessed letters from the html and the array tracking incorrect guesses
		-sets the number of remaining guesses.

	-A function to build the word in the html by displaying blanks for each letter

	-a function that handles guess by doing the following:
		-limits the input to letters only
	-replaces blanks with correctly guessed letters
	-adds incorrectly guessed letters to the display and subtracts a remaining guess.

	-A function which checks win/loss conditions by doing the following
		-checks to see if the word has been completed
		-checks to see if the guesses remaining = 0
		-restarts the game and sends appropriate prompts
		--updates the score.

	-Calling these functions at the appropriate times, and declaring variables globally if scope problems emerge. 
	



The above solutions eventually worked after a great deal of trial and error.  After completing this assignment, I realize that the major challenges I had were about not being aware of the syntax necessary to build the logic.  
