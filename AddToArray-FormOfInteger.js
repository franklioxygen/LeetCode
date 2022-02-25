/**
 * 989. Add to Array-Form of Integer
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let res = [];
  let add = 0;
  let carry = 0;
  K = K.toString(10).split('');
  while (A.length != 0 || K.length != 0) {
    let aNum = A.length != 0 ? parseInt(A.pop(), 10) : 0;
    let kNum = K.length != 0 ? parseInt(K.pop(), 10) : 0;
    add = aNum + kNum + carry;
    carry = Math.floor(add / 10);
    add = add % 10;
    res.unshift(add);
  }
  if (carry == 1) res.unshift(1);
  return res;
};