// https://leetcode.com/problems/unique-paths-ii/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let matrix  = Array.from({length:m}, ()=>Array.from({length:n},()=>0));
    let flag = false;
    for(let i=0;i<m;i++){
        if(flag || obstacleGrid[i][0]) {
            flag = true;
            matrix[i][0] = 0;
        }else{
            matrix[i][0] = 1;
        }
    }
    flag = false;
    for(let i=0;i<n;i++){
        if(flag || obstacleGrid[0][i]) {
            flag = true;
            matrix[0][i] = 0;
        }else{
            matrix[0][i] = 1;
        }
    }


    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                matrix[i][j] = 0;
            } else {
                matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
            }
        }
    }

    // for(let i=0;i<m;i++) {
    //     for(let j=0;j<n;j++) {
    //         if(obstacleGrid[i][j]===1){
    //             matrix[i][j]=0;
    //         }
    //     }
    // }

    // for(let i=1;i<m;i++) {
    //     for(let j=1;j<n;j++) {
    //         matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
    //     }
    // }

    return matrix[m-1][n-1];
};