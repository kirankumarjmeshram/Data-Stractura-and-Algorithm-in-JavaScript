var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = Array(n+1).fill(false);
    dp[n] = true;
    for(let i=n-1;i>=0;i--){
        for(let word of wordDict){
            if(i+word.length <= n && s.slice(i,i+word.length) === word){
                dp[i] = dp[i+word.length];
            }
            if(dp[i]){
                break;
            }
        }
    }
    return dp[0];
};


// recursive
var wordBreak = function(s, wordDict) {
    if(s.length === 0){
        return true
    }
    for(let word of wordDict){
        if(s.startsWith(word)){
            if(wordBreak(s.slice(word.length), wordDict)){
                return true
            }
        }
    }
    return false;
}
