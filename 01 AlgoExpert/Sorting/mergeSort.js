function mergeSort(array) {
    // Write your code here.
    let l = 0;
    let r = array.length-1;
    mergeSortHelper(array,l,r)
    return array;
  }
  function  mergeSortHelper(array,l,r) {
     if(l>=r){
      return;
    }
    let m = Math.floor((l+r)/2);
    mergeSortHelper(array,l,m)
    mergeSortHelper(array,m+1,r)
    merge(array, l, m, r)
  }
  
  function merge(arr, l, m, r){
    let n1 = m-l+1;
    let n2 = r-m;
    let L = [];
    let R = [];
    for(let i=0;i<n1;i++){
      L[i] = arr[l+i];
    }
    for(let j=0;j<n2;j++){
      R[j] = arr[j+m+1]
    }
    let i =0;
    let j =0;
    let k =l;
    while(i<n1 && j < n2){
      if(L[i] <= R[j]){
        arr[k] = L[i];
        i++;
      }
      else{
        arr[k] = R[j];
        j++;
      }
      k++
    }
    while(i<n1){
      arr[k] = L[i];
      i++;
      k++;
    }
    while(j<n2){
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  // Do not edit the line below.
  exports.mergeSort = mergeSort;
  