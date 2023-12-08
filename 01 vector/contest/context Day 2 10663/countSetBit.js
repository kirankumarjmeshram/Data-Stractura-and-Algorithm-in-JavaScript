function numOfSetBit(n){
    let count = 0;
    while(n>0){
        if(n%2 === 1){
            count++;
        }
        n = Math.floor(n/2);
    }
    
    return count;
}