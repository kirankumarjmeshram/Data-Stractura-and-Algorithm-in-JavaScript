function solve(N,arr){
    //write code here
    selectionSort(arr, 0, N);
    return console.log(arr.join(" "));
}

function selectionSort(arr, start, N) {
    if( start >=N-1) {
        return;
    }
    let minIndex = start;
    for(let i=start+1;i<N;i++) {
        if(arr[i] < arr[minIndex]){
            minIndex = i;
        }
    }
    if(minIndex !== start) {
        let temp = arr[start];
        arr[start] = arr[minIndex];
        arr[minIndex] = temp;
    }
    
    selectionSort(arr, start + 1, N)
}

// Another way to solve the problem 
// iterative way
function selectionSort2(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      // Find the minimum element in the unsorted region
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the found minimum element with the first unsorted element
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
