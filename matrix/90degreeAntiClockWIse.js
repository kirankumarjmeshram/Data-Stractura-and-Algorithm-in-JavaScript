function rotateBy90(R,matrix){
    // for(let i=0;i<R;i++){
    //     for(let j=i;j<R;j++){
    //        let temp = matrix[i][j];
    //           matrix[i][j] = matrix[j][i];
    //             matrix[j][i] = temp;
    //     }
    // }

    // for(let i=0;i<R;i++){
    //     for(let j=0;j<Math.floor(R/2);j++){
    //         let temp = matrix[i][j];
    //         matrix[i][j] = matrix[R-i-1][j];
    //         matrix[R-i-1][j] = temp;
    //     }
    // }

    // for(let i=0;i<R;i++){
    //     console.log(matrix[i].join(" "))
    // }

    for (let i = 0; i < R / 2; i++)
    {
        for (let j = i; j < R - i - 1; j++)
        {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][R - 1 - i];
            matrix[j][R - 1 - i] = matrix[R - 1 - i][R - 1 - j];
            matrix[R - 1 - i][R - 1 - j] = matrix[R - 1 - j][i];
            matrix[R - 1 - j][i] = temp;
        }
    }
       for(let i=0;i<R;i++){
        console.log(matrix[i].join(" "))
    }
   
}


            // rotateBy90(4,[ [ 1, 2, 3, 4 ], 
            //                [ 5, 6, 7, 8 ], 
            //                [ 1, 2, 3, 4 ], 
            //                [ 5, 6, 7, 8 ] 
            //             ])

            rotateBy90(4,[ [ 'a', 'b', 'c','d' ], 
                            [ 5, 6, 7, 8 ], 
                            [ 1, 2, 3, 4 ], 
                            [ 5, 6, 7, 8 ] 
                         ])

                        /*
                        4 8 4 8
                        3 7 3 7
                        2 6 2 6
                        1 5 1 5
                        */