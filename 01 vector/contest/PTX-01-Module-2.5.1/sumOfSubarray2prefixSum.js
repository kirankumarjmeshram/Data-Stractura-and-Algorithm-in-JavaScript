function sumOfSubarray(n,q,arr,lrs){
    let prefixSum = [0];
    for(let i=0;i<n;i++){
        prefixSum[i+1] = prefixSum[i]+arr[i];
    }
    // console.log(prefixSum);

    for(let i=0;i<q;i++){
        const [l,r] = lrs[i];
        console.log(prefixSum[r]-prefixSum[l-1]);
    }
}