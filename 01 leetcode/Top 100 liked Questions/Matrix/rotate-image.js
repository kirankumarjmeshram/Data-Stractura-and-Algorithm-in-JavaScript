//https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    let n = matrix.length;
// transpose : rotate wrt diagonal
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            let temp;
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
// rotate wrt middle column
    for(let i=0;i<n;i++){
        for(let j =0;j<Math.floor(n/2);j++){
            let temp;
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-1-j];
            matrix[i][n-1-j] = temp;
        }
    }
    return matrix;
};