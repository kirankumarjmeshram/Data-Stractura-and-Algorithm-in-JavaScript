// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};
    let n = s.length;
    let m = t.length;
    if(n!==m) return false;

    for(let i=0;i<n;i++){
        if(!sMap[s[i]]){
            sMap[s[i]] =i
        }
        if(!tMap[t[i]]){
            tMap[t[i]] =i
        }
        if(sMap[s[i]] !== tMap[t[i]]) {
            return false;
        }
    }
    return true;
};