/**
 * 547. Friend Circles
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    let res = 0;
    let dfs = (i, j) => {
        if (M[i][j] != 1) return;
        M[i][j] = 2;
        for (let k = 0; k < M.length; k++) dfs(j, k);
    };
    for (i = 0; i < M.length; i++)
        for (j = 0; j < M[0].length; j++)
            if (M[i][j] == 1) {
                res++;
                dfs(i, j);
            }
    return res;
};