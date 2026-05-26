// Largest number that divides x and is co-prime with y
//https://www.geeksforgeeks.org/dsa/largest-number-divides-x-co-prime-y/


// Start with x as the initial answer because we want the largest divisor of x.
// Check if x and y are co-prime using gcd(x, y).
// If they are not co-prime, find their gcd which represents the common factors.
// Remove those common factors from x by doing x = x / gcd(x, y).
// Repeat this process until gcd(x, y) == 1, then return x as the final answer.

// Two numbers are co-prime if their GCD is 1 (no common factor other than 1).  
// So we keep reducing x by removing common factors with y until gcd(x, y) becomes 1.

function largestCoprimeDivisor(x,y){
    while(gcd(x,y)!==1){
        x = x/gcd(x,y);
    }
    return x;
}

function gcd(a,b){
    while(b){
        [a,b] = [b, a%b];
    }
    return a;
}

console.log(largestCoprimeDivisor(15,3))//5
