function sumExistOrNot(n,k,arr){
    if(k==0){
        return true;
    }if(n==0){
        return false;
    }

    return sumExistOrNot(n-1,k,arr) || sumExistOrNot(n-1,k-arr[n-1],arr)
}

console.log(sumExistOrNot(9, 5 ,[
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ]))