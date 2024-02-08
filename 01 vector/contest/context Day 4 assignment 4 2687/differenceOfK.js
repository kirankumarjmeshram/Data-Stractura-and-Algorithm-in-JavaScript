function differenceOfK(n,k, arr){
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[j]-arr[i]===k){
                return "Yes";
            }
        }
    }
    return "No";

}