// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n= nums.length;
    let leftNums = [];
    let rightNums = [];
    leftNums[0] = 1;
    rightNums[n-1]=1;
    let arrProd = [];

    for(let i=1;i<n;i++){
        leftNums[i] = leftNums[i-1]*nums[i-1]
    }

    for(let i=n-2;i>=0;i--){
        rightNums[i] = rightNums[i+1] * nums[i+1]
    }

    for(let i=0;i<n;i++) {
        arrProd[i] = leftNums[i]*rightNums[i]
    }
    return arrProd;
};

//      [10, 3,  5,  6,   2]
// o => [1,  10, 30, 150, 900]
//      [180,  600, 360, 300, 900]