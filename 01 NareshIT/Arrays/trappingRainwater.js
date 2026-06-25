//// https://leetcode.com/problems/trapping-rain-water/

//Data-Stractura-and-Algorithm-in-JavaScript\01 leetcode\Top Interview 150\Array-String\trap.js
var trapBF = function(height) {
    let n = height.length;
    let ans = 0;
    for(let i=1;i<n-1;i++){
        let l = i-1;
        let r = i+1;
        let leftMax = height[i];
        let rightMax = height[i];
        while(l>=0){
            leftMax = Math.max(leftMax, height[l]);
            l--;
        }
        while(r<n){
            rightMax = Math.max(rightMax, height[r]);
            r++;
        }
        let minMax = Math.min(leftMax, rightMax);
        ans+=minMax-height[i]

    }
    return ans;
};

