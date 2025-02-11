// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};
    let n = s.length;
    let m = t.length;
    if(n!==m) return false;

    for(let i=0;i<n;i++){
        let sChar = s[i];
        let tChar = t[i];

        if((sMap[sChar] && sMap[sChar] !== tChar) || (tMap[tChar] && tMap[tChar] !== sChar)) {
            return false;
        }
        sMap[sChar] = tChar;
        tMap[tChar] = sChar

    }
    return true;
};

console.log(isIsomorphic("egg", "add"))  // true
console.log(isIsomorphic("foo", "bar")); // false