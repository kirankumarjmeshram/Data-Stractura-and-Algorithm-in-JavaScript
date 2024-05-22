// Given a triangle array, return the minimum path sum from top to bottom.
// https://leetcode.com/problems/triangle/description/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length
    let dp = new Array(n+1).fill(0);
    for(let i=n-1;i>=0;i--){
        let t = triangle[i];
        let m = t.length
        for(let j=0;j<m;j++){
            dp[j] =t[j]+  Math.min(dp[j], dp[j+1])
        }
    }
    return dp[0]
};