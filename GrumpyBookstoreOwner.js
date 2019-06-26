/**
 * 1052. Grumpy Bookstore Owner
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
    let max = 0;
    for (i = 0; i <= customers.length - X; i++) {
        let res = 0;
        for (j = 0; j < i; j++)
            if (grumpy[j] === 0) res += customers[j];
        for (j = i; j < i + X; j++) res += customers[j];
        for (j = i + X; j < customers.length; j++)
            if (grumpy[j] === 0) res += customers[j];
        max = max > res ? max : res;
    }
    return max;
};