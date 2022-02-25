/**
 * 819. Most Common Word
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let m = new Map();
  paragraph = paragraph.toLowerCase().replace(/\W/g, ' ').replace(/ {2}/g, ' ').split(' ');
  for (i = 0; i < paragraph.length; i++) {
    if (!m.has(paragraph[i])) m.set(paragraph[i], 1);
    else m.set(paragraph[i], m.get(paragraph[i]) + 1);
  }
  for (i = 0; i < banned.length; i++) m.delete(banned[i]);
  m.delete('');
  return Array.from(m).sort((a, b) => {
    return a[1] - b[1];
  }).reverse()[0][0];
};