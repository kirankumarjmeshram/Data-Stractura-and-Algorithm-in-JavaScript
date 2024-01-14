function countPossibleMoves(i, j, N) {
    const chessboard = new Array(10).fill(null).map(() => new Array(10).fill(false));
    
    function dfs(i, j, N) {
      if (N === 0) {
        return 1;
      }

      chessboard[i][j] = true;
      
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
  