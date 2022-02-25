/**
 * 463. Island Perimeter
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let line = [];
  let newGrid = [];
  let res = 0;
  outline(grid, newGrid);
  for (i = 0; i < grid.length; i++) {
    line.push(0);
    for (j = 0; j < grid[0].length; j++) line.push(grid[i][j]);
    line.push(0);
    newGrid.push(line);
    line = [];
  }
  outline(grid, newGrid);

  for (i = 1; i < newGrid.length - 1; i++) {
    for (j = 1; j < newGrid[0].length - 1; j++) {
      if (newGrid[i][j] == 1) {
        newGrid[i][j] != newGrid[i][j + 1] ? res++ : 0;
        newGrid[i][j] != newGrid[i][j - 1] ? res++ : 0;
        newGrid[i][j] != newGrid[i - 1][j] ? res++ : 0;
        newGrid[i][j] != newGrid[i + 1][j] ? res++ : 0;
      }
    }
  }
  return res;
};

function outline(grid, newGrid) {
  let i;
  let line = [];
  for (i = 0; i < grid[0].length + 2; i++) line.push(0);
  newGrid.push(line);
  return newGrid;
}