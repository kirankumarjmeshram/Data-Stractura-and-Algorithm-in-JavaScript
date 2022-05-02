//01 AlgoExpert\Famous Algorithms\Kadane's AlgorithmProblemStatement.png

const kadanesAlgorith = (array) => {
let currentMax = array[0];
let maxSum = array[0];
for(let i=1;i<array.length;i++){
    currentMax = Math.max(array[i],currentMax+array[i]);
    maxSum = Math.max(currentMax,maxSum)
}
    return maxSum
}

console.log(kadanesAlgorith([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))//19