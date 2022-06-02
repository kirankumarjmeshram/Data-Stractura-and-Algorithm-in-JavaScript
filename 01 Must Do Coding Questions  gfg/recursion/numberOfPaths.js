//https://practice.geeksforgeeks.org/problems/number-of-paths0926/1/?track=mdcq-recursion&batchId=184
//The problem is to count all the possible paths from top left to bottom right of a MxN matrix with the constraints that from each cell you can either move to right or down
function numberOfPaths( m,  n) {
    // Code Here
    if(m==1 || n==1){
        return 1;
    }
    return numberOfPaths(m,n-1)+numberOfPaths(m-1,n);
}

console.log(numberOfPaths(3,3))