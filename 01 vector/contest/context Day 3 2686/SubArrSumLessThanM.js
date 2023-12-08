function SubArrSumLessThanM(N, M, arr){
    let count = 0;
    for(let i = 0; i<N; i++){
        let sum = 0;
        for(let j = i; j<N; j++){
            sum +=arr[j];
            if(sum < M){
                count++;
            }
        }
    }
    return count;
}