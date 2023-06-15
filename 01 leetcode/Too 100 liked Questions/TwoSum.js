// https://leetcode.com/problems/two-sum/?envType=featured-list&envId=top-100-liked-questions
var twoSum = function(nums, target) {
 
    let obj = {};
    for(let i =0; i<nums.length;i++){
        obj[nums[i]] = i;
    }
    
    for(let i =0; i<nums.length;i++){
        let idx1 = nums[i];
        let diff = target - idx1;
        if(obj[diff] && i !==obj[diff]){
            return [i,obj[diff]]
        }
    }

};