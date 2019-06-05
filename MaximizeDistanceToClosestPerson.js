/**
 * 849. Maximize Distance to Closest Person
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let cont = 0;
    let max = 0;
    for (i = 0; i <= seats.length; i++) {
        if (seats[i] != 0) {
            max = Math.max(max, cont);
            cont = 0;
        } else cont++;
    }
    cont = 0;
    if (seats[0] == 0) {
        for (i = 0; seats[i] == 0; i++) cont++;
    }
    max = Math.max(cont, Math.floor((max + 1) / 2));
    cont = 0;
    if (seats[seats.length - 1] == 0) {
        for (i = seats.length - 1; seats[i] == 0; i--) cont++;
    }
    max = Math.max(cont, max);
    return max;
};