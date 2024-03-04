function subArrSum(n,m,arr){
    let count = 0;
    for(let i=0;i<n;i++){
        let subArrSum = 0;
        for(let j=i;j<n;j++){
            subArrSum += arr[j];
            if(subArrSum < m){
                count +=1;
            }else{
                break;
            }
        }
    }
    return count;
}