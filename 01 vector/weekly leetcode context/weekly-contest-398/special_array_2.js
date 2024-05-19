// https://leetcode.com/contest/weekly-contest-398/problems/special-array-ii/
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// var isArraySpecial = function(nums, queries) {
//     let n = queries.length;
//     let ans = [];
//     for(let i=0; i<n;i++){
//         const [a,b] = queries[i];
//         ans.push(CheckArraySpecial (nums,a,b));
//     }
//     return ans;
// };


//   function CheckArraySpecial (nums,a,b) {
//     for(let i=a;i<b;i++){
//         if(nums[i+1]%2===nums[i]%2){
//             return false;
//         }
//     }
//     return true;
    
// };
var isArraySpecial = function(nums, queries) {
    let n = nums.length;
    let specialArr = [];
    for(let i=0;i<n;i++){
        specialArr[i] = nums[i]%2 !==nums[i+1]%2;
    }
    // console.log(specialArr)
    let ans = [];
    for(const [a,b] of queries){
        let special = true
        for(let j=a;j<b;j++){
            if(!specialArr[j]){
                special = false;
                break
            }
        }
        ans.push(special);
    }
    return ans;
};
