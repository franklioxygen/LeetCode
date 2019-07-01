/**
 * 893. Groups of Special-Equivalent Strings
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    let strSet = new Set();
    for (str of A) {
        let odd = [];
        let even = [];
        for (i = 0; i < str.length; i++)
            if (i % 2 == 0) odd.push(str[i]);
            else even.push(str[i]);
        str = odd.sort() + even.sort();
        if (!strSet.has(str)) strSet.add(str);
    }
    return strSet.size;
};