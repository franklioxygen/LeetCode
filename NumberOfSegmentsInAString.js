/**
 * 434. Number of Segments in a String
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim();
  if (s.length === 0) return 0;
  return s.replace(/\s+/g, ' ').split(' ').length;
};