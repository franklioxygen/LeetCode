/**
 * 860. Lemonade Change
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      five += 1;
    }
    if (bills[i] == 10) {
      if (five - 1 < 0) {
        console.log(bills[i], five, ten);
        return false;
      } else {
        five -= 1;
        ten += 1;
      }
    }
    if (bills[i] == 20) {
      if (ten > 0 && five > 0) {
        ten -= 1;
        five -= 1;
        continue;
      }
      if (five > 2) {
        five -= 3;
        continue;
      }
      if (five < 3 && ten == 0) {
        return false;
      }
      return false;
    }
  }
  return true;
};