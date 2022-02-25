/**
 * 762. Prime Number of Set Bits in Binary Representation
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let res = 0;
  let oneCount;
  for (i = 0; i <= R - L; i++)
    if (isPrime(count((i + L).toString(2)))) res++;
  return res;
};

function count(str) {
  let i;
  let res = 0;
  for (i = 0; i < str.length; i++)
    if (str[i] == 1) res++;
  return res;
}

function isPrime(value) {
  let i;
  for (i = 2; i < value; i++)
    if (value % i === 0) return false;
  return value > 1;
}