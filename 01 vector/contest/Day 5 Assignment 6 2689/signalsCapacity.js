function signalsCapacity(n, arr){
    let ans = [1];
    for(let i=1;i<n;i++){
        ans[i]=1;
        // both loops are working
        // for(let j =i-1;j>=0 && arr[i]>=arr[j];j--){
        //     ans[i]++;
        // }
        for(let j =i-1;j>=0;j--){
            if(arr[i]<arr[j]){
                break;
            }else{
                ans[i]++;
            }
        }
    }
    return ans.join(" ");
}
