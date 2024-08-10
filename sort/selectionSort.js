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
