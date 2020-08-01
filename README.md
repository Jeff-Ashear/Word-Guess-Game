# Thank you for looking at Climber Hangman!
A word guess game to demonstrate facility with array sorting and modification.

My portfolio:

		https://tinyurl.com/jeff-ashear-portfolio


*Please note:

	 that there is a footer containing a link to a cheat sheet for those who are interested in the assessing the  function of the code and not interested in the climbing nerdisms.  If you are interested in the climbing nerdisms, but don’t know about climbing, there are also brief descriptions of the terms and concepts that are referenced in the reward text.

Relevant links:
		
		Deployed project:
		https://tinyurl.com/climber-guess

		Code repo:
		https://tinyurl.com/climber-guess-repo


	

![Welcome](./assets/images/Wordguess.JPG)

1. Purpose for this app:
	This app is a simple hangman game, intended to demonstrate facility with array scanning and character replacement, as well as how to filter user input.


2. How the app is organized:

		The entire game happens on the index.html page.  A cheat sheet and some climbing vocab definitions are located on the cheatSheet.html page.
		All the game logic happens in gameLogic.js.

		Upon page load, the DOM waits for the user to press the space bar through an onKeyup event function, checked with an if statement.

		Once the game begins, a word is chosen at random from the “words” array.  The chosen climber’s name is then looped, and a new array is created with an underscore for each letter in the string.  The underscores are displayed on the page with a picture of the climber who’s name was picked.

		If there are guesses remaining, and there are underscores that haven’t been replaced in the new array (explanation to follow), then the DOM will listen for onKeyup events and filter for only letters a-z.

		If the letter guessed is in the word:

			The user’s guess is replaces any underscore in the underscore array with the guessed letter at the same indices at that position in the string of the chosen word.
			The view is updated with the letters which replaced the underscore.
			The filter will now prevent that letter from being guessed again.

		If the letter guess is not in the word:

			The number of guesses remaining is reduced by 1.
			The incorrect letter guessed is added to a new array, and the array is displayed on the screen.
			The filter for keys pressed will now prevent that letter from being guessed again.

		If the number of remaining guesses reaches 0, the game ends, losses is increased by one, and the filter begins listening for the space bar to reset the game.

		If the array of underscores comes to match the string:
			
			Wins is increased by 1.
			A reward screen appears with a brief bio of the climber who’s name was guessed. 
			The game then begins listening for the spacebar again to reset and choose a new word.

3.  Instructions for using this app:
Download or clone the repo from the link above or in section 5.
Open the file called index.html in your code editor.
Start the live server using the methods employed by your code editor.
You shouldn’t need to run any npm installations.
You may also simply use the link to the deployed site above or in section 5.
	

4. Link to a video of the app in use is coming soon!

5. Link to the deployed version of the app:
	Relevant links:
		
		Deployed project:
		https://tinyurl.com/climber-guess

		Code repo:
		https://tinyurl.com/climber-guess-repo


6. Technologies used in creating this app:
GitHub is used to store the repo, as well as host the deployed version.
Basic html is used to display the page
Javascript was used for game logic:
document.onKeyup events handle user input.
If, else if, else statements manage the gamestate by calling basic functions as the statements resolve.
document.getElementById statements update the view to match the gamestate to show feedback scoring.
Bootstrap used to make the page responsive and for most styling.
CSS used for some styling details.
	


7. This app was developed by Jeff Ashear.

