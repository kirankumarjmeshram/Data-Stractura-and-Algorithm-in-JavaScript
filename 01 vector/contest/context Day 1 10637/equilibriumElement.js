function equilibriumElement(n, arr){
    let leftSum = 0;
    let rightSum= arr.reduce((a,b)=>a+b);
    
    for(let i = 0; i<n;i++){
        rightSum -= arr[i];
        
        if(leftSum === rightSum){
            return i;
        }
        
        leftSum+=arr[i];
    }
    
    return -1;
}