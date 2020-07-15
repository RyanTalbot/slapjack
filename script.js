let opponentCards = [];
let discardCards = [];
let playerCards = [];

for (let i = 0; i < 4; i++) {
  let suit;
  // Hearts, Spades, Diamonds, and Clubs
  switch (i) {
    case 0:
      suit = `H`;
      break;
    case 1:
      suit = `S`;
      break;
    case 2:
      suit = `D`;
      break;
    default:
      suit = `C`;
  }

  // Create Each Card
  for (let x = 0; x < 13; x++) {
    switch (x) {
      case 0:
        discardCards.push(`A` + suit);
        break;
      case 10:
        discardCards.push(`J` + suit);
        break;
      case 11:
        discardCards.push(`Q` + suit);
        break;
      case 12:
        discardCards.push(`K` + suit);
        break;
      default:
        discardCards.push(x + suit);
    }
  }
}

function shuffle(deck) {
  let currentCard = deck.length;
  let temporaryCard;
  let randomCard;

  while (0 !== currentCard) {
    // Pick a card
    randomCard = Math.floor(Math.random() * currentCard);
    currentCard -= 1;

    // Shuffle
    temporaryCard = deck[currentCard];
    deck[currentCard] = deck[randomCard];
    deck[randomCard] = temporaryCard;
  }
  return deck;
}

discardCards = shuffle(discardCards);

for (let i = 0, c = discardCards.length; i < c; i++) {
  if (i % 2 === 0) {
    playerCards.push(discardCards[i]);
  } else if (i % 2 !== 0) {
    opponentCards.push(discardCards[i]);
  }
}

discardCards = [];
