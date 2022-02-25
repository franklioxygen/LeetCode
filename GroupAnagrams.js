/**
 * 49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let m = new Map();
  let res = [];
  for (str of strs) {
    let key = str.split('').sort().join('');
    if (!m.has(key)) m.set(key, [str]);
    else {
      let newEl = m.get(key);
      newEl.push(str);
      m.set(key, m.get(key));
    }
  }
  for (group of m) res.push(group[1]);
  return res;
};