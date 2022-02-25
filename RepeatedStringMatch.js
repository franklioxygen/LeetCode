/**
 * 686. Repeated String Match
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  let repeat = (Math.ceil(B.length / A.length));
  let newA = A.repeat(Math.ceil(B.length / A.length));
  for (i = 0; i <= (2 * B.length) || i <= (2 * A.length); i++) {
    if (i + B.length > newA.length) {
      newA += A;
      repeat++;
    }
    if (newA.slice(i, i + B.length) == B) {
      return repeat;
    }
  }
  return -1;
};