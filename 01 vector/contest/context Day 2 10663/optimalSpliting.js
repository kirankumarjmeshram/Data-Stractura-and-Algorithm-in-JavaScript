/**
Given a non-negative integer n, find out the minimum number of elements in which n can be broken into such that each element is a power of 2, and the sum of all the elements result in the integer n.
for ex. 12 can be broken into various forms but the optimal one is 8 + 4 and the answer is 2.
Note- If the input is 0, simply return 0 (Since it cannot be broken further).
write in js
 */

function optimalSplitting(n){
    if(n===0){
        return 0;
    }
    let count = 0;
    while(n>0){
        if(n&1===1){
            count++;
        }
        n = n>>1;
    }
    return count;
}