// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.
// Input: mat = [[0,0,0],
//               [0,1,0],
//               [0,0,0]]
// Output:      [[0,0,0],
//               [0,1,0],
//               [0,0,0]]

// Input: mat = [[0,0,0],
//               [0,1,0],
//               [1,1,1]]
// Output:      [[0,0,0],
//               [0,1,0],
//               [1,2,1]]

// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.



// element is the matrix are either 0 or 1
// here we have to find nearest 0 for each element
// so it the element is 0 itself so we don't need to do anything as nearest zero it that element itself so distance is 0.
// and for element 1 we have to find nearest 0 elements distance
//so say here in this example
// Input: mat = [[0,0,0],
//               [0,1,0],
//               [1,1,1]]
// Output:      [[0,0,0],
//               [0,1,0],
//               [1,2,1]]
// in element mat[1][1] there is at one step 0 is there, one one top one on left and one on right so nearest 0 is at distance 1
// like for element mat[2][0] and mat[2][2] nearest is one just above ie at distance 1
// But for element mat[2][1]  0 element is two step above ie at mat[0][1] and one at mat[1][0] ie one step left and one step up ie 2 step one at mat[1][2] ie one step right ie 2 step and one step up ie 2 step 
// so min of these is 2 only 
function nearestZero (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

}