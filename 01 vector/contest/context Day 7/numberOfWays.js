function NStepWays(n){
    if(n<=2){
        return n;
    }else if(n ===3){
        return 4;
    }else{
        return NStepWays(n-1)+NStepWays(n-2)+NStepWays(n-3);
    }
}