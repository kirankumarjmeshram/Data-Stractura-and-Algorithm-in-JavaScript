//https://leetcode.com/contest/weekly-contest-398/problems/special-array-i/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for(let i=1;i<nums.length;i++){
        if(nums[i-1]%2===nums[i]%2){
            return false;
        }
    }
    return true;
    
};
