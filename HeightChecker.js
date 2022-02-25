/**
 * 1051. Height Checker
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let res = 0;
  let ordered = JSON.parse(JSON.stringify(heights)).sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < heights.length; i++)
    if (heights[i] != ordered[i]) res++;
  return res;
};