function powerOf3(n){
    if(n<1){
        return "NO"
    }
    while(n>1){
        if(n%3 !==0){
            return "NO"
        }
        n = n/3
    }
    return "YES"
}