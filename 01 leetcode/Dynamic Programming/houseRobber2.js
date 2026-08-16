var rob = function(nums) {
    let n = nums.length;
    if(n===1) return nums[0];
    rob1 = robHelper(nums, 0, n-1);
    rob2 = robHelper(nums, 1, n);
    return Math.max(rob1, rob2);
};

function robHelper(nums, start, end){
    n = end - start;
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = nums[start];
    for(let i=1;i<n;i++) {
        dp[i+1] = Math.max(dp[i], nums[start+i]+dp[i-1]);
    }
    return dp[n]
}

//solution 2 
var rob = function(nums) {
    let n = nums.length;

    if (n === 1) return nums[0];

    let case1 = robLinear(nums, 0, n - 2);
    let case2 = robLinear(nums, 1, n - 1);

    return Math.max(case1, case2);
};

function robLinear(nums, start, end) {
    let n = end - start + 1;

    let dp = new Array(n).fill(0);

    dp[0] = nums[start];

    if (n === 1) return dp[0];

    dp[1] = Math.max(nums[start], nums[start + 1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(
            dp[i - 1],
            dp[i - 2] + nums[start + i]
        );
    }

    return dp[n - 1];
}
// solution 3
var rob = function(nums) {
    let n = nums.length;

    if (n === 1) return nums[0];

    let case1 = robLinear(nums, 0, n - 2);
    let case2 = robLinear(nums, 1, n - 1);

    return Math.max(case1, case2);
};

function robLinear(nums, start, end) {
    let prev2 = 0;
    let prev1 = 0;

    for (let i = start; i <= end; i++) {
        let temp = Math.max(prev1, prev2 + nums[i]);

        prev2 = prev1;
        prev1 = temp;
    }

    return prev1;
}