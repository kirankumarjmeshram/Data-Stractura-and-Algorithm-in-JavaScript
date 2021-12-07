//difference of two ARRAYS
function diffArray(arr1,arr2){
    var newArr = arr1.concat(arr2);
    //console.log(newArr)

    return newArr.filter(el=>!(arr1.includes(el))&&arr2.includes(el))
}

console.log(diffArray([1,2,3,5],[1,2,3,4,5]))