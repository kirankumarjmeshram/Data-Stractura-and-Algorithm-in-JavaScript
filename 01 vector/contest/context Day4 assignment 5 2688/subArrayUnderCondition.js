function SubArrayUnderCondition(n, arr){
    // console.log(n,arr);
    for(let i=0;i<n;i++){
        sum = 0;
        for(let j=i;j<n;j++){
            sum+=arr[j];
            if(sum === 0){
                console.log(i+" "+j);
            }
        }
    }
}