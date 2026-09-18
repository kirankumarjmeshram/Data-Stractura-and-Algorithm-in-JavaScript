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

// Queue Solution
var constrainedSubsetSum = function(nums, k) {
    let n = nums.length;
    let dp = [...nums];

    let deque = new Array();
    let front = 0;
    let back = 0;

    for(let i=0; i<n;i++) {
        while( front < back && deque[front] < i-k) {
            front++;
        }
        if(front<back) {
            dp[i] = Math.max(dp[i], nums[i]+dp[deque[front]]);
        }
        while(front < back && dp[deque[back-1]] <= dp[i]) {
            back--;
        }
        deque[back++] = i;
    }

    return Math.max(...dp)
};