// Memoisation
function longestPalindromeSubseq(s){
    cache = {}
    for(let i =0;i<s.length;i++){
        dfs(i,i); // for odd length
        dfs(i,i+1) // for even length
    }
    return Math.max(...Object.values(cache))

    function dfs(i, j){
        if(i<0 || j== s.length){
            return 0;
        }
        if (i+','+j in cache){
            return cache[i+','+j];
        }
        if(s[i] === s[j]){
            length = i==j ? 1 : 2;
            cache[i+','+j] = length + dfs(i-1,j+1);
        }
        else {
            cache[i+','+j] = Math.max(dfs(i-1,j), dfs(i,j+1))
        }
        return cache[i+','+j]
    }
}

console.log(longestPalindromeSubseq("bbbab"))