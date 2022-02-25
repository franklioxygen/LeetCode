/**
 * 717. 1-bit and 2-bit Characters
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let ones = 0;
  for (i = bits.length - 2; i >= 0 && bits[i] == 1; i--) ones++;
  return ones % 2 ? false : true;
};