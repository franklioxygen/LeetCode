/**
 * 90. Subsets II
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = nums => {
    let results = [];
    let xDimensionalUnique = arr => {
    let uniques = [];
    let itemsFound = {};
    for(let i = 0, l = arr.length; i < l; i++) {
        let stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
        }
        return uniques;
    }
    let recursive = (start, result) => {
      for (let i = start; i < nums.length; i++) {
        result.push(nums[i]);
        recursive(i + 1, result);
        result.pop();
      }
        results.push(JSON.parse(JSON.stringify(result)).sort());
    }
    recursive(0,[]);
    return xDimensionalUnique(results);
}