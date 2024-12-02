// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let n = strs.length;
    let res = '';

    for(let i=0;i<strs[0].length;i++) {
        for(let s of strs) {
            if (i=== s.length || s[i] !== strs[0][i]){
                return res;
            }
        }
        res += strs[0][i]
    }
    return res;
};