// https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let left = 0;
    let currSum = 0;
    for(let right = 0; right < nums.length; right ++) {
        currSum +=  nums[right];
        while(currSum >= target){
            if(right - left +1 < minLength){
                minLength = right - left +1;
            }
            currSum -= nums[left];
            left++
        }
    }
    if(minLength !== Infinity) return minLength
    return 0;
};