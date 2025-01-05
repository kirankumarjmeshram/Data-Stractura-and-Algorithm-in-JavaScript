function solve(N,arr){
    let leftArr = new Array(N)
    let rightArr = new Array(N)
    let prodArr = [];
    leftArr[0] = 1;
    rightArr[N-1] = 1;
    
    for(let i=1;i<N;i++){
      leftArr[i] =leftArr[i-1] * arr[i-1];
    }
    
    for(let i=N-2;i>=0;i--){
      rightArr[i] = rightArr[i+1]*arr[i+1]
    }
    for(let i=0;i<N;i++) {
      prodArr[i] = leftArr[i]*rightArr[i]
    }
    return console.log(prodArr.join(" "));
    // let prod = 1;
    // let newArr = new Array(N).fill(1)
    // for(let i=0;i<N;i++) {
    //   for(let j=0;j<N;j++){
    //     if(i===j){
    //       continue;
    //     }else{
    //       newArr[i] *= arr[j] 
    //     }
        
    //   }
    // }
    // console.log(newArr.join(" "))
  }