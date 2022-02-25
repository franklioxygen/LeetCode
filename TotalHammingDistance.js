/**
 * 477. Total Hamming Distance
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  var res = 0;
  for (var i = 0; i < 32; i++) {
    var one = 0;
    for (num of nums) one += num >> i & 1;
    res += one * (nums.length - one);
  }
  return res;
};