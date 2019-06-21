/**
 * 46. Permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let pOld = [];
    let pNew = [
        []
    ];
    for (k = 0; k < nums.length; k++) {
        pOld = JSON.parse(JSON.stringify(pNew))
        for (j = 0; j < pOld.length; j++) {
            let len = pOld[j].length;
            oldList = JSON.parse(JSON.stringify(pOld[j]));
            for (i = 0; i <= len; i++) {
                newList = oldList.splice(0, i).concat(nums[k]).concat(oldList.splice(0, oldList.length))
                pNew.push(newList);
                oldList = JSON.parse(JSON.stringify(pOld[j]));
            }
        }
    }
    pNew = pNew.filter(function (element) {
        return element.length == nums.length;
    });
    return pNew
};