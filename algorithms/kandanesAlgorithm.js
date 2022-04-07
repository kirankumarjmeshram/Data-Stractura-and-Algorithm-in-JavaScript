let a = [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4];

function kandanesAlgorithm(arr){
    let maxSum=arr[0];
    let currMax = arr[0];

    for(let i=1;i<arr.length;i++){
        currMax = Math.max(arr[i],currMax+arr[i]);
        maxSum = Math.max(maxSum,currMax)
    }
    return maxSum
}

console.log(kandanesAlgorithm(a))