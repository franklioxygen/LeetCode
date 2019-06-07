/**
 * 443. String Compression
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let len = chars.length;
    let num = 1;
    for (i = 0, j = 0; i < len; i++) {
        if (chars[i] == chars[i + 1]) num++;
        else {
            if (num > 1) {
                chars[j] = chars[i];
                j++;
                num = num.toString().split("")
                num.forEach(function (val, i) {
                    chars[j] = val;
                    j++;
                });
            } else {
                chars[j] = chars[i];
                j++;
            }
            num = 1;
        }
    }
    for (i = 0; i < len - j; i++) chars.pop();
};