/**
 * 675. Cut Off Trees for Golf Event
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function (forest) {
    let forestLine = [];
    for (i = 0; i < forest.length; i++)
        for (j = 0; j < forest[0].length; j++)
            if (forest[i][j] !== 0) forestLine.push([forest[i][j],
                [i, j]
            ]);
    forestLine.sort((a, b) => {
        return a[0] - b[0];
    });
    if (forestLine.length == 1 && !(forestLine[0][0] == 0 && forestLine[0][1] == 0)) return -1;
    forestLine.unshift([0, [0, 0]])
    let bfs = (beg, end) => {
        let q = [
            [beg[0], beg[1]]
        ];
        let step = 0;
        let visited = Array(forest.length).fill().map(() => Array(forest[0].length).fill(0));
        visited[beg[0]][beg[1]] = 1;
        while (q.length != 0) {
            let len = q.length;
            for (i = 0; i < len; i++) {
                let dirs = [
                    [q[0][0] - 1, q[0][1]],
                    [q[0][0] + 1, q[0][1]],
                    [q[0][0], q[0][1] - 1],
                    [q[0][0], q[0][1] + 1]
                ];
                for ([qx, qy] of dirs) {
                    if (qx > -1 && qy > -1 && qx < forest.length && qy < forest[0].length && forest[qx][qy] != 0 && visited[qx][qy] != 1) {
                        q.push([qx, qy]);
                        visited[qx][qy] = 1;
                    }
                }
                let curr = q.shift();
                if (curr[0] == end[0] && curr[1] == end[1]) return step;
            }
            step++;
        }
        return -1;
    };

    let res = 0;
    for (let i = 0; i < forestLine.length - 1; i++) {
        let beg = forestLine[i][1];
        let end = forestLine[i + 1][1];
        let q = [
            [beg[0], beg[1]]
        ];
        let ret = bfs(beg, end);
        if (ret == -1) return -1;
        else res += ret;
    }
    return res;
};