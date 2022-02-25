/**
 * 520. Detect Capital
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length == 1) return true;
  if (word[0] == word[0].toLowerCase() && word[1] == word[1].toUpperCase()) return false;
  if (word[0] == word[0].toUpperCase() && word[1] == word[1].toUpperCase()) {
    for (i = 2; i < word.length; i++)
      if (word[i] != word[i].toUpperCase()) return false;
  }
  if ((word[0] == word[0].toLowerCase() && word[1] == word[1].toLowerCase()) ||
        (word[0] == word[0].toUpperCase() && word[1] == word[1].toLowerCase())) {
    for (i = 2; i < word.length; i++)
      if (word[i] != word[i].toLowerCase()) return false;
  }
  return true;
};