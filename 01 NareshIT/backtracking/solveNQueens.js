// https://leetcode.com/problems/n-queens/

// Approach (Backtracking)
//
// Place one queen in each row.
//
// For the current row, try placing a queen in every column.
// Before placing, verify that the position is safe:
//
//   1. No queen exists in the same column.
//   2. No queen exists in the upper-left diagonal.
//   3. No queen exists in the upper-right diagonal.
//
// If the position is safe:
//   - Place the queen.
//   - Recurse for the next row.
//   - Remove the queen (backtrack).
//
// When row === n, queens have been successfully placed in all rows.
// Convert the board into the required string format and store it.
//
// We only check rows above the current row because queens are
// placed from top to bottom, one row at a time.
//
// Time Complexity: O(N!)
// Space Complexity: O(N²) for the board.

var solveNQueens = function(n) {
    let board = Array.from({length:n},()=> Array(n).fill("."));
    let result = [];
    Helper(n,board,result,0)
    return result;
};

function Helper(n,board,result, row) {
    if(row === n) {
        result.push(board.map(row => row.join("")));
        return;
    }
    for(let col = 0;col < n; col++) {
        if(isSafe(board, row, col)){
            board[row][col] = "Q";
            Helper(n,board, result,row+1);
            board[row][col] = ".";
        }
    }
}
function isSafe(board, row, col){
    let n = board.length;
    //top
    // [ "..Q.",
    //  "Q...",
    //  "...Q",
    //  ".Q.."]
    for(let i=row; i>=0; i--){
        if(board[i][col] === "Q"){
            return false;
        }
    }
    //left diagonal
    for(let i= row-1,j=col-1; i>=0 && j>=0;i--,j--) {
        if(board[i][j] === "Q"){
            return false
        }
    }
    //right digonal
    for(let i= row-1,j=col+1; i>=0 && j<n ;i--,j++) {
        if(board[i][j] === "Q"){
            return false
        }
    }
    return true;
}