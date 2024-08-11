/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let n = nums.length;
    for(let i=0;i<n;i++) {
        let min = i;
        for(let j=i+1;j<n;j++) {
            if(nums[j] < nums[min]){
                min = j
            }
        }
    [nums[min], nums[i]] =[nums[i],  nums[min]]
    }
    return nums;
};

