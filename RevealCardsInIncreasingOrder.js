/**
 * 950. Reveal Cards In Increasing Order
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  let res = [];
  deck.sort((a, b) => {
    return a - b;
  }).reverse();
  res.push(deck[0]);
  deck.shift();
  while (deck.length > 0) {
    res = [deck[0]].concat(res[res.length - 1]).concat(res.splice(0, res.length - 1));
    deck.shift();
  }
  return res;
};