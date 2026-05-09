// Spiral Matrix III 
https://leetcode.com/problems/spiral-matrix-iii/description/


var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let count = rows*cols;
    let directions = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ];
    let result = [[rStart,cStart]]
    let d = 0;
    let steps = 0 
    
    while(result.length < count){
        if(d%2===0){
            Steps++; 
        }
        // Increase step size every 2 directions
        //
        // Why?
        // Spiral movement pattern is:
        //
        // Right -> 1 step
        // Down  -> 1 step
        // Left  -> 2 steps
        // Up    -> 2 steps
        // Right -> 3 steps
        // Down  -> 3 steps
        //
        // d values:
        // 0 -> right
        // 1 -> down
        // 2 -> left
        // 3 -> up
        //
        // d % 2 === 0 means:
        // d = 0 or d = 2
        // i.e. before Right and Left movement
        //
        // So step increases after every 2 turns

        for(let i=0;i<steps;i++) {
            rStart+=directions[d][0];
            cStart += directions[d][1];
	
            // Boundary conditions as Spiral may go outside matrix boundaries 
            if(rStart < rows && rStart>=0 && cStart<cols && cStart>=0){
                result.push([rStart,cStart])
            } 
        }
        if(result.length === count){
            return result
        }
	
        d=(d+1)%4 
        // Change direction cyclically 
        //keeps d between 0 and 3 ie index of directions
        // Direction index
        // d = 0 -> right
        // d = 1 -> down
        // d = 2 -> left
        // d = 3 -> up
                
    }
    return result;
};

console.log(spiralMatrixIII(5,6,1,4))
// [
//   [ 1, 4 ], [ 1, 5 ], [ 2, 5 ],
//   [ 2, 4 ], [ 2, 3 ], [ 1, 3 ],
//   [ 0, 3 ], [ 0, 4 ], [ 0, 5 ],
//   [ 3, 5 ], [ 3, 4 ], [ 3, 3 ],
//   [ 3, 2 ], [ 2, 2 ], [ 1, 2 ],
//   [ 0, 2 ], [ 4, 5 ], [ 4, 4 ],
//   [ 4, 3 ], [ 4, 2 ], [ 4, 1 ],
//   [ 3, 1 ], [ 2, 1 ], [ 1, 1 ],
//   [ 0, 1 ], [ 4, 0 ], [ 3, 0 ],
//   [ 2, 0 ], [ 1, 0 ], [ 0, 0 ]
// ]


