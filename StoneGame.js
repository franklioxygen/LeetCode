/**
 * 877. Stone Game
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  piles.sort((a, b) => {
    return a - b;
  });
  let odd = 0;
  let even = 0;
  for (i = 0; i < piles.length; i++) {
    if (i % 2 != 0) odd += piles[i];
    else even += piles[i];
  }
  return odd > even;
};