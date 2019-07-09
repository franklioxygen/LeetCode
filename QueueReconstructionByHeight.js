/**
 * 406. Queue Reconstruction by Height
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    let res = [];
    people.sort((a, b) => {
        if (a[0] != b[0]) return b[0] - a[0];
        else return a[1] - b[1]
    });
    for (i = 0; i < people.length; i++) res.splice(people[i][1], 0, people[i]);
    return res;
};