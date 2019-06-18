/**
 * 841. Keys and Rooms
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let keys = new Set();
    let newKey = new Set();
    open(rooms[0], keys, newKey);
    while (newKey.size != 0) {
        for (key of newKey) {
            newKey.delete(key);
            open(rooms[key], keys, newKey);
        }
    }
    keys.delete(0);
    return keys.size + 1 == rooms.length;
};

function open(room, keys, newKey) {
    for (key of room)
        if (!keys.has(key)) {
            keys.add(key);
            newKey.add(key);
        }
}