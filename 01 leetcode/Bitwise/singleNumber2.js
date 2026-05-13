/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = 0;
    let twos = 0;
    for (const num of nums) {
        ones ^= (num & ~twos);
        twos ^= (num & ~ones);
    }
    return ones;    
};

//Using Bit Count Approach
var singleNumber2 = function(nums) {
    let ans = 0;
    for(let i=0;i<32;i++) {
        let count = 0;
        for(let num of nums) {
            if((num>>1)&1){
                count++
            }
        }
        if(count%3 !== 0){
            ans |= (1<<i)
        }
    }
    return ans
};

//Using hashmap
var singleNumber3 = function(nums) {
    let map = new Map();
    for (const num of nums) {
       map.set(num,(map.get(num)||0)+1)
    }
    for(let [key, val] of map){
        if(val === 1){
            return key;
        }
    }   
};

//Using Sorting
var singleNumber4 = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let n = nums.length;
    for (let i=0;i<n;i+=3) {
      if(nums[i]!==nums[i+1]){
        return nums[i]
      }
    }
    return nums[n-1];   
};

console.log(singleNumber2([2,2,2,4,4,4,5,6,6,6]))
