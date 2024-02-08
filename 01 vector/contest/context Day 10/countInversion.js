// Inversion Count for an array indicates – how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in reverse order, the inversion count is the maximum. 
// Input: arr[] = {8, 4, 2, 1}
// Output: 6
// Explanation: Given array has six inversions: (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1).

function countInversion(n, arr){
    let count = 0;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            if(arr[j]>arr[j+1]){
                count++
            }
        }
    }
    console.log(count)
}

countInversion(4, [8, 4, 2, 1])



function mergeAndCount(arr,l,m,r){
    let left = [];
    for(let i = l; i < m + 1; i++){
        left.push(arr[i]);	
    }
    
    let right = [];
    for(let i = m + 1; i < r + 1; i++){
        right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, swaps = 0;

    while (i < left.length && j < right.length){
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        }
        else {
            arr[k++] = right[j++];
            swaps += (m + 1) - (l + i);
        }
    }
    while (i < left.length){
        arr[k++] = left[i++];
    }
    while (j < right.length){
        arr[k++] = right[j++];
    }
    return swaps;
}

function mergeSortAndCount(arr, l, r) {
    let count = 0;
    if (l < r) 
    {
        let m = Math.floor((l + r) / 2);
        count += mergeSortAndCount(arr, l, m);
        count += mergeSortAndCount(arr, m + 1, r);
        count += mergeAndCount(arr, l, m, r);
    }
    return count;
}
let arr= new Array(8, 4, 2, 1 );
console.log(mergeSortAndCount(arr, 0, arr.length - 1));