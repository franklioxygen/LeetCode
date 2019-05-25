/**
 * 13. Roman to Integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0;
    for (i = 1; i <= s.length; i++) {
        if (convert(s[i - 1]) < convert(s[i])) res = res - convert(s[i - 1]);
        else res = res + convert(s[i - 1]);
    }
    return res;
};
var convert = function (s) {
    switch (s) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }

}