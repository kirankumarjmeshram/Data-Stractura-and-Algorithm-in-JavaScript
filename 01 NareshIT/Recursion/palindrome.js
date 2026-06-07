
function palindrome(str, left, right){
    if(left>=right) return true;
    if(str[left] !== str[right]) return false;
    return palindrome(str, left+1, right-1)
}

console.log(palindrome("abcba",0,4));
console.log(palindrome("abctrba",0,6));
 