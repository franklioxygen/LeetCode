/**
 * 999. Available Captures for Rook
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let i;
  let rookPos = getPos(board);
  let ret = 0;
  let line = [];
  for (i = 0; i < board[0].length; i++) {
    if ((board[i][rookPos[0]]) != '.') line.push((board[i][rookPos[0]]));
  }
  ret = ret + cap(line);
  line = [];
  for (i = 0; i < board.length; i++) {
    if ((board[rookPos[1]][i]) != '.') line.push(board[rookPos[1]][i]);
  }
  ret = ret + cap(line);
  return ret;
};

function getPos(board) {
  let i, j;
  for (i = 0; i < board[0].length; i++) {
    for (j = 0; j < board.length; j++) {
      if (board[j][i] == 'R') return [i, j];
    }
  }
}

function cap(line) {
  let capNum = 0;
  for (let i = 0; i < line.length; i++) {
    if (((line[i] == 'p') && (line[i + 1] == 'R')) || ((line[i] == 'R') && (line[i + 1] == 'p'))) capNum++;
  }
  return capNum;
}