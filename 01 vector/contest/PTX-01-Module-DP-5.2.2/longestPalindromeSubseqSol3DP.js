function longestPalindromeSubseq(s){
    let n = s.length;
    let table = [];
    let res = 0;
    for (let i = 0; i <= n; i++) {
        table[i] = [];
        for (let j = 0; j <= n; j++) {
            table[i][j] = 0;
        }
    }

    for (let i=0; i<n;i++){
        dp[i][j] = 1;
        for(let j=i-1; j>=0;j--){
            if(s[i] === s[j]){
                if(i-j === 1) {
                    dp[i][j] =  2 
                }else{
                    dp[i][j] = dp[i-1][j+1] + 2
                }
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res;
}