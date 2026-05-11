//https://www.geeksforgeeks.org/problems/number-of-open-doors1552/1



//Using Frequency Array

class Solution {

    noOfOpenDoors(n) {
        // code here
        let count = 0
        let arr = new Array(n+1).fill(false);
        for(let i=1;i<=n;i++){
            for(let j=i;j<=n;j+=i) {
                arr[j] = !arr[j]
            }
        }
        for(let i=1;i<=n;i++) {
            if(arr[i]) count++;
        }
        return count;
    }
}





// Optimized Approach

// P  1 2 3 4 5 6 7 8 9 10
// S  C C C C C C C C C C  //Start state
// 1  O O O O O O O O O O
// 2  O C O C O C O C O C
// 3  O C C C O O O C C C
// 4  O C C O O O O O C C
// 5  O C C O C O O O C O
// 6  O C C O C C O O C O
// 7  O C C O C C C O C O
// 8  O C C O C C C C C O
// 9  O C C O C C C C O O
// 10 O C C O C C C C O C

// A door remains open only if it is toggled odd number of times.
// A door is toggled by all its divisors.
// Example:
// Door 12 → divisors: 1,2,3,4,6,12
// 6 divisors → even toggles → closed.
// Divisors normally come in pairs:
// (1,12), (2,6), (3,4)
// So total count is even. ie  C(initially) =>  O C O C O C
// But for perfect squares:
// Door 16 → divisors: 1,2,4,8,16
// Pairs are: (1,16), (2,8), (4,4)
// Here 4 pairs with itself, so one divisor is unpaired. so C(initially) =>  O C O C O
// That makes total divisors odd.
// Hence only perfect squares remain open.

class Solution {
    noOfOpenDoors(n) {
        return Math.floor(Math.sqrt(n));
    }
}