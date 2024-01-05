function nonAttackingQueens(n) {
    // Write your code here.
    //each index of colu,nPlacement represents a row of the chessboard
    //and the value at each index is the column (on the relevant row) where the queen is currently placed
    const columnPlacement = new Array(n).fill(0);
    return getNumOfNonAttackingQueenPlacement(0, columnPlacement, n);
  }
  function getNumOfNonAttackingQueenPlacement(row, columnPlacement,n){
    if(row === n){
      return 1
    }
    let validPlacement = 0;
    for(let col = 0; col < n; col++){
      if(isSafe(row,col,columnPlacement)){
        columnPlacement[row] = col;
        validPlacement +=getNumOfNonAttackingQueenPlacement(row+1, columnPlacement, n);
      }
    }
    return validPlacement;
  }
  
  function isSafe(row, col, columnPlacement) {
    for(let i = 0; i < row; i++){
      const columnToCheck = columnPlacement[i];
      const sameColumn = columnToCheck === col;
      const onDigonal = Math.abs(columnToCheck -col) === row - i;
  
      if(sameColumn || onDigonal){
        return false;
      }
    }
    return true;
  }
  
  // Do not edit the line below.
  exports.nonAttackingQueens = nonAttackingQueens;
  