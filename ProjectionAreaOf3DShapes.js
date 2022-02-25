/**
 * 883. Projection Area of 3D Shapes
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let i, j;
  let maxX = 0;
  let maxY = 0;
  let sum = 0;

  if ((grid.length == 1) && (grid[0].length == 1)) return (2 * grid[0] + 1);
  for (j = 0; j < grid.length; j++) {
    for (i = 0; i < grid[0].length; i++) {
      if (grid[j][i] != 0) sum = sum + 1;
    }
  }
  for (j = 0; j < grid.length; j++) {
    maxX = grid[j][0];
    maxY = grid[0][j];
    for (i = 0; i < grid[0].length; i++) {
      if (maxX <= grid[j][i]) maxX = grid[j][i];
      if (maxY <= grid[i][j]) maxY = grid[i][j];
    }
    sum = sum + maxX + maxY;
  }
  return sum;
};