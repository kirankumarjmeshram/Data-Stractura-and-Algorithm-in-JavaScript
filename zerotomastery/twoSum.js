const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

//Brute Force
const findTwoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    
    const numberToFind = target - nums[i];

    for(let j = i + 1; j < nums.length; j++) {
      if(numberToFind === nums[j]) {
        return [i, j];
      }
    }
  }

  return null;
};

console.log(findTwoSum(numsArray, targetToFind));