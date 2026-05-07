// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = []
    for(let i=0;i<=n;i++) {
        ans.push(countSetBit(i))
    }
    
    return ans;
};

function countSetBit(num) {
        let count = 0;
        while(num){
            if(num&1){
                count++
            }
            num>>=1;
        }
        return count;
}

var countBitsSol2 = function(n) {
    let ans = new Array(n+1).fill(0);
    let offSet = 1;
    for(let i=1;i<=n;i++) {
        if (offSet*2 === i){
            offSet = i;
        }
        ans[i] = 1 + ans[i-offSet]
    }
    
    return ans;
};