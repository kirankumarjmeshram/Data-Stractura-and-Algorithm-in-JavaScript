// https://leetcode.com/problems/unique-paths/description/?source=submission-ac

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix =Array.from({length:m},()=> Array.from({length:n}, ()=>0));
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(i=== 0 || j===0) {
                matrix[i][j] = 1;
            }
        }
    }
        for(let i=1;i<m;i++) {
        for(let j=1;j<n;j++) {
                matrix[i][j] = matrix[i-1][j]+matrix[i][j-1]
        }
    }
    return matrix[m-1][n-1];
};