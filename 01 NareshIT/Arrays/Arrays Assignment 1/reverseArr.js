// Input 1: arr = [1, 2, 3, 4, 5]
// Output 1: [5, 4, 3, 2, 1]
// Explanation 1: Reverse of the above array is [5, 4, 3, 2, 1].
// Input 2: arr = [1, 2]
// Output 2: [2, 1]Constraints:
// 1<=arr.length<=10000

//Given an array of N integers. Reverse the given array.
function reverseArr (arr){
    let n = arr.length;
    for(let i=0;i<Math.floor(n/2);i++){
        let temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;
    }
    return arr;
}

console.log(reverseArr([1,2,3,4,5]))