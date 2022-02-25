/**
 * 695. Max Area of Island
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let res = 0;
  let area = 0;
  let change = (grid, i, j) => {
    if (!grid[i] || !grid[i][j]) return;
    res = Math.max(res, area += grid[i][j]);
    grid[i][j] = 0;
    change(grid, i, j - 1);
    change(grid, i, j + 1);
    change(grid, i - 1, j);
    change(grid, i + 1, j);
  };
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        area = 0;
        change(grid, i, j);
      }
    }
  }
  return res;
};