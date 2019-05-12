/**
 * 657. Robot Return to Origin
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0,
        y = 0;
    for (i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "U":
                x++;
                break;
            case "D":
                x--;
                break;
            case "R":
                y++;
                break;
            case "L":
                y--;
                break;
        }
    }

    return ((x == 0) && (y == 0));
};