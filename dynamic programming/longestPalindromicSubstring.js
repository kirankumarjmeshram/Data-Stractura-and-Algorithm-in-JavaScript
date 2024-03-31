/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let res = '';
    resLen = 0;
    for(let i=0;i<n;i++){
        let l =i;
        let r = i;
        while(l>=0 && r <n && s[l]==s[r]){
            if((r-l+1)> resLen){
                res = s.slice(l,r+1)
                resLen = r-l+1
            }
            l-=1;
            r+=1

        }

        l =i;
        r = i+1;
        while(l>=0 && r <n && s[l]==s[r]){
            if((r-l+1)> resLen){
                res = s.slice(l,r+1)
                resLen = r-l+1
            }
            l-=1;
            r+=1

        }
    }
    return res

};
