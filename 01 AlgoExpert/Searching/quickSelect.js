//O(N) time avg and O(N*N) worst time
function quickselect(array, k) {
    const position = k-1;
    return quickselectHelper(array, 0, array.length-1, position);
    // Write your code here.
  }
  function quickselectHelper(array, startIdx, endIdx, position) {
    while (true) {
      if(startIdx > endIdx){
        throw new Error('Your algorithm should never arrive here!');
      }
      const piotIdx = startIdx;
      let leftIdx = startIdx + 1;
      let rightIdx = endIdx;
      while (leftIdx <= rightIdx) {
        if(array[leftIdx] > array[piotIdx] && array[rightIdx] < array[piotIdx]) {
          swap(array, leftIdx, rightIdx);
        }
        if(array[leftIdx] <= array[piotIdx]) {
          leftIdx++;
        }
        if(array[rightIdx] >= array[piotIdx]) {
          rightIdx--;
        }
      }
      swap(array, piotIdx, rightIdx);
      if(rightIdx === position){
        return array[rightIdx];
      }else if(rightIdx < position) {
        startIdx = rightIdx + 1;
      }else{
        endIdx = rightIdx -1
      }
    }
  }
  function swap(array, i, j) {
    //[array[i], array[j]] = [array[j], array[i]]
    const temp = array[i]
    array[i] = array[j];
    array[j] = temp;
  }