//https://leetcode.com/problems/subsets/

class Solution 
{
    //Function to return the lexicographically sorted power-set of the string.
    powerSet(s)
    {
        // code here
        let ans = [];
        this.subset(s,'',0, ans);
        return ans;
    }
    subset(str, curr,i, ans){
        if(i==str.length){
            ans.push(curr);
            return;
        }
        this.subset(str, curr, i+1, ans);
        this.subset(str, curr+str[i], i+1, ans);
    }
}

//for arrays

var subsets = function(nums) {
    let subSets = [];
    Helper(nums,subSets,[],0);
    return subSets;
};

function Helper(nums,subSets,current,index) {
    if(index===nums.length) {
        subSets.push(current);
        return;
    }
    Helper(nums,subSets,current,index+1);
    Helper(nums,subSets,[...current, nums[index]],index+1)
}