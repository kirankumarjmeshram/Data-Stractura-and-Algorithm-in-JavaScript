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