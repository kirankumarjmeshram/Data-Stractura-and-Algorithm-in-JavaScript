function powerFn(n,m){
    if(m <1){
        return 1;
    }else{
        return n*powerFn(n,m-1);
    }
}