//https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

var jump = function(nums) {
    let jumps = 0;
    let left =0;
    let right =0;
    let n = nums.length;
    while(right <n-1){
        let farthest = 0;
        for(let i=left;i<=right;i++){
            farthest = Math.max(farthest, i+nums[i]);
        }
        left = right+1
        right = farthest
        jumps+=1
    }
    return jumps;
}