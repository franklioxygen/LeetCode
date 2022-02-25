/**
 * 537. Complex Number Multiplication
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  let realaPos, realbPos;
  for (i = 1; i < a.length; i++)
    if (isNaN(a[i])) {
      realaPos = i;
      break;
    }
  for (i = 1; i < b.length; i++)
    if (isNaN(b[i])) {
      realbPos = i;
      break;
    }
  let reala = parseInt(a.slice(0, realaPos), 10);
  let realb = parseInt(b.slice(0, realbPos), 10);
  let imaga = parseInt(a.slice(realaPos + 1, a.length - 1), 10);
  let imagb = parseInt(b.slice(realbPos + 1, b.length - 1), 10);
  let resReal = reala * realb - imaga * imagb;
  let resImag = reala * imagb + realb * imaga;
  return resReal.toString(10) + '+' + resImag.toString(10) + 'i';
};