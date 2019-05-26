/**
 * 733. Flood Fill
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if (newColor == image[sr][sc]) return image;
    return change(sr, sc, newColor, image[sr][sc], image);
};

function change(sr, sc, newColor, oldColor, image) {
    image[sr][sc] = newColor;
    if (sr != 0)
        if (image[sr - 1][sc] == oldColor) change(sr - 1, sc, newColor, oldColor, image);
    if (sc != 0)
        if (image[sr][sc - 1] == oldColor) change(sr, sc - 1, newColor, oldColor, image);
    if (sr + 1 != image.length)
        if (image[sr + 1][sc] == oldColor) change(sr + 1, sc, newColor, oldColor, image);
    if (sc + 1 != image[0].length)
        if (image[sr][sc + 1] == oldColor) change(sr, sc + 1, newColor, oldColor, image);
    return image;
}