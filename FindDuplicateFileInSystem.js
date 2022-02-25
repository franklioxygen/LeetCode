/**
 * 609. Find Duplicate File in System
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let subStr = '';
  let pathSet = [];
  let fileName = '';
  let dir = '';
  let resMap = new Map();
  let res = [];
  for (path of paths) {
    subStr = path.split(' ');
    dir = subStr[0];
    for (j = 1; j < subStr.length; j++) {
      fileName = subStr[j].split('(');
      fileName[fileName.length - 1] = fileName[fileName.length - 1].slice(0, -1);
      pathSet.push([dir + '/' + fileName[0], fileName[1]]);
    }
  }
  for (file of pathSet) {
    if (!resMap.has(file[1])) resMap.set(file[1], file[0]);
    else resMap.set(file[1], file[0] + ' ' + resMap.get(file[1]));
  }
  for (key of Array.from(resMap)) res.push(key[1].split(' '));
  for (i = 0; i < res.length;)
    if (res[i].length == 1) res.splice(i, 1);
    else i++;
  return res;
};