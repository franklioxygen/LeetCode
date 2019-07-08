/**
 * 1079. Letter Tile Possibilities
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    let perm = new Set();
    let used = Array(tiles.length).fill(0);
    let dfs = (n, curr) => {
        if (curr.length === n) {
            let temp = JSON.parse(JSON.stringify(curr));
            perm.add(temp.join(""));
            return;
        }
        for (let i = 0; i < tiles.length; i++) {
            if (used[i] == 1) continue;
            used[i] = 1;
            curr.push(tiles[i])
            dfs(n, curr)
            curr.pop();
            used[i] = 0;
        }
    };
    for (i = 1; i <= tiles.length; i++) dfs(i, []);
    return perm.size;
};