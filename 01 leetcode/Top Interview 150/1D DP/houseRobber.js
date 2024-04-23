//https://leetcode.com/problems/house-robber/solutions/5061128/house-robber-maximizing-loot-without-alerting-police
/**
 * @param {number[]} nums
 * @return {number}
 */
// [0,0,2,7,9,3,1] 
var rob = function(nums) {
    let n = nums.length;
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i=1;i<nums.length;i++){
        dp[i+1] = Math.max(dp[i], dp[i-1] + nums[i])
    }
    //  for(let i=2;i<=n;i++){
    //     dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1])
    // }
    return dp[n];
};
// dp = [0,2,7,11,11,12]
// nums = [2,7,9,3,1]