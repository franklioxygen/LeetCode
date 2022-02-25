/**
 * 130. Surrounded Regions
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length == 0) return [];
  let flip = (x, y) => {
    board[x][y] = 'T';
    let dirs = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1]
    ];
    for ([dirx, diry] of dirs) {
      if (dirx >= 0 && diry >= 0 && dirx < board.length && diry < board[0].length)
        if (board[dirx][diry] == 'O') flip(dirx, diry);
    }
  };
  for (line of board) {
    if (line[0] == 'O') line[0] = 'T';
    if (line[line.length - 1] == 'O') line[line.length - 1] = 'T';
  }
  for (i = 0; i < board[0].length; i++)
    if (board[0][i] == 'O') board[0][i] = 'T';
  for (i = 0; i < board[board.length - 1].length; i++)
    if (board[board.length - 1][i] == 'O') board[board.length - 1][i] = 'T';

  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'T') flip(i, j);
    }
  }
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'O') board[i][j] = 'X';
      if (board[i][j] == 'T') board[i][j] = 'O';
    }
  }
  return board;

};