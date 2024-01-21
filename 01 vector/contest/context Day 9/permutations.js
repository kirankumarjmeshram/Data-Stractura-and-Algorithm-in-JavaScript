function generatePermutation(n, arr){
    let permutations = [];
    permutationHelper(0,n,arr,permutations);
    permutations = permutations.sort();
    for(let i=0;i<permutations.length;i++){
        console.log(permutations[i].join(" "));
    }
}

function permutationHelper (index, n, arr, permutations){
    if(index === n-1){
        permutations.push(arr.slice());
    }
    for(let i=index;i<n;i++){
        swap(arr, i, index);
        permutationHelper(index+1, n, arr, permutations);
        swap(arr, i, index);
    }
}
function swap(arr, i, j){
    let temp;
    temp = arr[i];
    arr[i]=arr[j];
    arr[j] = temp;
}