/**
 * 985. Sum of Even Numbers After Queries
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    let res = [];
    for (i = 0; i < queries.length; i++) {
        A[queries[i][1]] = A[queries[i][1]] + queries[i][0];
        res.push(sum(A));
    }
    return res;
};

function sum(sum) {
    let i;
    let res = 0;
    for (i = 0; i < sum.length; i++) {
        if (sum[i] % 2 == 0) res = res + sum[i];
    }
    return res;
}