/** 
 * 374. Guess Number Higher or Lower
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let split = function(begin,end) {
    let half = Math.ceil((begin+end)/2);
    switch (guess(half)) {
    case 1:
      return split(half,end);
    case -1:
      return split(begin,half);
    default:
      return half;
    }
  };
  return guess(1) === 0? 1: split(1, n);
};