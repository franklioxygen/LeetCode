/**
 * 812. Largest Triangle Area
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let comb = []
    let maxArea = 0;
    let dfs = (n, start, curr) => {
        if (n == curr.length) {
            let temp = JSON.parse(JSON.stringify(curr));
            comb.push(temp);
            return;
        }
        for (let j = start; j < points.length; j++) {
            curr.push(points[j]);
            dfs(n, j + 1, curr);
            curr.pop();
        }
    };

    let area = (a, b, c) => {
        let side1 = dist(a, b);
        let side2 = dist(b, c);
        let side3 = dist(a, c);
        let s = (side1 + side2 + side3) / 2;
        if (maxArea < Math.round(Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))) * 10) / 10)
            maxArea = Math.round(Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))) * 10) / 10;
    };

    let dist = ([x1, y1], [x2, y2]) => {
        let a = x1 - x2;
        let b = y1 - y2;
        return Math.sqrt(a * a + b * b);
    };

    for (i = 1; i <= 3; i++) dfs(i, 0, []);
    comb = comb.filter((el) => {
        return el.length == 3
    });
    for (coord of comb) area(coord[0], coord[1], coord[2]);
    return maxArea;
};