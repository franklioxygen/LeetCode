/**
 * 492. Construct the Rectangle
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let w = Math.floor(Math.sqrt(area));
  while (w > 0) {
    if (area % w == 0) return [area / w, w];
    w--;
  }
};