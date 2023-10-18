function numberOfWaysToMakeChanges (n, denoms){
    const ways = new Array(n+1).fill(0);
    ways[0] =1;
    for(let denom of denoms) {
        for(let i =1; i < n+1; i++){
            if(denom <= i){
                ways[i] += ways[i-denom]
            }
        }
    }
    return ways[n];
}