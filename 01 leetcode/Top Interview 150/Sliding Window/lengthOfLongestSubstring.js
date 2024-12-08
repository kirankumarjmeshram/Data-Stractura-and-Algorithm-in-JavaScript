// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for(let right = 0; right < s.length; right ++) {
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left ++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left +1)
    }
    return maxLength;
};