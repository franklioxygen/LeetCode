/**
 * 914. X of a Kind in a Deck of Cards
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length <= 1) return false;
  let mDeck = new Map();
  let cardNums = [];
  let min = 0;
  let divs = [];
  for (i = 0; i < deck.length; i++) {
    if (!mDeck.has(deck[i])) mDeck.set(deck[i], 1);
    else mDeck.set(deck[i], mDeck.get(deck[i]) + 1);
  }
  for (i = 0; i < Array.from(mDeck).length; i++) cardNums.push(Array.from(mDeck)[i][1]);
  cardNums.sort((a, b) => {
    return a - b;
  });
  min = Math.min(...cardNums);
  if (min == 1) return false;
  for (i = 2; i <= min; i++)
    if (min % i == 0) divs.push(i);
  for (j = 0; j < divs.length; j++) {
    for (i = 0; i < cardNums.length; i++) {
      if (cardNums[i] % divs[j] != 0) {
        if (i == cardNums.length - 1 && j == divs.length - 1) return false;
        else break;
      }
      if (i == cardNums.length - 1) return true;
    }
  }
  return false;
};