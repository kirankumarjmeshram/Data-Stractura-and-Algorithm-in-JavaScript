
function dpNation(arr,n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return arr[0];
    }
    if(n==2){
        return Math.max(arr[0],arr[1])
    }

    let robStock = new Array(n);
    robStock[0]=arr[0];
    robStock[1]=Math.max(arr[0],arr[1])
    for(var i=2;i<n;i++){
        robStock[i]=Math.max(robStock[i-1],robStock[i-2]+arr[i])
    }

    return robStock[n-1]
}
console.log(dpNation([100,1,1,100],4))