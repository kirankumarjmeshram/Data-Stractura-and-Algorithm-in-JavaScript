// Create a function that takes a list of integers as input and returns the maximum sum of any contiguous subarray (a subarray is a contiguous portion of the array). The function should have a time complexity of O(n).
// Input 1: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output 1: 6
// Explanation 1: The subarray [4,-1,2,1] has the largest sum 6

// Input 2: nums = [1]
// Output 2: 1

//c
function maxSubarraySum(nums) {
    let maxSum = -Infinity;
    let n = nums.length;
    for(let i=0;i<n;i++){
        let sum = 0;
        for(let j=i;j<n;j++) {
            sum += nums[j]
            maxSum = Math.max(maxSum, sum)
        }
    }
    return maxSum
}

function maxSubarraySumKandane(nums) {
    let maxSum = nums[0];
    let currSum = nums[0]
    let n = nums.length;

    for(let i=1; i<n;i++) {
        currSum = Math.max(nums[i],currSum+nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
};

console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]))