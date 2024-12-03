// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150



var strStr = function(haystack, needle) {
    if(haystack.length < needle.length){
        return -1;
    }
    for(let i=0;i<= haystack.length - needle.length;i++ ) {
        if(haystack.substring(i,i + needle.length) === needle){
            return i;
        }
    }

    return -1;
};

var strStr2 = function(haystack, needle) {
    return haystack.indexOf(needle);
};