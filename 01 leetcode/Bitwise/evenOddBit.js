//https://leetcode.com/problems/number-of-even-and-odd-bits/
var evenOddBit = function(n) {
    let ans = [0,0];
    let nBinary = n.toString(2);
    let length = nBinary.length;
    let bIdx = 0;
    for(let i=length-1;i>=0;i--) {
        if(nBinary[i]=== '1'){
            if(bIdx%2===0){
                ans[0]++;
            }else{
                ans[1]++;
            }
        }
        bIdx++;
    }
    return ans;
}

var evenOddBitSol2 = function(n) {
   
    let ans = [0,0];
    let bIdx = 0;
    while(n){
        if(n&1){
            if(bIdx%2 === 0) {
                ans[0]++
            }else{
                ans[1]++
            }
        }  
        n = n>>1;
        bIdx++;
    }
    return ans;
}

