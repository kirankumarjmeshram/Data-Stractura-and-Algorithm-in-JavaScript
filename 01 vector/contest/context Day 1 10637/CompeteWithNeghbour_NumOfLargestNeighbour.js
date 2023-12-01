function largeNeighbour(n, arr){
    let count = 0;
    if(arr[0]>arr[1]){
        count++
        }
    if(arr[n-1]>arr[n-2]){
        count++
    }
    for(let i=0;i<n;i++){
        if(arr[i-1] <arr[i] && arr[i+1] < arr[i])
            count++;
    }
    return count;
}