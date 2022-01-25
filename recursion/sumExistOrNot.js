   function sumExistOrNot(arr,s,n){
    if(solve(arr,s,0,0,n)==true){
        return 'yes'
    }else{
        return 'no'
    }
   }
    
function solve(arr, k, sum, i, n){

    if(sum==k) return true;
    if(i==n) return false;
    if(sum>k) return false;

    return solve(arr,k,sum+arr[i],i+1,n)||solve(arr,k,sum,i+1,n);

}

console.log(sumExistOrNot([1,2,3,4,5,6,7,8,9],5,9))//yes