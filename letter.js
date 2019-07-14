let Letter = function (letter) {
    this.letter = letter;
    this.guessed = false;


    this.displayletter = function () {
        if (this.guessed) {
            return this.letter + " ";
        }
        else {
            return "_";
        }
    }

    this.checkGuess = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;