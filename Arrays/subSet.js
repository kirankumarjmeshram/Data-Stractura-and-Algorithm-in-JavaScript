//https://leetcode.com/problems/subsets/description/
//using bitmask

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n = nums.length;
    // let subSets = [[]];
    // for (let num of nums) {
    //     let length = subSets.length;
    //     for(let j = 0;j<length;j++){
    //         let subSet = subSets[j];
    //         subSets.push([...subSet, num])
    //         // subSets.push(subSet.concat(num))
    //     }
    // }
    // using bit masking
    let subSets = []
    for(let i=0;i< 1<<n;i++){
        let sub = [];
        for(let j = 0; j<n;j++) {
            if(i& (1<<j)){
                sub.push(nums[j])
            }
        }
        subSets.push(sub)
    }

    return subSets;
};