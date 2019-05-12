/**
 * 929. Unique Email Addresses
 * @param {string[]} words
 * @return {number}
 */

var numUniqueEmails = function (emails) {
    let list = new Set();
    for (let email of emails) {
        email = formatting(email);
        if (list.has(email) == false) list.add(email);
    }
    return list.size;
};

function formatting(email) {
    var parts = email.split("@");
    var local = parts[0].split("+");
    local[0] = local[0].replace(/\./g, "");
    return local[0] + "@" + parts[1];
}