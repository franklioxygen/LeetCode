/**
 * 884. Uncommon Words from Two Sentences
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    let res;
    let list = (A + " " + B).split(" ");
    let setAll = new Set();
    let listRep = [];

    for (i = 0; i < list.length; i++) {
        if (setAll.has(list[i])) listRep.push(list[i]);
        else setAll.add(list[i]);
    }
    for (i = 0; i < listRep.length; i++) {
        if (setAll.has(listRep[i])) setAll.delete(listRep[i]);
    }
    return Array.from(setAll);

};