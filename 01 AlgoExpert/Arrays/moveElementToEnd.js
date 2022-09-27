function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i = 0;
    let j = array.length-1
    while(i<j){
      while(array[j] === toMove) j--;
      if(i<j && array[i] === toMove){
        swap(array, i, j);
      }
      i++;
    }
    return array;
  }
  
  function swap(arr, a, b) {
    let temp;
    temp = arr[a];
    arr[a] =arr[b];
    arr[b] = temp;
  }