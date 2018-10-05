// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `
  +---+
  |   |
  O   |
 /|\\\  |
 / \\\  |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
 /    |
      |
      
=========`,
  `
  +---+
  |   |
  O   |
 /|\\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
];

class RopeDude {
    constructor(secwrd){  
      this.secretWord = secwrd.split('');
      this.remainingGuesses = 6;
      this.lettersGuessed = [];
      this.gameState = 'playing';
    }
    submitGuess(guess){
      if(!this.lettersGuessed.includes(guess)){
        this.lettersGuessed.push(guess);
        if(!this.secretWord.includes(guess)){
          this.remainingGuesses--;
        }
      }
    }
}

