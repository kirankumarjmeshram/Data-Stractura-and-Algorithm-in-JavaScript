function transposeMatrix(matrix) {
    // Write your code here.
    let transposeM = [];
    let n = matrix[0].length;
    let m = matrix.length;
    for(let i=0;i<n;i++){
      let newRow = [];
      for(let j=0;j<m;j++){
          newRow.push(matrix[j][i])
      }
      transposeM.push(newRow)
    }
    return transposeM ;
  }
  

  /*  [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]
=>

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
*/