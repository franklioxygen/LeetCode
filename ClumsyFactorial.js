/**
 * 1006. Clumsy Factorial
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  if (N == 3) return 6;
  if (N == 2) return 2;
  if (N == 1) return 1;
  let res = 0;
  for (i = N; i >= 1; i = i - 4) {
    if (i == N) pos = 1;
    else pos = -1;
    switch (i) {
    case 3:
      res += -6;
      break;
    case 2:
      res += -2;
      break;
    case 1:
      res += -1;
      break;
    default:
      res = res + pos * (Math.floor(i * (i - 1) / (i - 2))) + (i - 3);
      break;
    }
  }
  return res;
};