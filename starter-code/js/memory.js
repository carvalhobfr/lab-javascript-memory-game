class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // Add the rest of the properties here
  }

  shuffleCards() {

    Math.random(this.cards);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    else {
      return false
    };

  }

  isFinished() {
    // ...
  }
}
