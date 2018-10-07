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
      guess = guess.toLowerCase();
      if (this.gameState !== 'playing')  return;
      !this.lettersGuessed.includes(guess) && this.lettersGuessed.push(guess);
      !this.secretWord.includes(guess) && this.remainingGuesses--;
    }
    computeGameState(){
      if(this.remainingGuesses === 0) this.gameState = 'lost';
      if(this.secretWord.every((n) => this.lettersGuessed.includes(n))){
        this.gameState = 'won';
      }
    }

    getSecretWordPuzzle(){
      if(this.lettersGuessed.length === 0){
        let ans = this.secretWord.map(n => n !== ' ' ? '#' : ' ').join('');
        return ans;
      }
      const check = this.secretWord.filter(n => this.lettersGuessed.includes(n))
      const index = check.map(n => this.secretWord.indexOf(n));
      console.log(this.secretWord, this.lettersGuessed ,check, index);
    }
}

