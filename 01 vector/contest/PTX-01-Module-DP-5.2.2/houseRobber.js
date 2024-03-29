function houseRobber (nums) {
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
nums = [2,7,9,3,1]
// console.log(houseRobber2(nums))12

// Recursive

function houseRobber2(nums,n = nums.length-1){
    if(n< 0){
        return 0;
    }
    return Math.max(houseRobber2(nums, n-1), nums[n] + houseRobber2(nums,n-2))
}