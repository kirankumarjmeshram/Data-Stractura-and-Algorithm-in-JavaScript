// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let n = nums.length;
    let sum = 0;
    for(let i=0;i<1<<n;i++){
        let sub = 0;
        for(j=0;j<n;j++){
            
            if(i&(1<<j)){
                sub^=nums[j]
            }
            
        }
        sum+=sub;
    }
    return sum;
};