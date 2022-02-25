/**
 * 200. Number of Islands
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;
  let bfs = (x, y) => {
    grid[x][y] = 2;
    dirs = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1]
    ];
    for ([a, b] of dirs)
      if (a > -1 && b > -1 && a < grid.length && b < grid[0].length && grid[a][b] == 1)
        bfs(a, b);
  };
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        bfs(i, j);
        res++;
      }
    }
  }
  return res;
};