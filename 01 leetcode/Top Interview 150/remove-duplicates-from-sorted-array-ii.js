var removeDuplicates = function(nums) {
    let count =0;
  for (let i=0; i < nums.length; i += 1){
    if (nums[i] !== nums[i + 2]) {
        nums[count] = nums[i];
        console.log({i,count})
        count += 1;
    }
  }
  return count;
};