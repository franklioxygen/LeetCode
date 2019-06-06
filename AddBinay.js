/**
 * 67. Add Binary
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (b.length > a.length)[a, b] = [b, a];
    let add1 = 0;
    let aLen = a.length;
    a = ("0" + a).split("").reverse().map(function (x) {
        return parseInt(x, 2);
    });
    b = b.split("").reverse().map(function (x) {
        return parseInt(x, 2);
    });
    for (i = 0; i < aLen + 1; i++) {
        if (add1 == 1) {
            a[i] += 1;
            add1 = 0;
        }
        if (b[i] == null) b.push(0);
        a[i] = a[i] + b[i];
        if (a[i] >= 2) {
            a[i] = a[i] % 2;
            add1 = 1;
        }
    }
    while (a[a.length - 1] == 0) a.pop();
    if (a == "") return "0";
    return a.reverse().join("").toString();
};