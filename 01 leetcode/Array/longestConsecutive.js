//https://leetcode.com/problems/longest-consecutive-sequence/

// Each number can become the start of a sequence only once (!set.has(num - 1)), 
// and every number is visited at most once inside the while loop. 
// Therefore, the total work across all while loops is O(n), 
// making the overall complexity O(n).


var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;
    for(let num of set){
        if(!set.has(num-1)){
            let count = 1;
            while(set.has(num + count)){
                count++;
            }
            longest = Math.max(longest, count)
        }
    }
    return longest;
};