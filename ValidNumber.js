/**
 * 65. Valid Number
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    s = s.trim();
    if (s.replace(/\ /g, "") != s) return false;
    s = s.split("e");
    s[0] = s[0].trim();
    if (s[0] == "" || s[0] == " " || s[1] == "") return false;
    if (s[0] == ".") return false;
    if (s.length > 2) return false;
    if (s.length == 2)
        if (s[1].replace(/\./g, "") != s[1]) return false;
    for (exp of s) {
        exp = exp.trim();
        if (exp == "+" || exp == "-") return false;
        if (exp.replace(/\./g, "").length + 1 < exp.length) return false;
        if (exp.replace(/\ /g, "") != exp) return false;
        if (exp.replace(/([A-Za-z])/g, "") != exp) return false;
        if (exp.replace(/[+-]/g, "").length + 1 < exp.length) return false;
        if (exp.length - exp.replace(/[+-]/g, "").length == 1 && exp.replace(/[+-]/g, "") != exp.substring(1)) return false;
        exp = exp.replace(/[+-]/g, "");
        if (exp == ".") return false;
    }
    return true;
};