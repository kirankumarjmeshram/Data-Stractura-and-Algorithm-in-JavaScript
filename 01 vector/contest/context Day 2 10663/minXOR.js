function minXor(n, arr){
    let minXor = Math.pow(10,9);
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let currentXor = arr[i]^arr[j];
            minXor = Math.min(minXor, currentXor);
        }
    }
    return minXor;
}