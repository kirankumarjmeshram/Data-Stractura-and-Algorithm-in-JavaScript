var removeDuplicates = function(nums) {
    for(let i =1;i<nums.length;i++){
        if(nums[i-1] == nums[i]){
            nums.splice(i,1);
            i--;
        }

    }
    return console.log(nums)
};