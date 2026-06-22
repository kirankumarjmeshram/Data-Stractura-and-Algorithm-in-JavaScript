// https://leetcode.com/problems/n-queens-ii/
/**
 * Approach (Backtracking + Sets)
 *
 * We place one queen per row.
 *
 * To quickly check whether a position (row, col) is valid:
 *
 * 1. Column Check
 *    - Two queens cannot be in the same column.
 *    - Store occupied columns in a Set.
 *
 * 2. Left Diagonal Check (\)
 *    - All cells on the same left diagonal have:
 *          row - col
 *      equal.
 *    - Example:
 *          (0,0), (1,1), (2,2)
 *          row - col = 0
 *    - Store occupied (row - col) values in a Set.
 *
 * 3. Right Diagonal Check (/)
 *    - All cells on the same right diagonal have:
 *          row + col
 *      equal.
 *    - Example:
 *          (0,2), (1,1), (2,0)
 *          row + col = 2
 *    - Store occupied (row + col) values in a Set.
 *
 * Before placing a queen:
 *
 *    if (
 *        column.has(col) ||
 *        leftDiagonal.has(row - col) ||
 *        rightDiagonal.has(row + col)
 *    )
 *        skip this position;
 *
 * Otherwise:
 *    - Place the queen.
 *    - Mark column and diagonals as occupied.
 *    - Recurse to the next row.
 *    - Backtrack by removing the queen and unmarking
 *      the column and diagonals.
 */
var totalNQueens = function(n) {
    let board = Array.from({length:n},()=> Array(n).fill("."));
    let result = [];
    let column = new Set();
    let leftDiagonal =  new Set();
    let rightDiagonal = new Set();
    Helper(n,board,result,column, leftDiagonal, rightDiagonal,0)
    return result.length;
};

function Helper(n,board,result, column, leftDiagonal, rightDiagonal, row) {
        if(row === n) {
        result.push(board.map(row => row.join("")));
        return;
    }
    for(let col = 0;col < n; col++) {
        let d1 = row - col;
        let d2 = row + col;

        if(column.has(col) || leftDiagonal.has(d1) || rightDiagonal.has(d2)){
            continue;
        }
        board[row][col] = "Q";
        column.add(col);
        leftDiagonal.add(d1);
        rightDiagonal.add(d2);
        Helper(n,board,result, column, leftDiagonal, rightDiagonal, row+1);
        board[row][col] = ".";
        column.delete(col);
        leftDiagonal.delete(d1);
        rightDiagonal.delete(d2);
    }
}