/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let res = [];
  for(i=0;i<nums.length;i++){
    if(nums[i]+1!=nums[i+1]){
      let end = nums[i]&&i!=0?'->'+nums[i]:'';
      res.push(nums[0]+end);
      nums = nums.slice(i+1);
      i=-1;
    }
  }
  return res;
};
