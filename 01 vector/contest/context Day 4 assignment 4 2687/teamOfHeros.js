function teamOfHeros(N,K, arr){
    let l = 0;
    let r = N-1;
    while(l<r){
        if(arr[l]+arr[r] === K){
            return "Yes"
        }else if(arr[l]+arr[r] > K){
            r--;
        }else{
            l++;
        }
    }
    return "No"
}