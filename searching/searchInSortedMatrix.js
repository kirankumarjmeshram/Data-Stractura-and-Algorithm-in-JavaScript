// Staircase Search
// Intuition
// Since each row is sorted left-to-right and each column is sorted top-to-bottom, we can search smartly instead of checking every cell.

// Start at the top-right corner:

// If the current value is greater than the target → move left (values decrease).
// If it is smaller than the target → move down (values increase).
// This works like walking down a staircase—each step eliminates an entire row or column.
// We keep moving until we either find the target or move out of bounds.

function searchInSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length-1;
    while(row<matrix.length && col >=0){
        if(matrix[row][col] > target){
            col--;
        }if(matrix[row][col]<target){
            row++
        }else if(matrix[row][col]===target){
            return [row,col]
        }
    }
        return [-1,-1]
    }

   console.log(searchInSortedMatrix( [
        [1, 4, 7, 12, 15, 1000],
        [2, 5, 19, 31, 32, 1001],
        [3, 8, 24, 33, 35, 1002],
        [40, 41, 42, 44, 45, 1003],
        [99, 100, 103, 106, 128, 1004]
      ],
      44))//[ 3, 3 ]

      