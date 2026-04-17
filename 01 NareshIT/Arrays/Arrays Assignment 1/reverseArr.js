// Input 1: arr = [1, 2, 3, 4, 5]
// Output 1: [5, 4, 3, 2, 1]
// Explanation 1: Reverse of the above array is [5, 4, 3, 2, 1].
// Input 2: arr = [1, 2]
// Output 2: [2, 1]Constraints:
// 1<=arr.length<=10000

//Given an array of N integers. Reverse the given array.
function reverseArr (arr){
    let n = arr.length;
    for(let i=0;i<Math.floor(n/2);i++){
        let temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;
    }
    return arr;
}

console.log(reverseArr([1,2,3,4,5]))


//Given a zero-based permutation nums (0-indexed), build an array ans of the same length where
// ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1
// (inclusive).

// Input 1: nums = [0,2,1,5,3,4]
// Output 1: [0,1,2,4,5,3]
// Explanation 1: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]],
// nums[nums[5]]]
// ans = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]] = [0,1,2,4,5,3]

// Input 2: nums = [5,0,1,2,3,4]
// Output 2: [4,5,0,1,2,3]

// Constraints:
//  1 <= nums.length <= 1000
//  0 <= nums[i] <= nums.length
//  The elements in nums are distinct.

function zeroPermutation(arr){
    let n = arr.length;
    let ans = new Array(n)
    for(let i=0;i<n;i++) {
        ans[i] = arr[arr[i]]
    }
    return ans;
}
console.log(zeroPermutation([5,0,1,2,3,4]))


/**
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i]
== nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
Input 1: nums = [1,2,1]
Output 1: [1,2,1,1,2,1]
Explanation 1: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Input 2: nums = [1,3,2,1]
Output 2: [1,3,2,1,1,3,2,1]
Constraints:
 1 <= nums.length <= 1000
 1 <= nums[i] <= 103
 */

function doubleArr (arr){
    return [...arr,...arr];
}
console.log(doubleArr([1,2,3,2,4]))