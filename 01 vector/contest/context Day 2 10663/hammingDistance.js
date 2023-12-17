function hammingDistance(arr){
    let n =arr[0]^arr[1];
    
    return countSetBit(n);
}
function countSetBit(n){
        let count = 0;
        while(n!==0){
            if(n&1===1){
                count ++;
            }
            n = n>>1;        }
    
    return count;
}