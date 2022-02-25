/**
 * 412. Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = [];

  for (i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      res.push('FizzBuzz');
      continue;
    }
    if (i % 3 == 0) {
      res.push('Fizz');
      continue;
    }
    if (i % 5 == 0) {
      res.push('Buzz');
      continue;
    } else res.push(i.toString());
  }
  return res;
};