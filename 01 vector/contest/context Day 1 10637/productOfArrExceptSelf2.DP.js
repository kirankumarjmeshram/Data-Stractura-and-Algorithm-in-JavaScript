function productOfArr(n, arr){
    let leftArr = new Array(n)
    let rightArr = new Array(n)
    let product = [];
    leftArr[0] =1;
    rightArr[n-1]=1;
    
    for(let i=1;i<n;i++){
        leftArr[i] = leftArr[i-1]*arr[i-1]
    }
    
    for(let i=n-2;i>=0;i--){
        rightArr[i] = rightArr[i+1]*arr[i+1]
    }
    
    for(let i=0;i<n;i++){
        product[i] = leftArr[i]*rightArr[i]
    }
    
    return product.join(" ")
}