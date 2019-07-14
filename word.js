let Letter = require('./Letter');

let Word = function(word) {
    this.lettersArr = [];
    
    for(let i=0; i < word.length; i++){
        if(word.charAt(i) === " "){
            this.lettersArr.push(" ");
        }
        else{
            this.lettersArr.push(new Letter(word.charAt(i)));
        };
    };
    this.createString = function(){
        let wordString = "";

        this.lettersArr.forEach(function(element){
           if(element === " "){
               wordString += "  ";
           }
           else{
               wordString += this.displayLetter();
           }
        });
        return wordString;
    }
    this.checkGuessWord = function(letterGuess){
        this.lettersArr.forEach(function(element){
            
            if(element.letter !== undefined){
                element.checkGuess(letterGuess);
            }
        });
    };

}

module.exports = Word;