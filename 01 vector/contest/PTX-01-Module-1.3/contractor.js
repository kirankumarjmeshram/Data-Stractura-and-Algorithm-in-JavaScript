function contractor(n,arrival,leaving){
    let result = [];
    result.push(leaving[0]-arrival[0]);
    for(let i=1;i<n;i++){
        if(arrival[i]<leaving[i-1]){
            result.push(leaving[i]-leaving[i-1]);
        }else{
            result.push(leaving[i]-arrival[i]);
        }
    }
    
    return result.join(" ");
}