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

// Approach: Sieve of Eratosthenes
// We create an array and initially assume all numbers are prime.
// Start iterating from number 2, the first prime number.
// If a number is still marked as prime, mark all its multiples as non-prime.
// Multiples are not prime because they are divisible by the current number.
// Start marking from i * i because smaller multiples were already processed.
// Continue this process for all numbers till sqrt(n).
// After marking, the numbers still marked true are prime numbers.
// Finally, count all remaining prime numbers less than n.
var countPrimes = function(n) {
    let count = 0;
    let isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for(let i=2;i*i<n;i++){
        if(isPrime[i]){
            for(let j=i*i;j<n;j+=i) {
                isPrime[j] = false
            }
        }
    }
    for(let i=0;i<n;i++){
        if(isPrime[i]) count++;
    }

    return count;
};
