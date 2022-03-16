function bSearch(low,high,k,arr){
       
    let mid = Math.floor((low+high)/2);
    //console.log(mid)
    if(low>high){
        return -1;
        //console.log(-1)
    }if(arr[mid]===k){
        return 1;
       //console.log(1)
    }if(arr[mid]<k){
        return bSearch(mid+1,high,k,arr)
    }else{
       return bSearch(low,mid-1,k,arr)
    }
}
console.log(bSearch(0,4,0,[-2,0,2,3,4]));//1