function sumOfSubArray(n, k, arr){
    for(let i=0;i<n;i++){
        sum = 0;
        for(let j=i;j<n;j++){
            sum+=arr[j];
            if(sum === k){
                return "Yes";
            }else if(sum > k){
                break;
            }
        }
    }
    return "No";
}