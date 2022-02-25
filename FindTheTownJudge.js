/**
 * 997. Find the Town Judge
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let vote = [];
  for (i = 0; i < N; i++) vote.push(0);
  for (i in trust) {
    vote[trust[i][0] - 1]--;
    vote[trust[i][1] - 1]++;
  }
  for (i = 0; i < vote.length; i++)
    if (vote[i] == N - 1) return i + 1;
  return -1;
};