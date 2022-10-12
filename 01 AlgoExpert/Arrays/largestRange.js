function largestRange(array) {
    // Write your code here.
    let bestRange = [];
    let longestLength = 0;
    const nums = {};
    for (let num of array) {
      nums[num] = true;
    }
    for(const num of array){
      if(!nums[num]) continue;
      nums[num] = false;
      let currentLength = 1;
      let left = num -1;
      let right = num+1;
      while (left in nums) {
        nums[left] = false;
        currentLength++;
        left--;
      }
      while(right in nums){
        nums[right] = false;
        currentLength++;
        right++;
      }
      if(currentLength > longestLength){
        longestLength = currentLength;
        bestRange = [left+1, right-1]
      }
    }
    return bestRange;
  }