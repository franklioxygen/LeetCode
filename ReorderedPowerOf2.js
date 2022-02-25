/**
 * 869. Reordered Power of 2
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
  let nMap = new Map();
  N = N.toString(10).split('');
  for (n of N)
    if (!nMap.has(n)) nMap.set(n, 1);
    else nMap.set(n, nMap.get(n) + 1);
  let num = parseInt(N.map(el => {
    return parseInt(el, 10);
  }).sort((a, b) => {
    return b - a;
  }).join(''), 10);
  let pow = 0;
  while (num > 1) {
    num /= 2;
    pow++;
  }
  while (pow >= 0) {
    let testMap = new Map();
    let testNum = Math.pow(2, pow).toString(10).split('');
    for (n of testNum)
      if (!testMap.has(n)) testMap.set(n, 1);
      else testMap.set(n, testMap.get(n) + 1);
    for (num of nMap)
      if (testMap.has(num[0]) && testMap.get(num[0]) == nMap.get(num[0])) testMap.delete(num[0]);
      else {
        testMap.set(false, 1);
        break;
      }
    if (testMap.size == 0) return true;
    pow--;
  }
  return false;
};