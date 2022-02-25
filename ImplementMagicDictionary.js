/**
 * 676. Implement Magic Dictionary
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.dicSet = new Set();
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
  for (word of dict)
    if (!this.dicSet.has(word)) this.dicSet.add(word);
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
  let possible = [];
  let oriWord = word;
  word = word.split('');
  for (i = 0; i < word.length; i++) {
    possible.push((word.slice(0, i) + '.' + word.slice(i + 1, word.length)).replace(/,/g, ''));
  }
  for (dicWord of this.dicSet)
    for (comb of possible) {
      let regExp = new RegExp(comb, 'g');
      if (dicWord.match(regExp) && dicWord != oriWord)
        if (word.length == dicWord.length) return true;
    }
  return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */