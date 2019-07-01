/**
 * 1089. Duplicate Zeros
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && i != arr.length - 1) {
            for (j = arr.length - 1; j > i; j--) arr[j] = arr[j - 1];
            arr[i + 1] = 0;
            i++;
        }
    }
};