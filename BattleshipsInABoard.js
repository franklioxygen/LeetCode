/**
 * 419. Battleships in a Board
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let res = 0;
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'X') {
        res++;
        board = fill(board, i, j);
      }
    }
  }
  return res;
};

function fill(board, i, j) {
  board[i][j] = '.';
  if (j + 1 < board[0].length && board[i][j + 1] == 'X') {
    board[i][j + 1] = '.';
    fill(board, i, j + 1);
  }
  if (j - 1 >= 0 && board[i][j - 1] == 'X') {
    board[i][j - 1] = '.';
    fill(board, i, j - 1);
  }
  if (i + 1 < board.length && board[i + 1][j] == 'X') {
    board[i + 1][j] = '.';
    fill(board, i + 1, j);
  }
  if (i - 1 >= 0 && board[i - 1][j] == 'X') {
    board[i - 1][j] = '.';
    fill(board, i - 1, j);
  }
  return board;
}