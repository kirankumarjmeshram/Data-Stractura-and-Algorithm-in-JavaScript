function sumOfSubarray(n,q,arr,lrs){
    for(let i=0;i<q;i++){
        let sum = 0;
        let [l,r] = lrs[i];
        for(let j=l-1;j<r;j++){
            sum+=arr[j];
        }
        console.log(sum);
    }
}