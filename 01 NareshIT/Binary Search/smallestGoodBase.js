//https://leetcode.com/problems/smallest-good-base/description/
/**
  Smallest Good Base
  Given an integer n represented as a string, 
  return the smallest good base of n.
  We call k >= 2 a good base of n, 
  if all digits of n base k are 1's.

1. If n is represented as all 1's in base k:
   n = 1 + k + k² + ... + k^m
   where m is the highest exponent (number of digits - 1).

2. For a fixed m (highest power of k), define:
   f(k) = 1 + k + k² + ... + k^m  (where k is base)
   f(k) is strictly increasing as k increases.
   Example (m = 2):
   k = 2 => (1)*2^2 + (1)*2^1 + (1)*2^0  =  7
   k = 3 => (1)*3^2 + (1)*3^1 + (1)*3^0  = 13
   k = 4 => (1)*4^2 + (1)*4^1 + (1)*4^0  = 21
   k = 5 => (1)*5^2 + (1)*5^1 + (1)*5^0  = 31

3. Since f(k) is monotonic (sorted), 
   binary search can be used to find the base k.

   * If f(mid) < n → increase base → left = mid + 1
   * If f(mid) > n → decrease base → right = mid - 1
   * If f(mid) = n → valid base found

4. Smaller base produces more digits of 1.

   Example:
   13 = 111(base 3)
   13 = 11(base 12)

   Therefore, to find the smallest base, try the largest possible m first.

5. Algorithm:

   * Iterate m from 63 down to 1.
   * For each m, binary search the base k.
   * The first valid base found is the smallest good base.

   Time Complexity: O((log n)²)
   Space Complexity: O(1)


JavaScript does not allow mixing BigInt and Number.
Number.MAX_SAFE_INTEGER = 9007199254740991 ≈ 9 × 10^15
But:
10^18 = 1000000000000000000
which is larger than MAX_SAFE_INTEGER.

console.log(1000000000000000000);
// 1000000000000000000

console.log(
  1000000000000000000 + 1 ===
  1000000000000000000
);
// true 
The +1 is lost due to precision limits.

BigInt fixes this
const n = 1000000000000000000n;

console.log(n + 1n);
// 1000000000000000001n
No precision loss.
 * */ 

//for 10^18 ~= 2^60
// base (k)  = the numeral system base (e.g., 2, 3, 10, ...)
//size      = number of digits '1' in the representation (111 → size = 3)
//m         = highest exponent in 1 + k + k² + ... + k^m, so m = size - 1

//in fn getVal
// getVal(size, base) computes the value of 111...111 (size digits) in the given base.
// Multiplying by base shifts digits left, and +1n appends a new '1':
//
// With +1n (base = 5):
// 1 -> 1*5+1 = 6   = 1 + 5
// 6 -> 6*5+1 = 31  = 1 + 5 + 25
// 31->31*5+1 =156  = 1 + 5 + 25 + 125
//
// Without +1n:
// 1 -> 5 -> 25 -> 125
// which gives only powers of base, not 111...111.
function getVal(size, base) {
    let val = 1n;
    for(let i=1;i<size;i++) {
        val = base * val + 1n;
    }
    return val;
}

var smallestGoodBase = function(n) {
    n = BigInt(n);
    
    // let maxSize = n.toString(2).length;
    let maxSize = 60; // as n ranges 10^18 ~= 2^60 so high base // ie max exponent eg k^m
    let minSize = 2 // 
    let maxBase = n - 1n;
    let minBase = 2n;

    for(let size = maxSize; size >= minSize; size--) {
        let high = maxBase, low = minBase;
        
        while(low < high){
            let mid = low + (high - low)/2n;
            if(getVal(size, mid) >=n){
                high = mid;
            }else{
                low = mid + 1n
            }

        }
        const val = getVal(size, high);
        if(val === n) {
            return String(high)
        }
    }
};


