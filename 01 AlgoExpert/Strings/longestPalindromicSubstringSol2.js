function longestPalindromicSubstring(string) {
    // Write your code here.
    let n = string.length;
    let longestStr = '';
    for (let i = 0; i < n; i++) {
        let oddPalSubStr = palindrome(string, i, i);;
        let evenPalSubStr = palindrome(string, i, i + 1);
        if (oddPalSubStr.length > longestStr.length) {
            longestStr = oddPalSubStr;
        }
        if (evenPalSubStr.length > longestStr.length) {
            longestStr = evenPalSubStr;
        }
    }
    return longestStr;
}

function palindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
    }
    return str.slice(left + 1, right);
}
// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
