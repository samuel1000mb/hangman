# hangman

At the start of the game, a word is chosen from a list of words in the background. The word is then shown as a series of question marks.
Below the question marks, a series of icons (crosses) is shown which represent the amount of errors you can make as a player. The amount of errors you can make is equal to the amount of letters in the secret word.
Below that, a text is shown that indicates wether the game has started.
On the bottom the alphabet is show, showing a button for each letter in the alphabet.

When the player clicks on a letter in the alphabet, the letter-button is disabled. The game then checks whether the letter is present in the secret word. 

 - If yes, the letter is revealed on all places in the word. This means that, if you guessed a G and there are multiple G's in the word, they all get revealed.
 - If the letter is not present in the secret word, one of the error-icons get colored red. 

repeat this process until the game is finished.

The game finished when:
 - you have guessed all the letters of the secret word
 - you have made too many errors