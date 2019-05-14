/**
 * 1002. Find Common Characters
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let newFilter = A[0];
    for (i = 1; i < A.length; i++) {
        newFilter = filter(newFilter, A[i]);
    }
    return newFilter;
};

function filter(filter, raw) {
    let i, j;
    let newFilter = [];
    for (i = 0; i < filter.length; i++) {
        for (j = 0; j < raw.length; j++) {
            if (filter[i] == raw[j]) {
                newFilter.push(raw[j]);
                raw = raw.replace(raw[j], "");
                break;
            }
        }
    }
    return newFilter;
}