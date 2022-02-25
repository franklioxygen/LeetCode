/**
 * 648. Replace Words
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  sentence = sentence.split(' ');
  for (root of dict) {
    for (i = 0; i < sentence.length; i++) {
      if (sentence[i].slice(0, root.length) == root) sentence[i] = root;
    }
  }
  return sentence.join(' ');
};