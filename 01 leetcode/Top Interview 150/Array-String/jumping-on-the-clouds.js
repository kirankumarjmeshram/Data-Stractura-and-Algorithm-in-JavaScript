function jumpingCloud(n,arr){
    let jumps = 0;
    let i = 0;
    while(i<n-1){
        if(arr[i+2] == 0){
            jumps+=1;
            i+=2;
        }else if(arr[i+1] ==0){
            jumps+=1;
            i+=1
        }
    }
    
    return jumps;
}
