/**
 * 401. Binary Watch
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
    let res = [];
    for (i = 0; i < 12; i++)
        for (j = 0; j < 60; j++) {
            let hr = i.toString(2).split("").reduce((acc, cur) => acc + (cur == "1" ? 1 : 0), 0)
            let mn = j.toString(2).split("").reduce((acc, cur) => acc + (cur == "1" ? 1 : 0), 0)
            if (hr + mn == num) res.push(j < 10 ? `${i}:0${j}` : `${i}:${j}`)
        }
    return res;
};