function sumOfSubArray(N, K, arr){
    for(let i = 0; i<N; i++){
        let sum = 0;
        for(let j = i; j<N; j++){
            sum +=arr[j];
            if(sum === K){
                return "Yes";
            }
        }
    }
    return "No";
}