function lifeBoats(n,k, arr){
    arr = arr.sort((a,b)=>a-b);
    let l = 0;
    let r = n-1;
    let count =0;
    while(l<=r){
        if(arr[l]+arr[r]>k){
            count++;
            r--;
        }else{
            count++;
            l++;
            r--;
        }
    }
    return count;
}