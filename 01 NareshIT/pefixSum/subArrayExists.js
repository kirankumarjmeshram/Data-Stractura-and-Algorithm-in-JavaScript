//https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1

class Solution {
    // Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr) {
        // code here
        let prefixSum = 0;
        let map = {};
        for(let num of arr) {
            prefixSum +=num;
            if(prefixSum ===0 || map[prefixSum]){
                return true;
            }
            map[prefixSum] = true;
        }
    return false;
    }
}