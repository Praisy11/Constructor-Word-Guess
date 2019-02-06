var inquirer = require("inquirer");

var Word = require("./word.js");
var colors=require("colors");

var guessesLeft = 10;

var guessesSoFar = [];
var wordList = ['dora', 'caillou', 'octanauts', 'barney','Arthur','PJMasks'];

var randomWord;
var myword;

console.log ('====================================='.yellow);
console.log("\n Welcome to the word guess game\n".cyan);
console.log( "\n Hint:".cyan + "Kids TV show".cyan);
console.log ('======================================'.yellow);


    var random= (Math.floor(Math.random() * wordList.length));
   // console.log(random);
    randomWord=wordList[random];
    myword= new Word (randomWord);
    //var wordlen = 
    console.log("It is a "+randomWord.length+" letter word") ;
/*
function removespace (instring) {
    var outstring;
    
    for (var j=0;j<instring.length;j++) {
    if (instring[j]!=" ") {
        outstring+=instring[j];
    }
    
    }
    return(outstring);
} */
function Play(){
  

    var userGuess=myword.display();
   // console.log("Random  "+randomWord);
    console.log(userGuess);
    if((guessesLeft>0)&&(randomWord!= userGuess ))
    {
      guessesLeft--;
      inquirer.prompt([{
      type: "input",
      name :"guess",
      message:"Guess a Letter"
 
    }]).then(function(response){
    var result  = response.guess;
    console.log (result);
    console.log(myword.display())
    console.log('====================================== '.yellow);
   //if (guessesLeft >0) {
    myword.letterGuess(result);
    Play();
    //console.log(myword.display());
    
});
}
else if(randomWord===userGuess)
{
    console.log("Correct");
    inquirer.prompt([{
        type: "confirm",
        name :"continue",
        message:"Do you want to play again? :"
    
      }]).then(function(response){
          //console.log(response.continue);
          if (response.continue) {
            guessesLeft=10;
            random= (Math.floor(Math.random() * wordList.length));
           // console.log(random);
            randomWord=wordList[random];
            console.log("It is a "+randomWord.length+" letter word") ;
             myword= new Word (randomWord);
             Play();
          }
          else 
          {console.log("Bye!!..See you later")}
      
      })
}
else{
    console.log("Try again!");
}
}


Play();