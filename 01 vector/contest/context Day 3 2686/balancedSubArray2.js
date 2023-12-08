function balancedSubArray(n, arr){
    let sum = 0;
    let maxSize = 0;
    let map = {};
    for(let i = 0; i < n; i++){
        arr[i] = arr[i] === 0 ? -1 : 1;
    }
    
    for(let i = 0; i < n; i++){
        sum+=arr[i];
        if(sum===0){
            maxSize = i+1;
        }
        if(map[sum]){
            if(maxSize<i-map[sum]){
                maxSize = i-map[sum];
            }
        }else{
            map[sum] = i;
        }
    }
    return maxSize;
}