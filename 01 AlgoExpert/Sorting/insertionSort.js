// https://www.algoexpert.io/questions/insertion-sort

function insertionSort(array){
    let n = array.length;
    for(let i =0;i<n;i++){
        let j = i;
        while(j>0 && array[j]<array[j-1]){
            let temp = array[j];
            array[j]=array[j-1];
            array[j-1] = temp;
            j--;
        }
    }
    return array
}

console.log(insertionSort([8,5,2,9])); // [ 2, 5, 8, 9 ]