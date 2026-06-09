
//https://leetcode.com/problems/find-peak-element/description/
// Approach1(Brute force Approach)

var findPeakElement = function(nums) {
    let n = nums.length;
    if(nums[0]>nums[1] || n===1)return 0
    if(nums[n-1]>nums[n-2]) return n-1;
    for(let i=1;i<n-1;i++){
        if((nums[i-1]<nums[i]) && (nums[i+1]<nums[i])) {
            return i;
        }
    }
};
