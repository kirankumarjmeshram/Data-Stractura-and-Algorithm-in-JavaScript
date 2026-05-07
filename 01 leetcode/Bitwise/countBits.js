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

