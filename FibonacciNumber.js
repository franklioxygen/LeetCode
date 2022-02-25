/**
 * 509. Fibonacci Number
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let F = [];
  F[0] = 0;
  F[1] = 1;
  if (N == 0 || N == 1) return N == 0 ? 0 : 1;
  for (i = 2; i <= N; i++) {
    F[i] = F[i - 1] + F[i - 2];
    if (i == N) return F[i];
  }

};