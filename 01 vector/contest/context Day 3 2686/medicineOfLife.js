function MedicineOfLife(N, K, arr){
    for(let i=0;i<N;i++){
        for(let j=i+1; j<N;j++){
            if(arr[i]+arr[j] === K){
                return "Possible";
            }
        }
    }
    return "Impossible";
}