// https://leetcode.com/problems/minimum-path-sum
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let n = grid.length;
    let m = grid[0].length
    // let dp = new Array(n+1).fill(new Array(m+1).fill(Infinity));
    let dp = Array.from({length:n+1}, ()=> new Array(m+1).fill(Infinity))
    dp[n][m-1] = 0;
    console.log(dp)
    for(let i=n-1;i>=0;i--){
        for(let j=m-1;j>=0;j--){
            dp[i][j] = grid[i][j] + Math.min(dp[i][j+1],dp[i+1][j])
        }
    }
    return dp[0][0];
    
};