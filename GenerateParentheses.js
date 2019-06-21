/**
 * 22. Generate Parentheses
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n == 1) return ["()"]
    let endCase = Array(n - 1).fill("0").join("") + Array(n - 1).fill("1").join("");
    let digits = Array((n - 1) * 2).fill(0);
    let res = [];
    let testCase = [];
    while (digits.join("") != endCase) {
        let carry = 1;
        for (j = 0; j < digits.length && carry == 1; j++) {
            if (digits[j] == 1) {
                carry = 1;
                digits[j] = 0
            } else {
                carry = 0;
                digits[j] = 1;
            }
        }
        testCase = JSON.parse(JSON.stringify(digits)).sort().join("");
        if (testCase == endCase && validate(digits)) {
            res.push("(" + digits.join("").replace(/0/g, "(").replace(/1/g, ")") + ")");
        }
    }
    return res;
};

let validate = digits => {
    let dig = JSON.parse(JSON.stringify(digits));
    let stack = [];
    for (char of dig) {
        if (char == 0) stack.push(char);
        else {
            if (stack.length == 0) {
                stack.push(char);
                continue;
            }
            stack.pop();
        }
    }
    if (stack.length == 0 || stack.join("") == "10") return true;
    else return false;
}