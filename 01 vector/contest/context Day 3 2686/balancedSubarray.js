function balancedSubArray(n, arr){
    let sum = 0;
    let maxSize = -1;
    let l = 0;
    let r = 0;
    
    for(let i = 0; i < n-1; i++){
        sum = arr[i] === 0 ? -1 : 1;
        for(let j = i + 1; j < n; j++){
            if(arr[j] === 0){
                sum += -1;
            }else{
                sum += 1;
            }if(sum === 0 && maxSize < j-i+1){
                maxSize = j-i+1;
            }
        }
    }
    return maxSize;
}