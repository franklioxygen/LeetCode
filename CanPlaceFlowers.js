/**
 * 605. Can Place Flowers
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let res = 0;
  for (i = 0; i < flowerbed.length; i++)
    if (flowerbed[i] == 1) {
      if (i != 0) flowerbed[i - 1] = 1;
      if (i != flowerbed.length - 1) {
        flowerbed[i + 1] = 1;
        i++;
      }
    }
  flowerbed = flowerbed.join('').replace(/1+/g, ',').split(',').filter(Boolean);
  for (i = 0; i < flowerbed.length; i++) res = res + Math.ceil(flowerbed[i].length / 2);
  return res >= n;
};