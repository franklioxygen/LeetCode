/**
 * 892. Surface Area of 3D Shapes
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
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
            res = res +
                Math.abs(newGrid[i][j] - newGrid[i - 1][j]) +
                Math.abs(newGrid[i][j] - newGrid[i][j - 1]) +
                (newGrid[i][j] != 0 ? 2 : 0);
        }
    }
    for (i = 1; i < newGrid.length - 1; i++) {
        res = res + newGrid[i][newGrid.length - 2];
    }
    for (j = 1; j < newGrid[0].length - 1; j++) {
        res = res + newGrid[newGrid[0].length - 2][j];
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