//https://www.geeksforgeeks.org/problems/number-of-open-doors1552/1
//Brute force
// User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */

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