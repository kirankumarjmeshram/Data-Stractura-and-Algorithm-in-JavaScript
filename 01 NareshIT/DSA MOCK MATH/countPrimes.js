//https://leetcode.com/problems/count-primes/

//BF Approach
//i <= Math.sqrt(n) because Any composite number must have at least one factor less than or equal to √n.
//One factor is always ≤ √n, So checking beyond √n is unnecessary.
var countPrimes = function(n) {
    let count = 0;
    for(let i=2;i<n;i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
};
function isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
}
