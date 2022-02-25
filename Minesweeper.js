/**
 * 529. Minesweeper
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let refresh = (y, x) => {
    let dirs = [
      [y - 1, x - 1],
      [y - 1, x],
      [y - 1, x + 1],
      [y + 1, x - 1],
      [y + 1, x],
      [y + 1, x + 1],
      [y, x - 1],
      [y, x + 1]
    ];
    let mines = 0;

    for (let dir of dirs) {
      if (dir[0] >= 0 && dir[1] >= 0 && dir[0] < board.length && dir[1] < board[0].length) {
        mines += board[dir[0]][dir[1]] == 'M' ? 1 : 0;
      }
    }
    if (mines > 0) board[y][x] = mines.toString(10);
    else {
      board[y][x] = 'B';
      for (let dir of dirs) {
        if (dir[0] >= 0 && dir[1] >= 0 && dir[0] < board.length && dir[1] < board[0].length) {
          if (board[dir[0]][dir[1]] == 'E') {
            board[dir[0]][dir[1]] = 'B';
            refresh(dir[0], dir[1]);
          }
        }

      }
    }

  };

  if (board[click[0]][click[1]] == 'M') {
    board[click[0]][click[1]] = 'X';
  } else refresh(click[0], click[1]);
  return board;
};