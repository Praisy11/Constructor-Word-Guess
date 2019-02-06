/*Word.js: Contains a constructor, Word that depends on the Letter constructor. 
This is used to create an object representing the current word the user is attempting to guess. 
That means the constructor should define:

An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. This should call the function on each letter object
 (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument and calls the guess function on each letter object
 (the second function defined in Letter.js)*/

var Letter = require('./letter.js');
/*function testword (){
    myword = new Word("Test");
    myword.display();
    myword.letterGuess('e');
    myword.display();
    myword.letterGuess('t');
    myword.display();
    myword.letterGuess('a');
    myword.display();
   // myword.buildword();
}
testword(); 
*/
/*Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define*/
//this.constructorWord =
function Word(ans){
    this.tempArray=[];
   // console.log("Word start");
  //  console.log(ans);
    //this.buildword= function() {
        for (var i=0; i< ans.length; i++){
          //  console.log(i);
            var currLetter = new Letter (ans[i]);
           // console.log(ans[i]);
           //console.log("pushing");
            this.tempArray.push(currLetter);
         
   // }
   
   
    }
   // console.log("tempArray");
    //  console.log( this.tempArray);
   // return tempArray;
   this.display=function(){
    var showWord ="";
    for (var i=0;i<this.tempArray.length;i++){
      //  showWord+=" " ;  
    showWord+=this.tempArray[i].char();
   
}
return(showWord);
//console.log(showWord);
//console.log('\n===================================\n');
}
this.letterGuess=function(input){
    for (var i=0;i<this.tempArray.length;i++){
       this.tempArray[i].check(input)
    }
        
}
}

//this.ans=this.constructorWord(ans);


/*A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)*/


module.exports=Word;