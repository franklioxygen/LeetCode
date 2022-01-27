/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reverse = (n >>> 0).toString(2).split("").join("").padStart(32, '0');
    let res = 0;
    for(i=1;i<32;i++){
        res += Math.pow(reverse[i]==1?2:0,i);
    }
    return res+parseInt(reverse[0]);
};
