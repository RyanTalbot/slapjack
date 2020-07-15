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
