/**
 * 942. DI String Match
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let pos = 1;
  let neg = -1;
  let output = [0];
  for (i = 0; i < S.length; i++) {
    if (S[i] == 'I') {
      output.push(pos);
      pos++;
    } else {
      output.push(neg);
      neg--;
    }
  }
  for (j = 0; j < output.length; j++) output[j] += Math.abs(neg + 1);
  return output;
};