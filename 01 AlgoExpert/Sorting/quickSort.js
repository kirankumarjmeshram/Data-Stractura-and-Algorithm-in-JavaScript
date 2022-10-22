function quickSort(array) {
    // Write your code here.
    quickSortHelper(array, 0, array.length-1);
    return array;
  }
  function quickSortHelper(array, startIdx, endIdx) {
    if(startIdx >= endIdx) return ;
    const pivoteIdx = startIdx;
    let leftIdx = startIdx+1;
    let rightIdx = endIdx;
    while (rightIdx >= leftIdx) {
      if (array[leftIdx] > array[pivoteIdx] && array[rightIdx]<array[pivoteIdx]) {
        swap(leftIdx, rightIdx, array)
      }
      if(array[leftIdx] <= array[pivoteIdx]) leftIdx++;
      if(array[rightIdx] >= array[pivoteIdx]) rightIdx--;
        
      }
    swap(pivoteIdx,rightIdx, array);
     // length of left sub arr(rightIdx-1 - startIdx) < length of right sub array (endIdx - (rightIdx+1 ))
      const leftSubarrayIsSmaller = rightIdx-1 - startIdx < endIdx - (rightIdx+1 );
      if(leftSubarrayIsSmaller){
        quickSortHelper(array, startIdx, rightIdx-1);
        quickSortHelper(array, rightIdx+1, endIdx);
      }else{
        quickSortHelper(array, rightIdx+1, endIdx);
        quickSortHelper(array, startIdx, rightIdx-1);
      }
  }
  function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  