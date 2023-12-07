function elementInMiddle(n, arr){
    for(let i = 1; i < n-1 ; i++){
        if (isMiddle(arr, n, i)){
            return arr[i];
        }
    }
    return -1;
}

function isMiddle(arr, n, i){
    let l = i-1;
    let r = i+1;
    while(l>=0){
        if(arr[l] > arr[i]){
            return false;
        }else{
            l--;
        }
    }
    
    while(r<n){
        if(arr[r] < arr[i]){
            return false;
        }else{
            r++;
        }
    }
    return true;
}