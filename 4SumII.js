/**
 * 454. 4Sum II
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let hashTable = {};
    let res = 0;
    for (a of A)
        for (b of B)
            if (hashTable[a + b]) hashTable[a + b] += 1;
            else hashTable[a + b] = 1;
    for (c of C)
        for (d of D)
            if (hashTable[-c - d]) res += hashTable[-c - d];
    return res;
};