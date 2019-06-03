/**
 * 415. Add Strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let add1 = 0;
    let sum = 0;
    let numA = (num1.length >= num2.length ? num1 : num2).split("").reverse();
    let numB = (num1.length < num2.length ? num1 : num2).split("").reverse();
    numB = numB.concat(Array(numA.length - numB.length).fill("0"))
    for (i = 0; i < numB.length; i++) {
        sum = parseInt(numA[i], 10) + parseInt(numB[i], 10);
        if (sum > 9) add1 = 1;
        numA[i] = sum % 10;
        if (add1 == 1 && i + 1 == numB.length) numA.push(1);
        if (i < numB.length - 1) numA[i + 1] = parseInt(numA[i + 1], 10) + add1;
        add1 = 0;
    }
    return numA.reverse().join("");
};