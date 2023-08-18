function rotateBy90Clockwise(N, matrix){
    for (let i = 0; i < Math.floor(N / 2); i++) {
            for (let j = i; j < N - i - 1; j++) {
 
                var temp = matrix[i][j];
                matrix[i][j] = matrix[N - 1 - j][i];
                matrix[N - 1 - j][i] = matrix[N - 1 - i][N - 1 - j];
                matrix[N - 1 - i][N - 1 - j] = matrix[j][N - 1 - i];
                matrix[j][N - 1 - i] = temp;
            }
        }
  for(let i=0;i<N;i++){
      console.log(matrix[i].join(" "))
  }
}

rotateBy90Clockwise(4,[ [ 5, 1, 5, 1 ], 
                                    [ 6, 2, 6, 2 ], 
                                    [ 7, 3, 7, 3 ], 
                                    [ 8, 4, 8, 4 ] ])
                                    
                                    // 8 7 6 5
                                    // 4 3 2 1
                                    // 8 7 6 5
                                    // 4 3 2 1

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