function longestPalindromicSubstring(string) {
    // Write your code here.
    let subStrings = createSubstring(string);
    let n = subStrings.length;
    let longestPal = '';
    for (let str of subStrings) {
        if ((str.length > longestPal.length) && isPalindrome(str)) {
            longestPal = str;
        }
    }
    return longestPal;
}
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}
function createSubstring(string) {
    let n = string.length;
    let subStrings = [];
    for (let i = 0; i < n; i++) {
        let subStr = '';
        for (let j = i; j < n; j++) {
            subStr += string[j];
            subStrings.push(subStr);
        }
    }
    return subStrings;
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
