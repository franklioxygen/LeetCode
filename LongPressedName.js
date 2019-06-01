/**
 * 925. Long Pressed Name
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let j = 0;
    for (i = 0; i < name.length; i++) {
        while (j < typed.length) {
            console.log(i, j, name[i], typed[j]);
            if (name[i] == typed[j]) {
                if (i == name.length - 1) {
                    return true;
                }
                i++;
                j++;
            } else j++;
        }
    }
    return false;
};