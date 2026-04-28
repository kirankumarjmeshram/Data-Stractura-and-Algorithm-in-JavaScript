// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
        let n = s.length;
        if(n !== t.length) return false;
        let mapS = {};
        let mapT = {};
        for(let i=0;i<n;i++){
            if(!mapS[s[i]]){
                mapS[s[i]] = 1;
            }else{
                mapS[s[i]]++;
            }
        }

        for(let i=0;i<n;i++){
            if(!mapT[t[i]]){
                mapT[t[i]] = 1;
            }else{
                mapT[t[i]]++;
            }
        }

        for(let el of Object.keys(mapS)){
            if(mapS[el] !== mapT[el]){
                return false
            }
        }
        return true;

    }