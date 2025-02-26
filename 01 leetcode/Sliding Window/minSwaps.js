//https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let n= nums.length;
    let totalOnes = 0;
    for(let i=0;i<n;i++){
        if(nums[i] == 1){
            totalOnes += 1;
        }
    }

    let left=0;
    let windowOnes = 0;
    let maxWindowOnes = 0;

    for(let right=0;right<n*2; right++){
        if(nums[right%n]===1){
            windowOnes +=1;
        }
        if(right-left+1 > totalOnes){
            windowOnes -= nums[left%n]
            left+=1
        }
        maxWindowOnes = Math.max(maxWindowOnes, windowOnes)
    }

    return totalOnes-maxWindowOnes;
};