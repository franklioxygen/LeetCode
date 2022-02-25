/**
 * 866. Prime Palindrome
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
  let paliN = 0;
  if (N >= 8 && N <= 11) return 11;
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };
  for (i = 1; i < 100000; i++) {
    paliN = parseInt((i.toString() + i.toString().split('').reverse().join('').substring(1)), 10);
    if (paliN >= N && isPrime(paliN)) return paliN;
  }
};