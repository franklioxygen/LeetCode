/**
 * 252. Meeting Rooms
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  let sorted = intervals.sort(function (a, b) {
    return a.start - b.start;
  });
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i].end > sorted[i + 1].start) return false;
  }
  return true;
};
