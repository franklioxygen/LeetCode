/**
 * FLAAG OA Remove Obstacle
 * @param numRows
 * @param numColumns
 * @param lot
 * @return
 */
var removeObstacle = function (numRows, numColumns, lot) {
  let step = 0;
  let twoS;
  lot[0][0] = 2;
  while (1) {
    twoS = [];
    let oriLot = JSON.parse(JSON.stringify(lot)).join(',');
    step++;
    for (i = 0; i < lot[0].length; i++)
      for (j = 0; j < lot.length; j++)
        if (lot[j][i] == 2) twoS.push([j, i]);
    for (point of twoS) {
      if (point[0] - 1 > -1)
        if (lot[point[0] - 1][point[1]] == 9) return step;
      if (point[0] + 1 < lot[0].length)
        if (lot[point[0] + 1][point[1]] == 9) return step;
      if (point[1] - 1 > -1)
        if (lot[point[0]][point[1] - 1] == 9) return step;
      if (point[1] + 1 < lot.length)
        if (lot[point[0]][point[1] + 1] == 9) return step;
      if (point[0] - 1 > -1 && lot[point[0] - 1][point[1]] == 1) lot[point[0] - 1][point[1]] = 2;
      if (point[0] + 1 < lot[0].length && lot[point[0] + 1][point[1]] == 1) lot[point[0] + 1][point[1]] = 2;
      if (point[1] - 1 > -1 && lot[point[0]][point[1] - 1] == 1) lot[point[0]][point[1] - 1] = 2;
      if (point[1] + 1 < lot.length && lot[point[0]][point[1] + 1] == 1) lot[point[0]][point[1] + 1] = 2;
    }
    if (oriLot == JSON.parse(JSON.stringify(lot)).join(',')) return -1;
  }
};