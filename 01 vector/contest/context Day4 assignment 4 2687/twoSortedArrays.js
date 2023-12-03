function twoSortedArrays(n, arr1, arr2){
    let l = 0;
    let r = n-1;
    let count=0;
    while(l<n && r>=0){
        if(arr1[l]==arr2[r]){
            count++;
            l++;
            r--;
        }else if(arr1[l]>arr2[r]){
            r--;
        }else{
            l++;
        }
    }
    return count;
}