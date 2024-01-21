function mergeSort(array,l,r){
    if(l>=r){
        return;
    }
    let m = Math.floor((l+r)/2);
    mergeSort(array,l,m);
    mergeSort(array,m+1,r);
    merge(array, l, m, r);

    return array;
}

function  merge(array, l, m, r){
    let n1 = m-l+1;
    let n2 = r-m;
    let L = [];
    let R = [];
    for(let i=0;i<n1;i++){
        L.push(array[l+i])
    }
    for(let i=0;i<n2;i++){
        R.push(array[m+1+i])
    }

    let i = 0;
    let j = 0;
    let k = l;

    while(i<n1 && j<n2){
        // if(L[i] <= R[j]){ // for MErge sort in asending
        if(L[i] > R[j]){  // for desending order
            array[k] =L[i];
            i++
        }else{
            array[k] = R[j];
            j++;
        }
        k++;
    }
    while(i < n1){
        array[k] = L[i];
        i++;
        k++;
    }
    while(j < n2){
        array[k] = R[j];
        j++;
        k++;
    }
}

console.log(mergeSort([4,1,3],0,2))