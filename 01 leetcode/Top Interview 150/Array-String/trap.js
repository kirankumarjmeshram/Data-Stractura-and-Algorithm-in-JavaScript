// https://leetcode.com/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    let leftMax = new Array(n);
    leftMax[0] = height[0];

    let rightMax = new Array(n);
    rightMax[n-1] = height[n-1];
    let water = 0;

    for(let i=1;i<n;i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    for(let i=n-2;i>=0;i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i]) 
    }

    for(let i=0;i<n;i++) {
        water += Math.min(rightMax[i], leftMax[i]) - height[i]
    }
    return water;
};