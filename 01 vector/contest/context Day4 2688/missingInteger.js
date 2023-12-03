function missingInteger(arr) {
    let n = arr.length;
    let N = n +1;
    let totalSum = N*(N+1)/2
    let sum = 0;
    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
    console.log(totalSum-sum)
  }