function countPossibleMoves(i, j, N) {
    // Initialize the chessboard
    const chessboard = new Array(10).fill(null).map(() => new Array(10).fill(false));
    
    // Helper function to count the number of possible moves
    function dfs(i, j, N) {
      // Base case: if N is 0, we have explored all possible squares
      if (N === 0) {
        return 1;
      }
      
      // Mark the current square as visited
      chessboard[i][j] = true;
      
      // Count the number of possible moves from the current square
      let count = 0;
      const moves = [
        [-2, -1], [-2, 1], [2, -1], [2, 1],
        [-1, -2], [-1, 2], [1, -2], [1, 2]
      ];
      for (const [di, dj] of moves) {
        const ni = i + di;
        const nj = j + dj;
        if (ni >= 1 && ni <= 10 && nj >= 1 && nj <= 10 && !chessboard[ni - 1][nj - 1]) {
          count += dfs(ni, nj, N - 1);
        }
      }
      

      chessboard[i][j] = false;
      
      return count;
    }

    return dfs(i, j, N);
  }
  
  console.log(countPossibleMoves(3, 3, 1)); // Output: 8
  