/**
 * 994. Rotting Oranges
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let res = 0;
  let rotten = [];
  let visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
  let findRotten = () => {
    for (i = 0; i < grid.length; i++)
      for (j = 0; j < grid[0].length; j++)
        if (grid[i][j] == 2) {
          rotten.push([i, j]);
        }
  };
  let rot = (x, y) => {
    let dirs = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1]
    ];
    for ([a, b] of dirs)
      if (a > -1 && b > -1 && a < grid.length && b < grid[0].length) {
        if (grid[a][b] == 1) {
          visited[a][b] = true;
          grid[a][b] = 2;
        }
      }
  };
  let currGrid = grid.map(function (arr) {
    return arr.slice();
  });
  findRotten();
  while (1) {
    let currGrid = grid.map(function (arr) {
      return arr.slice();
    });
    for (orange of rotten)
      if (visited[orange[0], orange[1]] == false) rot(orange[0], orange[1]);
    if (currGrid.join('') == grid.join('')) break;
    findRotten();
    res++;
  }
  for (i = 0; i < grid.length; i++)
    for (j = 0; j < grid[0].length; j++)
      if (grid[i][j] == 1) return -1;
  return res;
};