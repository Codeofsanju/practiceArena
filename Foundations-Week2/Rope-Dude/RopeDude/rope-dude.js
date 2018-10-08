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
  constructor(secwrd) {
    this.secretWord = secwrd.split('');
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = 'playing';
  }
  submitGuess(guess) {
    guess = guess.toLowerCase();
    if (this.gameState !== 'playing') return;
    !this.lettersGuessed.includes(guess) && this.lettersGuessed.push(guess);
    !this.secretWord.includes(guess) && this.remainingGuesses--;
    this.computeGameState();
  }
  computeGameState() {
    if (this.remainingGuesses === 0) this.gameState = 'lost';
    if (this.secretWord.every(n => this.lettersGuessed.includes(n))) {
      this.gameState = 'won';
    }
  }

  getSecretWordPuzzle() {
    let ans = this.secretWord.map(n => (n !== ' ' ? '#' : ' '));
    let check = this.secretWord.filter(n => this.lettersGuessed.includes(n));
    for (let i = 0; i < check.length; i++) {
      for (let j = 0; j < this.secretWord.length; j++) {
        if (check[i] === this.secretWord[j]) {
          ans[j] = check[i];
        }
      }
    }
    return ans.join('');
  }

  getGameStateMessage() {
    if (this.gameState === 'playing') {
      return `There is a total of ${
        this.remainingGuesses
      } guesses remaining:\n${ASCIIART[this.remainingGuesses]}`;
    } else if (this.gameState === 'lost') {
      return `Game Over, the word was "${this.secretWord.join('')}":\n${
        ASCIIART[0]
      }`;
    } else if (this.gameState === 'won') {
      return `Winner Winner Chicken Dinner, you won!`;
    }
  }
}

const simulateRopeDude = () => {
  const game = new RopeDude('sanjeev');
  game.submitGuess('s');
  game.submitGuess('a');
  game.submitGuess('e');
  game.submitGuess('v');

  console.log(game.getSecretWordPuzzle());
  console.log(game.getGameStateMessage());
  return game.getGameStateMessage();
};
