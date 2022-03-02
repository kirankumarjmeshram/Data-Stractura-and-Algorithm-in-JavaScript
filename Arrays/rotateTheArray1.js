

function rotateArray(arr,n,k){
    k=k%n;
    var newArr = [];
    for(var i=0;i<n;i++){
        if(i<k){
            newArr.push(arr[n+i-k])
        }else{
            newArr.push(arr[i-k])
        }
    }
    return newArr
}
console.log(rotateArray([1, 2, 3, 4, 5],5,2))

