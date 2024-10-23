// https://leetcode.com/problems/longest-increasing-subsequenc
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);

  //nums => [10,9, 2, 5, 3, 7,101,18]
  // dp  => [1, 1, 1, 2, 2, 3, 4, 4]

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  return Math.max(...dp);
};
