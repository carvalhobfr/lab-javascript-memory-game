class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // Add the rest of the properties here
  }

  shuffleCards() {

    const shuffleCardsFY = cards => {
      let a = cards.length;
      while (a !== 0) {
        const b = Math.floor(Math.random() * a);
        a--;
        let c = cards[a];
        cards[a] = cards[b];
        cards[b] = c;
      }
      return cards;
    };
    shuffleCardsFY(this.cards);
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

  };

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
