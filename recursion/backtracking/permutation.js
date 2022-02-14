

function getPermutation(array){
    var permutations = [];
    permutationsHelper(0,array,permutations);
    return permutations;
}

function permutationsHelper(i,array,permutations){
    if(i=== array.length){
        permutations.push(array.slice())
    }else{
        for(var j=i;j<array.length;j++){
            swap(i,j,array);
            permutationsHelper(i+1,array,permutations);
            swap(i,j,array)
        }
    }
}

function swap(i,j,array){
    var temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}

console.log(getPermutation([1,2,3]))//output=>[ [ 1, 2, 3 ],[ 1, 3, 2 ], [ 2, 1, 3 ],[ 2, 3, 1 ][ 3, 2, 1 ],[ 3, 1, 2 ]]

console.log(getPermutation(["a","b"]))//output=>[ [ 'a', 'b' ], [ 'b', 'a' ] ]
console.log(getPermutation('abc'))