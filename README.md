# Constructor-Word-Guess
 https://drive.google.com/file/d/17iAW-kF2zpsblBmdjLEudHOi_RW-ORgs/view?usp=sharing
This is a CLI based word game in Node-js, using two different constructors. The index.js runs the actual game with a dependency on
the constructor, word.js, which also has a dependency on the letter.js constructor. 
When the game is run in node, the user is prompted to enter a letter to try to guess the word, which starts with blanks.
If the letter is in the word, the word/underscore representation is shown with the letter revealed. 
If the letter is not in the word, the user is told "Sorry..." and given another chance to guess, 
with a total of 10 possible guesses.
