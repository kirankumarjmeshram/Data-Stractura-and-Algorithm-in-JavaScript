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