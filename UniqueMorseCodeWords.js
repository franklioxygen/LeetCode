/**
 * 804. Unique Morse Code Words
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {

    var i, j;
    var unique = [];
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words.length; j++) {
            if (unique[j] == conc(words[i]))
                break;
            if (j == words.length - 1)
                unique.push(conc(words[i]));
        }
    }
    return unique.length;
};

function conc(word) {
    var i, j;
    var ret = '';
    const table = [
        ['a', '.-'],
        ['b', '-...'],
        ['c', '-.-.'],
        ['d', '-..'],
        ['e', '.'],
        ['f', '..-.'],
        ['g', '--.'],
        ['h', '....'],
        ['i', '..'],
        ['j', '.---'],
        ['k', '-.-'],
        ['l', '.-..'],
        ['m', '--'],
        ['n', '-.'],
        ['o', '---'],
        ['p', '.--.'],
        ['q', '--.-'],
        ['r', '.-.'],
        ['s', '...'],
        ['t', '-'],
        ['u', '..-'],
        ['v', '...-'],
        ['w', '.--'],
        ['x', '-..-'],
        ['y', '-.--'],
        ['z', '--..']
    ];
    for (i = 0; i < word.length; i++) {
        for (j = 0; j <= 26; j++) {
            if (word[i] == table[j][0]) {
                ret = ret + table[j][1];
                break;
            }
        }
    }
    return ret;
}