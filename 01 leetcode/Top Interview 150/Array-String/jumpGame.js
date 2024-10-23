// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

var canJump = function(nums) {
    let n = nums.length;
    let goal = n-1;
    for(let i=n-2;i>=0;i--){
        if(i+nums[i] >= goal){
            goal = i;
        }
    }
    if(goal === 0){
        return true;
    }else{
        return false;
    }
}