function minimumPassesOfMatrix(matrix) {
    // Write your code here.
    const passes = convertNegatives(matrix);
    return !containsNegative(matrix) ? passes - 1 : -1;
  }
  function convertNegatives(matrix) {
    let nextPassQueen = getAllPositivePositions(matrix);
    let passes = 0;
  
    while (nextPassQueen.length > 0) {
      const currentPassQueen = nextPassQueen;
      nextPassQueen = [];
      while (currentPassQueen.length > 0) {
        const [currentRow, currentCol] = currentPassQueen.shift();
        const adjacentPosition = getAdjaentPositions(currentRow, currentCol, matrix);
        for (let position  of adjacentPosition) {
          const [row, col] = position;
          const value = matrix[row][col];
          if(value <0){
            matrix[row][col] = (matrix[row][col])*-1;
            nextPassQueen.push([row, col]);
          }
        }
      }
      passes++;
    }
    return passes;
  }
  function getAllPositivePositions(matrix) {
    const positivePositions = [];
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        const value = matrix[row][col];
        if(value > 0) positivePositions.push([row, col]);
      }
    }
    return positivePositions
  }
  function getAdjaentPositions(row, col, matrix) {
    const adjacentPositions= [];
    if(row > 0) adjacentPositions.push([row-1, col]);
    if(row < matrix.length-1) adjacentPositions.push([row+1, col]);
    if(col > 0) adjacentPositions.push([row, col-1]);
    if(col < matrix[0].length-1) adjacentPositions.push([row, col+1]);
    return adjacentPositions;
  }
  function containsNegative(matrix) {
    for (let row  of matrix) {
      for (let value of row) {
        if(value < 0) return true;
      }
    }
    return false;
  }