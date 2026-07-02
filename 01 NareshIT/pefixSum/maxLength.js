//https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

class Solution {
    maxLength(arr) {
        // code here
        let prefixSum = 0;
        let longSubarrLen = 0;
        let map = {};
        for(let i=0;i<arr.length;i++) {
            prefixSum +=arr[i];
            if(prefixSum===0){
                longSubarrLen = i+1;
            }
            //if(map[prefixSum] ! === undefined) same as if(map[prefixSum] || map[prefixSum] === 0)
            if(map[prefixSum] || map[prefixSum] === 0){
                longSubarrLen = Math.max(longSubarrLen, i-map[prefixSum]);
            }else{
                map[prefixSum] = i;
            }
            
        }
    return longSubarrLen;
    }
}