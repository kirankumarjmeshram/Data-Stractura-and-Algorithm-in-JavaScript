//https://practice.geeksforgeeks.org/problems/pascal-triangle0652/1/?track=mdcq-recursion&batchId=184#
const nthRowOfPascalTriangle = (N) =>{
       
    //code here
    let ans = [1];
    let prev = 1;
    for(let i=1;i<=N;i++){
        let curr = (prev*(N-i+1))/i;
        ans.push(curr);
        prev = curr;
    }
    return ans
}

console.log(nthRowOfPascalTriangle(5))//[ 1, 5, 10, 10, 5, 1 ]