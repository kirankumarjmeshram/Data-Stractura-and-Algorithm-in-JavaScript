function subArrSum(n,m,arr){
    while(right < n){
        subArrSum += arr[right];
        // console.log("subArrSum2 =>",subArrSum);
        while(subArrSum >=m){
            subArrSum -= arr[left];
            left++;
        }
        // console.log("R",right,"subArrSum",subArrSum ,"L",left);
        count +=right-left+1;
        right++;
        
    }
    return count;
}