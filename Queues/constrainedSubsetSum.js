//https://leetcode.com/problems/constrained-subsequence-sum/
//DP Solution

var constrainedSubsetSum = function(nums, k) {
    let dp = [...nums];
    let n = nums.length;
    for(let i=1;i<n;i++) {
        for(let j=Math.max(0, i-k);j<i;j++) {
            dp[i] = Math.max(dp[i], nums[i]+dp[j]) 
        }
    }
    return Math.max(...dp);
};