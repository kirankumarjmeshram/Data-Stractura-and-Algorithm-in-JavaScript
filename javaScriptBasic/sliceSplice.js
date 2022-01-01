/*splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN) */

//You are given two arrays and an index.
//Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray
  }
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));