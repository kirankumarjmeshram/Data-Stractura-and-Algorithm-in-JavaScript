function EvenSumOfSubArray(n, arr){
    let count = 0;
    for(let i=0;i<n;i++){
        sum = 0;
        for(let j=i;j<n;j++){
            sum+=arr[j];
            if(sum % 2 === 0){
                count++;
            }
        }
    }
    return count;
}