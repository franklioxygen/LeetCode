/**
 * 1103. Distribute Candies to People
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let res = Array(num_people).fill(0);
    let i = 0;
    let currCandy = 1;
    while (candies != 0) {
        if (candies <= currCandy) {
            res[i] += candies;
            return res;
        }
        candies -= currCandy;
        res[i] += currCandy;
        currCandy += 1;
        i += 1;
        if (i > res.length - 1) i = 0;
    }
};