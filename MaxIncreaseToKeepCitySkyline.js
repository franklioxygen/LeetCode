/**
 * 807. Max Increase to Keep City Skyline
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let res = 0;
  let max = 0;
  let col = [],
    row = [];
  for (i = 0; i < grid[0].length; i++) {
    for (j = 0; j < grid.length; j++) max = Math.max(max, grid[j][i]);
    col.push(max);
    max = 0;
  }
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) max = Math.max(max, grid[i][j]);
    row.push(max);
    max = 0;
  }
  for (j = 0; j < grid.length; j++) {
    for (i = 0; i < grid[0].length; i++) {
      res += (Math.min(row[j], col[i]) - grid[j][i]);
    }
  }
  return res;
};