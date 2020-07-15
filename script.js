// javascript
let opponentCards = [];
let discardCards = [];
let playerCards = [];

const opponentDeck = document.getElementById(`opponent-deck`);
const discardPile = document.getElementById(`discard-pile`);
const playerDeck = document.getElementById(`player-deck`);
const opponentFace = document.getElementById(`opponent-face`);

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

console.log(discardCards);

// Shuffle array
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

console.log(discardCards);

for (let i = 0, c = discardCards.length; i < c; i++) {
  if (i % 2 === 0) {
    playerCards.push(discardCards[i]);
  } else if (i % 2 !== 0) {
    opponentCards.push(discardCards[i]);
  }
}

discardCards = [];

function playCard() {
  discardCards.push(playerCards[0]);
  playerCards.splice(0, 1);

  const currentCard = discardCards[discardCards.length - 1];
  let currentValue = currentCard.substring(0, 1);
  if (Number(currentValue)) {
    currentValue = Number(currentValue) + 1;
  }
  const suit = currentCard.substring(1, 2);
  const cardNumbers = document.getElementsByClassName(`card-number`);
  let suitSymbol;
  discardPile.classList.remove(`red`);
  for (let i = 0; i < 2; i++) {
    switch (suit) {
      case `H`:
        {
          discardPile.classList.add(`red`);
          cardNumbers[i].innerText = currentValue + "\n♥";
          suitSymbol = "♥";
        }
        break;
      case `D`:
        {
          discardPile.classList.add(`red`);
          cardNumbers[i].innerText = currentValue + "\n♦";
          suitSymbol = "♦";
        }
        break;
      case `S`:
        {
          cardNumbers[i].innerText = currentValue + "\n♠";
          suitSymbol = "♠";
        }
        break;
      case `C`:
        {
          cardNumbers[i].innerText = currentValue + "\n♣";
          suitSymbol = "♣";
        }
        break;
      default:
        console.error(`No recognizable suit found`);
    }
  }

  const cardArt = document.getElementsByClassName(`card-art`)[0];
  while (cardArt.children[0]) {
    cardArt.children[0].remove();
  }

  cardArt.style.flexFlow = null;

  if (Number(currentValue)) {
    for (let i = 0; i < currentValue; i++) {
      let suitSymbolContainer = document.createElement(`div`);
      suitSymbolContainer.textContent = suitSymbol;
      cardArt.append(suitSymbolContainer);
    }

    if (currentValue < 4) {
      cardArt.style.flexFlow = `column wrap`;
    }
  } else if (!Number(currentValue)) {
    switch (currentValue) {
      case `J`:
        suitSymbol = `🤵`;
        break;
      case `Q`:
        suitSymbol = `👸`;
        break;
      case `K`:
        suitSymbol = `🤴`;
        break;
      default:
    }

    let suitSymbolContainer = document.createElement(`div`);
    suitSymbolContainer.textContent = suitSymbol;
    suitSymbolContainer.style.fontSize = `6vh`;
    cardArt.append(suitSymbolContainer);

    if (currentValue !== `A`) {
      cardArt.style.flexFlow = `column wrap`;
      let flippedSuitSymbolContainer = document.createElement(`div`);
      flippedSuitSymbolContainer.textContent = suitSymbol;
      flippedSuitSymbolContainer.style.fontSize = `6vh`;
      flippedSuitSymbolContainer.style.transform = `rotate(180deg)`;
      cardArt.append(flippedSuitSymbolContainer);
    }
  }
}
