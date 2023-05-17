//https://leetcode.com/problems/running-sum-of-1d-array/
var runningSum = function(nums) {
    let output = [nums[0]];
    for(let i=1;i<nums.length;i++){
        output.push(output[i-1]+nums[i]);
    }
    return output;
};