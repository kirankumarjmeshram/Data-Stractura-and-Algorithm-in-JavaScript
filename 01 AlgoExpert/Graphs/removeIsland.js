function removeIslands(matrix) {
    // Write your code here.
    const onesConnectedToBorder = [];
    for(let row = 0; row < matrix.length; row++){
      onesConnectedToBorder.push([]);
      for(let col =0; col<matrix[0].length;col++){
        onesConnectedToBorder[row].push(false);
      }
    }
    for(let row = 0; row < matrix.length; row++){
      for (let col = 0; col < matrix[row].length; col++) {
         const rowIsBorder = row == 0 || row == matrix.length-1;
         const colIsBorder = col == 0 || col == matrix[row].length-1;
        const isBorder = rowIsBorder || colIsBorder;
        if(!isBorder){
          continue;
        }if(matrix[row][col] !== 1){
          continue;
        }
          findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder);
      }
    }
    for(let row = 1; row < matrix.length-1; row++){
        for (let col = 1; col < matrix[row].length-1; col++) {
          if(onesConnectedToBorder[row][col]){
            continue;
          }
            matrix[row][col] =0;   
        }
      } 
     return matrix;
  }
  function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder){
    const stack = [[startRow, startCol]];
    while (stack.length > 0) {
      const currentPosition = stack.pop();
      const [currentRow, currentCol] = currentPosition;
      const alreadyVisited = onesConnectedToBorder[currentRow][currentCol];
      if(alreadyVisited) continue;
      
      onesConnectedToBorder[currentRow][currentCol] = true;
      
      const neighbours = getNeighbours(matrix, currentRow, currentCol);
      for ( const neighbour of neighbours){
        const [row, col] = neighbour;
        if(matrix[row][col] != 1)continue;
        stack.push(neighbour)
      }
      
    }
  }
  
    function getNeighbours(matrix, row, col) {
      const neighbours = [];
      const numRows = matrix.length;
      const numCols = matrix[row].length;
      if (row -1 >=0) {
        neighbours.push([row-1, col]) // UP
      }if (row +1 <numRows) {
        neighbours.push([row+1, col]) // DOWN
      }if (col -1 >=0) {
        neighbours.push([row, col-1]) // LEFT
      }if (col+1 < numCols) {
        neighbours.push([row, col+1]) // RIGHT
      }
      return neighbours;
    }
    
  