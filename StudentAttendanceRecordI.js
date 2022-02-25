/**
 * 551. Student Attendance Record I
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let abs = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] == 'A') {
      abs++;
      if (abs > 1) return false;
    }
    if (s[i] == 'L') {
      if (s[i + 1] == 'L' && s[i + 2] == 'L') return false;
    }
  }
  return true;
};